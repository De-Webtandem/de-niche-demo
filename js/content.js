/* ==========================================================================
   Redactionele content en voorbeelddata — De Niche Parfumerie
   Reviews zijn VOORBEELDEN (prototype), geen echte klantbeoordelingen.
   ========================================================================== */

window.ARTICLES = [
  { id: 'geur-kiezen', title: 'Zo kies je een geur die écht bij je past', date: '2026-10-14', tag: 'Advies', tint: '#8a6a3c',
    intro: 'Een parfum kiezen op een papieren strip is als een jas kopen zonder hem aan te trekken. Zo doe je het beter.',
    body: `<p>De meeste mensen kiezen een geur in drie minuten: een strip onder de neus, een beslissing, naar de kassa. Een week later hangt de flacon ongebruikt in de kast. Dat ligt niet aan de geur, maar aan de manier van kiezen.</p>
<h3>Ruik op de huid, niet op papier</h3><p>Een geur verandert door je huid. De eerste tien minuten ruik je de topnoten: citrus, kruiden, frisse accenten. Die verdampen snel. Wat je uren later ruikt, is de basis: hout, amber, musk. Een papieren strip laat je alleen het begin ruiken.</p>
<h3>Maximaal drie per keer</h3><p>Na drie geuren raakt je neus vermoeid. Spray er één op elke pols en één op de binnenkant van je elleboog. Ga naar buiten, drink koffie, kom terug. Ruik opnieuw.</p>
<h3>Draag een sample een dag</h3><p>Daarom sturen wij samples mee en geven we ze in de winkel. Een geur die je 's ochtends opdoet en 's avonds nog steeds lekker vindt, is een geur die bij je past.</p>` },
  { id: 'niche-versus-designer', title: 'Niche versus designer: wat is het verschil?', date: '2026-09-30', tag: 'Achtergrond', tint: '#2f4e5a',
    intro: 'Waarom kost een flacon bij ons soms twee keer zoveel als in een drogisterij? En waarom ruik je het verschil?',
    body: `<p>Designerparfums worden gemaakt door modehuizen voor een zo groot mogelijk publiek. De formule moet iedereen een beetje aanspreken en mag weinig kosten, want het budget gaat naar de campagne met de filmster.</p>
<h3>Nicheparfum draait de verhouding om</h3><p>Een nichehuis heeft geen reclamebudget en geen boodschap voor de massa. Het geld gaat naar de grondstoffen: echte iris, natuurlijke oud, roos uit Grasse. En de parfumeur krijgt de vrijheid om iets te maken dat niet iedereen mooi hoeft te vinden.</p>
<h3>Wat je ervan merkt</h3><p>Hogere concentraties, dus langere houdbaarheid op de huid. Meer karakter, dus minder kans dat je collega hetzelfde draagt. En een flacon die je over tien jaar nog herkent.</p>
<p>Is niche altijd beter? Nee. Maar het is wel altijd een keuze, en die maak je graag zelf.</p>` },
  { id: 'oud', title: 'Oud: van Arabische traditie naar Sneek', date: '2026-09-12', tag: 'Ingrediënt', tint: '#3f2a17',
    intro: 'Het duurste hout ter wereld zit in steeds meer flacons. Wat is oud eigenlijk, en waarom ruikt het zo anders?',
    body: `<p>Oud is harshout van de Aquilaria-boom, dat ontstaat als de boom besmet raakt met een schimmel. De boom beschermt zichzelf met een donkere, geurige hars. Dat proces duurt jaren en gebeurt maar bij een klein deel van de bomen.</p>
<h3>Van wierookvat naar parfumflacon</h3><p>In het Midden-Oosten wordt oud al eeuwen gebrand als welkomstritueel. Westerse parfumhuizen ontdekten het begin deze eeuw. Tom Ford Oud Wood maakte het draagbaar, Montale maakte het betaalbaar, Initio en Amouage maakten het groots.</p>
<h3>Hoe het ruikt</h3><p>Rokerig, leerachtig, een beetje medicinaal, en bij goede kwaliteit zoet en diep. Oud is nooit subtiel. Daarom combineren parfumeurs het met roos, saffraan of vanille.</p>
<p>Wil je oud leren kennen? Begin met Oud Wood, en kom dan terug voor Interlude Man.</p>` }
];

window.FAQ = [
  { q: 'Zijn alle parfums origineel?', a: 'Ja. We kopen in via officiële kanalen. Elke flacon is nieuw, verzegeld en voorzien van batchcode.' },
  { q: 'Kan ik een geur eerst proberen?', a: 'In de winkel altijd. Online sturen we bij elke bestelling samples mee, zodat je nooit blind kiest voor een volgende aankoop.' },
  { q: 'Wat kost verzending?', a: 'Binnen Nederland € 4,95, gratis vanaf € 75. België € 7,95, gratis vanaf € 100. Afhalen in de winkel in Sneek is altijd gratis.' },
  { q: 'Hoe snel wordt mijn bestelling geleverd?', a: 'Op werkdagen vóór 16.00 uur besteld, is de volgende werkdag in huis (Nederland). We verzenden met PostNL, verzekerd en met track & trace.' },
  { q: 'Kan ik een parfum retourneren?', a: 'Ongeopend en verzegeld kun je binnen 14 dagen retourneren. Een geopende flacon nemen we om hygiënische redenen niet terug. Twijfel je? Vraag een sample.' },
  { q: 'Kan ik in de winkel afhalen?', a: 'Ja. Kies bij het afrekenen voor "Afhalen in de winkel". Je krijgt een bericht zodra de bestelling klaarstaat, meestal dezelfde dag tijdens openingstijden.' },
  { q: 'Hoe werkt het geurconsult?', a: 'Een uur, één op één, in de winkel. We nemen je mee langs geurfamilies en merken. Het consult kost € 25, verrekend bij aankoop. Boeken kan via de winkelpagina.' },
  { q: 'Verkopen jullie cadeaubonnen?', a: 'Ja, digitaal en op papier, vanaf € 50. In te wisselen online en in de winkel, twee jaar geldig.' }
];

/* Voorbeeldreviews; worden deterministisch over producten verdeeld. */
window.REVIEW_POOL = [
  { name: 'Marjolein', city: 'Sneek', rating: 5, text: 'Eindelijk een parfumerie waar ze echt de tijd voor je nemen. Ben met een sample naar huis gegaan en de dag erna terug om de flacon te halen.' },
  { name: 'Jelle', city: 'Leeuwarden', rating: 5, text: 'Houdt de hele dag. Krijg er constant complimenten over, en niemand draagt hetzelfde.' },
  { name: 'Sanne', city: 'Bolsward', rating: 4, text: 'Prachtige geur, iets zoeter dan ik verwachtte. Snel geleverd, mooi verpakt, en de twee samples waren een leuke verrassing.' },
  { name: 'Rutger', city: 'Joure', rating: 5, text: 'Als cadeau gekocht voor mijn vrouw. Het advies in de winkel was goud waard.' },
  { name: 'Femke', city: 'Groningen', rating: 5, text: 'Draag hem nu twee maanden en nog steeds verliefd. De projectie is precies goed: aanwezig, niet opdringerig.' },
  { name: 'Douwe', city: 'Heerenveen', rating: 4, text: 'Mooie, warme geur voor de winter. In de zomer te zwaar voor mij, maar dan heb ik wat anders.' },
  { name: 'Anouk', city: 'Workum', rating: 5, text: 'Besteld op vrijdag, zaterdag in huis. De geur is nog mooier dan in de winkel.' },
  { name: 'Thomas', city: 'Sneek', rating: 5, text: 'Mijn signature geur gevonden na het geurconsult. Aanrader.' },
  { name: 'Lotte', city: 'Drachten', rating: 4, text: 'Prijzig, maar je merkt het verschil met wat ik eerder droeg. Veel langer houdbaar.' }
];

window.DISCOUNTS = {
  WELKOM10: { type: 'percent', value: 10, label: '10% welkomstkorting' },
  SNEEK: { type: 'shipping', value: 0, label: 'Gratis verzending' }
};

/* Deterministische rating en reviews per product */
window.productReviews = function (id) {
  let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const pool = window.REVIEW_POOL;
  const out = [];
  for (let i = 0; i < 3; i++) out.push(pool[(h + i * 7) % pool.length]);
  let own = [];
  try { own = JSON.parse(localStorage.getItem('dnp-reviews-' + id) || '[]'); } catch (e) {}
  return own.concat(out);
};
window.productRating = function (id) {
  const r = window.productReviews(id);
  const avg = r.reduce((n, x) => n + x.rating, 0) / r.length;
  return { avg: Math.round(avg * 10) / 10, count: r.length };
};
