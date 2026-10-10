TUBE V1 — SUBCATEGORIEËN

Bestanden:
- index.html        -> homepage
- category.html     -> categoriepagina
- categories.js     -> ALLE categorieën en subcategorieën
- README.txt        -> deze uitleg

HOE START JE HET?
Open index.html in je browser.

HOE VOEG JE EEN NIEUWE SUBCATEGORIE TOE?
1. Open categories.js in Kladblok, VS Code of een andere teksteditor.
2. Zoek de categorie die je wilt aanpassen.
3. Zoek het blok: subcategories: [
4. Voeg daar een regel toe, bijvoorbeeld:

   { name: "Nieuwe subcategorie", description: "Korte uitleg over deze subcategorie." },

5. Sla categories.js op.
6. Vernieuw de website.

Voorbeeld:
subcategories: [
  { name: "Bestaande subcategorie", description: "..." },
  { name: "Nieuwe subcategorie", description: "Korte uitleg." }
]

De website leest categories.js automatisch in. Je hoeft dus NIET de HTML van category.html aan te passen.


NIEUW: SUBCATEGORIE TOEVOEGEN ZONDER CODE
1. Open index.html.
2. Klik op een categorie.
3. Klik rechtsboven bij de subcategorieën op: + Subcategorie toevoegen.
4. Vul naam en uitleg in.
5. Klik op Toevoegen.

De nieuwe subcategorie wordt automatisch in je browser opgeslagen.
Je hoeft categories.js hiervoor niet meer handmatig te wijzigen.

Let op:
Deze eenvoudige V1 gebruikt browseropslag (localStorage). De toevoeging staat dus
op dezelfde computer/browser waarop je hem hebt gemaakt. Voor een echte online
versie koppelen we dit later aan een database.


NIEUW: SUBCATEGORIE -> VIDEO'S -> VIDEOPAGINA

Flow:
1. Open index.html.
2. Open Categorieën.
3. Klik op een categorie.
4. Klik op een subcategorie.
5. Je ziet 5 voorbeeld-video-layouts met placeholder thumbnails.
6. Klik op een video.
7. De videopagina bevat:
   - links: transcript met NL / EN taalkeuze;
   - midden: centrale videospeler-placeholder;
   - rechts: notitieruimte.

Notitiefuncties:
- typen;
- geselecteerde tekst geel markeren;
- alle notities in één keer kopiëren;
- tekst uit je klembord plakken;
- notities wissen;
- automatische opslag per video in je browser.

LET OP:
De echte YouTube-video's en thumbnails zijn nog niet gekoppeld. Dit is bewust een
V1-layout om eerst de gebruikerservaring en informatie-indeling te testen.
