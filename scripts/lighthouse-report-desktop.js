/**
 * Detaillierter Lighthouse-Bericht mit Grafiken (Balken, Kreis).
 * Speichert HTML + PDF auf dem Desktop unter "Health and Safety Plus Lighthouse Test".
 * Aufruf: node scripts/lighthouse-report-desktop.js
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const jsonPath = path.join(projectRoot, "lighthouse-report.report.json");

// Desktop-Ordner: "Health and Safety Plus Lighthouse Test"
const userProfile = process.env.USERPROFILE || "";
const oneDriveDesktop = path.join(userProfile, "OneDrive", "Desktop");
const normalDesktop = path.join(userProfile, "Desktop");
const desktopBase = fs.existsSync(oneDriveDesktop) ? oneDriveDesktop : normalDesktop;
const desktopDir = path.join(desktopBase, "Health and Safety Plus Lighthouse Test");

if (!fs.existsSync(jsonPath)) {
  console.error("Lighthouse-JSON nicht gefunden:", jsonPath);
  console.error("Bitte zuerst Lighthouse ausführen: npm run lighthouse:prod");
  process.exit(1);
}

try {
  fs.mkdirSync(desktopDir, { recursive: true });
} catch (e) {
  console.error("Ordner konnte nicht erstellt werden:", desktopDir, e.message);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const { audits = {}, categories = {}, fetchTime, requestedUrl } = data;

function scoreToPercent(score) {
  if (score == null) return null;
  return Math.round(score * 100);
}

function getAudit(id) {
  const a = audits[id];
  return a ? { value: a.displayValue || "", score: a.score } : null;
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
  if (cat)
    categoryScores.push({
      id,
      label,
      score: scoreToPercent(cat.score),
      scoreRaw: cat.score,
    });
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

// Farben für Kategorien (für Balken + Kreis)
const colors = ["#1e4d44", "#2d6a5f", "#3d877a", "#4aa394"];
const scoreColor = (score) =>
  score >= 90 ? "#059669" : score >= 50 ? "#d97706" : "#dc2626";

// SVG Donut (Kreisdiagramm) – 4 Viertel, je nach Score gefüllt (Umfang 2*pi*r)
function buildDonutChart() {
  const r = 90;
  const quarter = (2 * Math.PI * r) / 4; // ein Viertel des Kreises
  return categoryScores
    .map((c, i) => {
      const value = c.score != null ? c.score : 0;
      const pct = Math.min(100, value) / 100;
      const filled = pct * quarter;
      const gap = quarter - filled;
      const dash = `${filled.toFixed(1)} ${gap.toFixed(1)}`;
      const rot = i * 90;
      const color = colors[i % colors.length];
      return `<circle cx="120" cy="120" r="${r}" fill="none" stroke="${color}" stroke-width="24" stroke-dasharray="${dash}" stroke-dashoffset="0" transform="rotate(${rot} 120 120)" />`;
    })
    .join("\n");
}

// Legende für Donut
function buildDonutLegend() {
  return categoryScores
    .map(
      (c, i) =>
        `<div class="legend-item"><span class="legend-dot" style="background:${colors[i % colors.length]}"></span><span>${c.label}: <strong>${c.score != null ? c.score : "—"}/100</strong></span></div>`
    )
    .join("");
}

// Balkendiagramm Kategorien (horizontal)
function buildBarChartCategories() {
  return categoryScores
    .map(
      (c, i) => `
    <div class="bar-row">
      <span class="bar-label">${c.label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${c.score != null ? c.score : 0}%;background:${scoreColor(c.score != null ? c.score : 0)}"></div><span class="bar-value">${c.score != null ? c.score : "—"}</span></div>
    </div>`
    )
    .join("");
}

// Balkendiagramm Performance-Metriken (Bewertung 0–100 %)
function buildBarChartMetrics() {
  return performanceAudits
    .map((a) => {
      const pct = a.score != null ? Math.round(a.score * 100) : 0;
      const label =
        a.score != null
          ? a.score >= 0.9
            ? "Gut"
            : a.score >= 0.5
              ? "OK"
              : "Schlecht"
          : "—";
      return `
    <div class="bar-row">
      <span class="bar-label">${a.label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${scoreColor(pct)}"></div><span class="bar-value">${a.value}</span></div>
    </div>`;
    })
    .join("");
}

const htmlPath = path.join(desktopDir, "Lighthouse-Bericht-H&S+.html");
const pdfPath = path.join(desktopDir, "Lighthouse-Bericht-H&S+.pdf");

const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>Lighthouse-Bericht – Health and Safety Plus</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; color: #1e293b; line-height: 1.5; background: #f8fafc; }
    .header { text-align: center; margin-bottom: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #1e4d44 0%, #2d6a5f 100%); color: #fff; border-radius: 12px; }
    .header h1 { margin: 0 0 0.25rem 0; font-size: 1.75rem; }
    .header .sub { opacity: 0.9; font-size: 0.95rem; }
    .meta { color: #64748b; font-size: 0.875rem; margin-bottom: 2rem; text-align: center; }
    section { background: #fff; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    h2 { font-size: 1.2rem; margin: 0 0 1rem 0; color: #1e4d44; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
    .charts-row { display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 1rem; }
    .chart-box { flex: 1; min-width: 260px; }
    .chart-box h3 { font-size: 0.95rem; margin: 0 0 0.75rem 0; color: #475569; }
    .donut-wrap { position: relative; width: 240px; height: 240px; margin: 0 auto 1rem; }
    .donut-wrap svg { transform: rotate(-90deg); }
    .donut-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5rem; font-weight: 700; color: #1e4d44; }
    .legend { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; justify-content: center; }
    .legend-item { display: flex; align-items: center; gap: 0.35rem; font-size: 0.875rem; }
    .legend-dot { width: 12px; height: 12px; border-radius: 50%; }
    .bar-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
    .bar-label { flex: 0 0 200px; font-size: 0.85rem; }
    .bar-track { flex: 1; height: 24px; background: #e2e8f0; border-radius: 6px; position: relative; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 6px; transition: width 0.5s ease; }
    .bar-value { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 0.75rem; font-weight: 600; color: #334155; text-shadow: 0 0 2px #fff; }
    table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid #f1f5f9; }
    th { font-weight: 600; color: #475569; font-size: 0.875rem; }
    .score-good { color: #059669; }
    .score-ok { color: #d97706; }
    .score-bad { color: #dc2626; }
    .score { font-weight: 600; }
    .footer { margin-top: 2rem; font-size: 0.75rem; color: #94a3b8; text-align: center; }
    @media print { body { background: #fff; } section { box-shadow: none; border: 1px solid #e2e8f0; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Health and Safety Plus</h1>
    <p class="sub">Lighthouse-Test – Detaillierter Bericht</p>
  </div>
  <p class="meta">URL: ${requestedUrl} · Erstellt: ${dateStr}</p>

  <section>
    <h2>Übersicht: Kategorien-Scores</h2>
    <div class="charts-row">
      <div class="chart-box">
        <h3>Balkendiagramm</h3>
        ${buildBarChartCategories()}
      </div>
      <div class="chart-box">
        <h3>Kreisdiagramm (Anteile)</h3>
        <div class="donut-wrap">
          <svg width="240" height="240" viewBox="0 0 240 240" style="transform: rotate(-90deg);">${buildDonutChart()}</svg>
          <span class="donut-center">100</span>
        </div>
        <div class="legend">${buildDonutLegend()}</div>
      </div>
    </div>
    <table>
      <thead><tr><th>Kategorie</th><th>Score</th></tr></thead>
      <tbody>
        ${categoryScores
          .map(
            (c) => `
        <tr>
          <td>${c.label}</td>
          <td class="score score-${c.score >= 90 ? "good" : c.score >= 50 ? "ok" : "bad"}">${c.score != null ? c.score : "—"}/100</td>
        </tr>`
          )
          .join("")}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Performance-Metriken im Detail</h2>
    <div class="chart-box" style="max-width: 100%;">
      ${buildBarChartMetrics()}
    </div>
    <table>
      <thead><tr><th>Metrik</th><th>Wert</th><th>Bewertung</th></tr></thead>
      <tbody>
        ${performanceAudits
          .map((a) => {
            const s = a.score != null ? (a.score >= 0.9 ? "good" : a.score >= 0.5 ? "ok" : "bad") : "";
            const label = a.score != null ? (a.score >= 0.9 ? "Gut" : a.score >= 0.5 ? "OK" : "Schlecht") : "—";
            return `<tr><td>${a.label}</td><td>${a.value}</td><td class="score-${s}">${label}</td></tr>`;
          })
          .join("")}
      </tbody>
    </table>
  </section>

  <section>
    <h2>Kurzbewertung</h2>
    <ul>
      <li><strong>FCP (First Contentful Paint):</strong> Zeit bis der erste sichtbare Inhalt erscheint.</li>
      <li><strong>LCP (Largest Contentful Paint):</strong> Zeit bis das größte Element geladen ist. Ziel: unter 2,5 s.</li>
      <li><strong>TBT (Total Blocking Time):</strong> Blockierung des Main Thread. Ziel: möglichst 0 ms.</li>
      <li><strong>CLS (Cumulative Layout Shift):</strong> Layout-Stabilität. Ziel: unter 0,1.</li>
    </ul>
  </section>

  <p class="footer">Health and Safety Plus · Lighthouse-Bericht. Als PDF speichern: Drucken (Strg+P) → „Als PDF speichern“.</p>
</body>
</html>`;

fs.writeFileSync(htmlPath, html, "utf8");
console.log("Bericht erstellt:", htmlPath);

// PDF per Chrome Headless
const chromePaths = [
  process.env.LOCALAPPDATA + "\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const absHtml = path.resolve(htmlPath).replace(/\\/g, "/");
const fileUrl = "file:///" + absHtml;

for (const chrome of chromePaths) {
  if (fs.existsSync(chrome)) {
    try {
      const { execSync } = require("child_process");
      execSync(
        `"${chrome}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${path.resolve(pdfPath)}" "${fileUrl}"`,
        { stdio: "pipe", timeout: 15000 }
      );
      console.log("PDF erstellt:", pdfPath);
      break;
    } catch (e) {
      console.warn("Chrome PDF:", e.message);
    }
  }
}

console.log("\nDesktop-Ordner:", desktopDir);
console.log("Falls kein PDF: Öffne die HTML-Datei im Browser → Drucken → Als PDF speichern.");
