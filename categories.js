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
  },
  {
    slug: "talen",
    name: "Talen",
    description: "Leer talen stap voor stap en doelgericht.",
    subcategories: [
      { name: "Nederlands", description: "Leer Nederlandse grammatica, spelling en taalgebruik." },
      { name: "Engels", description: "Leer Engelse grammatica, woordenschat en taalgebruik." },
      {
        name: "Frans",
        description: "Leer Frans via duidelijke leerjaren en fases.",
        levels: [
          {
            name: "HAVO 1",
            description: "Een compleet eerste leerjaar met basiswoordenschat, grammatica en taalvaardigheden.",
            phases: [
              {
                name: "Fase 1 — Starten met Frans",
                description: "Leg de basis voor uitspraak, begroeten en jezelf voorstellen.",
                topics: [
                  "Begroeten en afscheid nemen",
                  "Jezelf voorstellen: naam, leeftijd en woonplaats",
                  "Frans alfabet, uitspraak en accenten",
                  "Getallen 0 t/m 20",
                  "Persoonlijke voornaamwoorden: je, tu, il/elle/on, nous, vous, ils/elles",
                  "Werkwoord être (zijn) in de tegenwoordige tijd",
                  "Werkwoord avoir (hebben) in de tegenwoordige tijd",
                  "Eenvoudige klaszinnen en instructies",
                  "Korte luister- en leeszinnen begrijpen"
                ]
              },
              {
                name: "Fase 2 — Familie en beschrijven",
                description: "Praat over jezelf, familie en kenmerken van mensen en dingen.",
                topics: [
                  "Familieleden, huisdieren en persoonlijke gegevens",
                  "Bepaalde lidwoorden: le, la, l’, les",
                  "Onbepaalde lidwoorden: un, une, des",
                  "Mannelijke en vrouwelijke zelfstandige naamwoorden",
                  "Enkelvoud en meervoud",
                  "Bijvoeglijke naamwoorden: vorm en plaats",
                  "Bezittelijke woorden: mon/ma/mes, ton/ta/tes, son/sa/ses",
                  "Ontkenning met ne ... pas",
                  "Vraagwoorden: qui, que, où, quand, comment, pourquoi, quel",
                  "Leeftijd uitdrukken met avoir"
                ]
              },
              {
                name: "Fase 3 — School, dag en tijd",
                description: "Leer praten over school, planning en dagelijkse momenten.",
                topics: [
                  "Schoolvakken en schoolspullen",
                  "Dagen van de week en maanden",
                  "Datums zeggen en schrijven",
                  "Kloktijden vragen en zeggen",
                  "Getallen uitbreiden tot 100",
                  "Regelmatige werkwoorden op -er in de présent",
                  "Zinnen maken met onderwerp + persoonsvorm",
                  "Eenvoudige vragen stellen en beantwoorden",
                  "Een rooster of korte schooltekst lezen"
                ]
              },
              {
                name: "Fase 4 — Vrije tijd, voorkeuren en sport",
                description: "Vertel wat je leuk vindt, wat je doet en waar je naartoe gaat.",
                topics: [
                  "Hobby’s, sport, muziek en vrije tijd",
                  "aimer, adorer, détester en préférer",
                  "Werkwoord faire in de tegenwoordige tijd",
                  "Werkwoord aller in de tegenwoordige tijd",
                  "Sporten en activiteiten met faire + du/de la/de l’/des",
                  "Bestemmingen met aller + à/au/à la/aux",
                  "Werkwoord vouloir op basaal niveau",
                  "Vaak gebruikte frequentiewoorden",
                  "Een korte tekst over je vrije tijd schrijven en vertellen"
                ]
              },
              {
                name: "Fase 5 — Eten, winkelen en de stad",
                description: "Gebruik Frans in alledaagse situaties buiten school.",
                topics: [
                  "Eten en drinken",
                  "In een café of winkel iets bestellen",
                  "Prijzen vragen en begrijpen",
                  "Plaatsen in de stad",
                  "De weg vragen en eenvoudige routeaanwijzingen begrijpen",
                  "Voorzetsels van plaats",
                  "Delende lidwoorden: du, de la, de l’, des",
                  "Hoeveelheden en veelgebruikte verpakkingen",
                  "Beleefde basiszinnen met s’il vous plaît en merci",
                  "Bijvoeglijke naamwoorden en lidwoorden herhalen"
                ]
              },
              {
                name: "Fase 6 — Vaardigheden, cultuur en herhaling",
                description: "Breng de kennis samen en oefen lezen, luisteren, spreken en schrijven.",
                topics: [
                  "Korte Franse teksten lezen en hoofdzaken vinden",
                  "Eenvoudige gesprekken en luisterfragmenten begrijpen",
                  "Een korte persoonlijke tekst schrijven",
                  "Een eenvoudig gesprek of rollenspel voeren",
                  "Uitspraak en verstaanbaarheid verbeteren",
                  "Basiskennis van Frankrijk en de Franstalige wereld",
                  "Frans schoolsysteem en dagelijkse cultuur op hoofdlijnen",
                  "Herhaling être, avoir, aller, faire en regelmatige -er-werkwoorden",
                  "Herhaling lidwoorden, bijvoeglijke naamwoorden, vragen en ontkenning",
                  "Woordenschat zelfstandig leren en herhalen"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
