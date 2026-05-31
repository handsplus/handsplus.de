/** Öffentliche Google-Rezensionen – manuell gepflegt, Originaltexte mit Quellenangabe. */

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Health+and+Safety+%2B+%7C+Arbeitsschutz+%26+Brandschutz+K%C3%B6ln+Rezensionen&tbm=lcl";

export type GoogleReview = {
  id: string;
  author: string;
  role?: string;
  quote: string;
  stars: 5;
  /** Optional, z. B. „vor 2 Monaten“ – nur zur Einordnung, bei Bedarf aktualisieren */
  relativeTime?: string;
  topic?: string;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "nurguel-aslan",
    author: "Nurgül Aslan",
    stars: 5,
    relativeTime: "vor 6 Monaten",
    topic: "Arbeitsschutz & Brandschutz",
    quote:
      "Ich bin absolut begeistert von der Professionalität und Kompetenz des Teams von Health and Safety +. Die Beratung war nicht nur fachlich auf höchstem Niveau, sondern auch sehr praxisnah und verständlich erklärt. Besonders beeindruckt hat mich, wie individuell auf die Bedürfnisse unseres Unternehmens eingegangen wurde – von der Gefährdungsbeurteilung bis hin zur Brandschutzunterweisung. Ein zuverlässiger Partner, der Sicherheit und Qualität wirklich lebt. Sehr empfehlenswert für alle Unternehmen, die Arbeitsschutz ernst nehmen und Wert auf eine persönliche Betreuung legen!",
  },
  {
    id: "aykut-torbali",
    author: "Aykut Torbali",
    role: "Architekt",
    stars: 5,
    topic: "SiGeKo",
    quote:
      "Wir arbeiten mit Health and Safety+ als Sicherheits- und Gesundheitskoordinator (SiGeKo) zusammen und sind mit der fachkundigen Unterstützung sehr zufrieden. Planung und Umsetzung der Arbeitsschutzmaßnahmen sind vorausschauend und strukturiert, die Kommunikation klar und lösungsorientiert. So entsteht spürbar mehr Sicherheit auf der Baustelle – wir können Health and Safety+ uneingeschränkt empfehlen.",
  },
  {
    id: "lena-hassert",
    author: "Lena Sophie Hassert",
    stars: 5,
    relativeTime: "vor 2 Monaten",
    topic: "Gefährdungsbeurteilung",
    quote:
      "Super schnelle und freundliche Beratung! Das Team hat uns innerhalb weniger Tage eine Gefährdungsbeurteilung erstellt, die von der Bezirksregierung anerkannt wurde. Vielen Dank für den Einsatz!",
  },
  {
    id: "11-burgers",
    author: "11 Burgers",
    stars: 5,
    relativeTime: "vor 7 Monaten",
    topic: "Brandschutz",
    quote:
      "Wir haben im Rahmen unserer Baugenehmigung mit Health and Safety+ im Bereich Brandschutz zusammengearbeitet und sind äußerst zufrieden. Das Team war sehr kompetent, zuverlässig und hat uns während des gesamten Prozesses professionell begleitet. Absolut empfehlenswert für jedes Bauvorhaben!",
  },
];
