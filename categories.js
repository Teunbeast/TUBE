// ============================================================
// TUBE CATEGORIEËN
// ============================================================
// Hier kun je zelf categorieën en subcategorieën aanpassen.
//
// NIEUWE SUBCATEGORIE TOEVOEGEN:
// 1. Zoek hieronder de juiste categorie.
// 2. Voeg binnen "subcategories" een nieuwe regel toe, bijvoorbeeld:
//    { name: "Nieuwe subcategorie", description: "Korte uitleg." },
// 3. Sla het bestand op en vernieuw de website.
//
// Let op: zet een komma achter elke regel, behalve dat bij de laatste
// regel niet per se nodig is.
// ============================================================

window.TUBE_CATEGORIES = [
  {
    slug: "psychologie",
    name: "Psychologie",
    description: "Begrijp gedrag, denken en besluitvorming.",
    subcategories: [
      { name: "Cognitie & geheugen", description: "Hoe aandacht, geheugen en denken werken." },
      { name: "Motivatie & gewoontes", description: "Waarom mensen handelen en hoe gedrag verandert." },
      { name: "Sociale psychologie", description: "Hoe anderen ons gedrag, keuzes en overtuigingen beïnvloeden." },
      { name: "Emoties & mentaal welzijn", description: "Begrijp emoties, stress en psychologisch welzijn." },
      { name: "Besluitvorming", description: "Leer hoe mensen keuzes maken en denkfouten ontstaan." }
    ]
  },
  {
    slug: "persoonlijke-ontwikkeling",
    name: "Persoonlijke ontwikkeling",
    description: "Bouw aan gewoontes, vaardigheden en mindset.",
    subcategories: [
      { name: "Productiviteit & focus", description: "Werk doelgerichter en bescherm je aandacht." },
      { name: "Gewoontes & discipline", description: "Bouw gedrag dat je doelen ondersteunt." },
      { name: "Communicatie", description: "Leer duidelijker spreken, luisteren en overtuigen." },
      { name: "Zelfvertrouwen & mindset", description: "Ontwikkel een sterkere houding tegenover groei en uitdagingen." },
      { name: "Doelen & timemanagement", description: "Plan slimmer en zet intenties om in actie." }
    ]
  },
  {
    slug: "ondernemen",
    name: "Ondernemen",
    description: "Van idee naar een sterk en duurzaam bedrijf.",
    subcategories: [
      { name: "Businessmodel & startup", description: "Van probleem en idee naar een werkend verdienmodel." },
      { name: "Marketing", description: "Bereik de juiste doelgroep met een heldere propositie." },
      { name: "Sales", description: "Leer verkopen zonder onnodige druk of ruis." },
      { name: "Strategie & groei", description: "Maak keuzes die duurzame groei ondersteunen." },
      { name: "Leiderschap & management", description: "Bouw teams en stuur mensen effectief aan." }
    ]
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    description: "Leer online verkopen, optimaliseren en groeien.",
    subcategories: [
      { name: "Webshop opzetten", description: "Van platformkeuze tot een duidelijke winkelstructuur." },
      { name: "Productonderzoek", description: "Vind producten met vraag, marge en een duidelijke doelgroep." },
      { name: "Conversie-optimalisatie", description: "Maak productpagina’s en funnels overtuigender." },
      { name: "Online advertising", description: "Leer gericht adverteren en resultaten analyseren." },
      { name: "Fulfilment & klantbeleving", description: "Verbeter levering, service en herhaalaankopen." }
    ]
  },
  {
    slug: "financien",
    name: "Financiën",
    description: "Begrijp geld, investeren en financiële keuzes.",
    subcategories: [
      { name: "Budgetteren & sparen", description: "Krijg overzicht en bouw financiële ruimte op." },
      { name: "Beleggen", description: "Leer de basis van rendement, risico en spreiding." },
      { name: "Persoonlijke financiën", description: "Maak betere keuzes rond inkomen, uitgaven en vermogen." },
      { name: "Economie", description: "Begrijp inflatie, rente, groei en economische cycli." },
      { name: "Financiële onafhankelijkheid", description: "Werk doelgericht aan meer financiële vrijheid." }
    ]
  },
  {
    slug: "gezondheid",
    name: "Gezondheid",
    description: "Leer slimmer omgaan met lichaam en welzijn.",
    subcategories: [
      { name: "Voeding", description: "Begrijp voedingsprincipes en maak bewustere keuzes." },
      { name: "Slaap", description: "Leer hoe slaap herstel, energie en focus beïnvloedt." },
      { name: "Sport & training", description: "Bouw conditie, kracht en een gezonde routine op." },
      { name: "Stress & herstel", description: "Herken belasting en verbeter je herstel." },
      { name: "Gezonde gewoontes", description: "Maak gezond gedrag eenvoudiger en duurzamer." }
    ]
  },
  {
    slug: "technologie",
    name: "Technologie",
    description: "Begrijp digitale tools, AI en nieuwe technologie.",
    subcategories: [
      { name: "AI & machine learning", description: "Begrijp wat AI kan, hoe het werkt en hoe je het toepast." },
      { name: "Programmeren", description: "Leer software bouwen en logisch problemen oplossen." },
      { name: "Cybersecurity", description: "Begrijp digitale veiligheid, risico’s en bescherming." },
      { name: "Data & analytics", description: "Leer data lezen, analyseren en gebruiken voor beslissingen." },
      { name: "Automatisering & no-code", description: "Automatiseer processen zonder onnodige complexiteit." }
    ]
  },
  {
    slug: "creativiteit",
    name: "Creativiteit",
    description: "Ontwikkel ideeën en maakvaardigheid.",
    subcategories: [
      { name: "Design", description: "Leer visueel denken en duidelijke ontwerpen maken." },
      { name: "Schrijven", description: "Ontwikkel ideeën, structuur en overtuigende teksten." },
      { name: "Foto & video", description: "Leer verhalen vertellen met beeld." },
      { name: "Muziek", description: "Ontwikkel muzikaal inzicht en creatieve techniek." },
      { name: "Creatief denken", description: "Genereer betere ideeën en doorbreek vaste denkpatronen." }
    ]
  }
];
