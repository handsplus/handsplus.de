/**
 * Liest Lighthouse-JSON, erstellt einen Bericht (HTML) und optional PDF.
 * Aufruf: node scripts/lighthouse-report-to-pdf.js
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const jsonPath = path.join(projectRoot, "lighthouse-report.report.json");
const htmlPath = path.join(projectRoot, "lighthouse-report-bericht.html");
const pdfPath = path.join(projectRoot, "lighthouse-report-bericht.pdf");

if (!fs.existsSync(jsonPath)) {
  console.error("Lighthouse-JSON nicht gefunden:", jsonPath);
  console.error("Bitte zuerst Lighthouse ausführen: npm run lighthouse");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const { audits = {}, categories = {}, fetchTime, requestedUrl } = data;

function scoreToPercent(score) {
  if (score == null) return "—";
  return Math.round(score * 100);
}

function getAudit(id) {
  const a = audits[id];
  return a ? { value: a.displayValue || a.description, score: a.score } : null;
}

const catNames = {
  performance: "Performance",
  accessibility: "Barrierefreiheit",
  "best-practices": "Best Practices",
  seo: "SEO",
};

const metricNames = {
  "first-contentful-paint": "First Contentful Paint (FCP)",
  "largest-contentful-paint": "Largest Contentful Paint (LCP)",
  "total-blocking-time": "Total Blocking Time (TBT)",
  "cumulative-layout-shift": "Cumulative Layout Shift (CLS)",
  "speed-index": "Speed Index",
  interactive: "Time to Interactive (TTI)",
};

const categoryScores = [];
for (const [id, label] of Object.entries(catNames)) {
  const cat = categories[id];
  if (cat) categoryScores.push({ id, label, score: scoreToPercent(cat.score) });
}

const performanceAudits = [];
for (const [id, label] of Object.entries(metricNames)) {
  const a = getAudit(id);
  if (a) performanceAudits.push({ id, label, value: a.value, score: a.score });
}

const dateStr = fetchTime
  ? new Date(fetchTime).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  : new Date().toLocaleDateString("de-DE");

const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Lighthouse-Bericht – H&S+ Website</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; color: #1e293b; line-height: 1.5; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .meta { color: #64748b; font-size: 0.875rem; margin-bottom: 2rem; }
    h2 { font-size: 1.125rem; margin-top: 2rem; margin-bottom: 0.75rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.25rem; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid #f1f5f9; }
    th { font-weight: 600; color: #475569; font-size: 0.875rem; }
    .score-good { color: #059669; }
    .score-ok { color: #d97706; }
    .score-bad { color: #dc2626; }
    .score { font-weight: 600; }
    .footer { margin-top: 2rem; font-size: 0.75rem; color: #94a3b8; }
    @media print { body { padding: 1rem; } }
  </style>
</head>
<body>
  <h1>Lighthouse-Bericht</h1>
  <p class="meta">URL: ${requestedUrl} · Erstellt: ${dateStr}</p>

  <h2>Übersicht Kategorien</h2>
  <table>
    <thead><tr><th>Kategorie</th><th>Score</th></tr></thead>
    <tbody>
      ${categoryScores
        .map(
          (c) => `
        <tr>
          <td>${c.label}</td>
          <td class="score score-${c.score >= 90 ? "good" : c.score >= 50 ? "ok" : "bad"}">${c.score}/100</td>
        </tr>`
        )
        .join("")}
    </tbody>
  </table>

  <h2>Performance-Metriken (FCP, LCP, TBT, CLS)</h2>
  <table>
    <thead><tr><th>Metrik</th><th>Wert</th><th>Bewertung</th></tr></thead>
    <tbody>
      ${performanceAudits
        .map(
          (a) => {
            const s = a.score != null ? (a.score >= 0.9 ? "good" : a.score >= 0.5 ? "ok" : "bad") : "";
            const label = a.score != null ? (a.score >= 0.9 ? "Gut" : a.score >= 0.5 ? "Verbesserung möglich" : "Schlecht") : "—";
            return `
        <tr>
          <td>${a.label}</td>
          <td>${a.value}</td>
          <td class="score-${s}">${label}</td>
        </tr>`;
          }
        )
        .join("")}
    </tbody>
  </table>

  <h2>Kurzbewertung</h2>
  <ul>
    <li><strong>FCP (First Contentful Paint):</strong> Zeit bis der erste sichtbare Inhalt erscheint. Je niedriger, desto besser.</li>
    <li><strong>LCP (Largest Contentful Paint):</strong> Zeit bis das größte sichtbare Element geladen ist. Ziel: unter 2,5 s.</li>
    <li><strong>TBT (Total Blocking Time):</strong> Dauer, in der der Main Thread blockiert war. Ziel: möglichst 0 ms.</li>
    <li><strong>CLS (Cumulative Layout Shift):</strong> Stabilität des Layouts (kein Springen). Ziel: unter 0,1.</li>
  </ul>

  <p class="footer">Erstellt mit Lighthouse. Diesen Bericht als PDF speichern: Drucken (Strg+P) → „Als PDF speichern“.</p>
</body>
</html>`;

fs.writeFileSync(htmlPath, html, "utf8");
console.log("Bericht erstellt:", htmlPath);

// PDF per Chrome Headless (falls vorhanden)
const chromePaths = [
  process.env.LOCALAPPDATA + "\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const absHtml = path.resolve(htmlPath).replace(/\\/g, "/");
const fileUrl = "file:///" + absHtml;

for (const chrome of chromePaths) {
  if (fs.existsSync(chrome)) {
    const { execSync } = require("child_process");
    try {
      execSync(
        `"${chrome}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${path.resolve(pdfPath)}" "${fileUrl}"`,
        { stdio: "pipe", timeout: 10000 }
      );
      console.log("PDF erstellt:", pdfPath);
      break;
    } catch (e) {
      console.warn("Chrome PDF fehlgeschlagen:", e.message);
    }
  }
}

console.log("\nFalls kein PDF erzeugt wurde: Öffne", htmlPath, "im Browser und wähle Drucken → Als PDF speichern.");
