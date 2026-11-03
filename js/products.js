/* ==========================================================================
   Productdata — De Niche Parfumerie
   Merknamen, productnamen, concentraties, inhouden en geurnoten zijn de
   werkelijke gegevens van de genoemde parfums. PRIJZEN zijn INDICATIEF en
   moeten door de winkel worden gecontroleerd. Beschrijvingen zijn eigen tekst.
   segment: 'niche' | 'designer'
   ========================================================================== */

window.BRANDS = [
  /* ---------- Nichehuizen ---------- */
  { id: 'creed', segment: 'niche', name: 'Creed', origin: 'Londen, 1760', tagline: 'Het huis van Aventus', text: 'Een van de oudste parfumhuizen ter wereld, bekend om royale, karaktervolle composities en een trouwe aanhang.' },
  { id: 'mfk', segment: 'niche', name: 'Maison Francis Kurkdjian', origin: 'Parijs, 2009', tagline: 'Lichtend, modern, precies', text: 'Het huis van meesterparfumeur Francis Kurkdjian. Stralende, haast architectonische geuren met een lange adem.' },
  { id: 'byredo', segment: 'niche', name: 'Byredo', origin: 'Stockholm, 2006', tagline: 'Scandinavische eenvoud', text: 'Minimalistisch in vorm, rijk in herinnering. Byredo vertaalt persoonlijke verhalen naar heldere, moderne geuren.' },
  { id: 'lelabo', segment: 'niche', name: 'Le Labo', origin: 'New York, 2006', tagline: 'Handgevuld, eerlijk', text: 'Rauwe, ongepolijste geuren met een duidelijke signatuur. Elke flacon draagt een handgeschreven etiket.' },
  { id: 'xerjoff', segment: 'niche', name: 'Xerjoff', origin: 'Turijn, 2003', tagline: 'Italiaanse weelde', text: 'Compromisloos luxueus. Zeldzame grondstoffen, overvloedige composities en flacons als sieraden.' },
  { id: 'pdm', segment: 'niche', name: 'Parfums de Marly', origin: 'Parijs, 2009', tagline: 'Elegantie uit de achttiende eeuw', text: 'Geïnspireerd op het hof van Lodewijk XV: gracieuze, verfijnde geuren met een hedendaagse kracht.' },
  { id: 'initio', segment: 'niche', name: 'Initio Parfums Privés', origin: 'Parijs, 2015', tagline: 'Geur als magnetisme', text: 'Donkere, sensuele geuren rond oud, hout en musk, ontworpen om indruk te maken en te blijven hangen.' },
  { id: 'amouage', segment: 'niche', name: 'Amouage', origin: 'Muscat, 1983', tagline: 'De geur van Oman', text: 'Wierook, mirre en roos uit de Arabische traditie, vertaald naar complexe, hoog-parfumistische composities.' },
  { id: 'nishane', segment: 'niche', name: 'Nishane', origin: 'Istanbul, 2012', tagline: 'Waar oost en west elkaar raken', text: 'Het eerste nichehuis van Turkije. Extrait de parfums met een uitzonderlijke intensiteit en duur.' },
  { id: 'tomford', segment: 'niche', name: 'Tom Ford', origin: 'New York, 2006', tagline: 'Donker, warm, verleidelijk', text: 'De Signature-lijn en de exclusieve Private Blend: rijke, karaktervolle geuren rond oud, tabak, leer en bloemen.' },
  { id: 'kilian', segment: 'niche', name: 'Kilian Paris', origin: 'Parijs, 2007', tagline: 'Parfum als sieraad', text: 'Opulente, gourmand-achtige geuren in navulbare flacons die je wilt bewaren.' },
  { id: 'mancera', segment: 'niche', name: 'Mancera', origin: 'Parijs, 2008', tagline: 'Kracht en projectie', text: 'Toegankelijke niche met een enorme duurkracht. Fruitig, zoet en onmiskenbaar aanwezig.' },
  { id: 'montale', segment: 'niche', name: 'Montale', origin: 'Parijs, 2003', tagline: 'Oud voor iedereen', text: 'Pierre Montale bracht de Arabische oud-traditie naar Parijs, in herkenbare aluminium flacons.' },
  { id: 'roja', segment: 'niche', name: 'Roja Parfums', origin: 'Londen, 2011', tagline: 'Britse grandeur', text: 'Roja Dove, een van de meest gerespecteerde neuzen ter wereld, maakt parfums zonder enig compromis op kwaliteit.' },
  { id: 'diptyque', segment: 'niche', name: 'Diptyque', origin: 'Parijs, 1961', tagline: 'Parijse poëzie', text: 'Kunstzinnig en natuurlijk. Geuren die een plek, een seizoen of een herinnering oproepen.' },
  { id: 'malle', segment: 'niche', name: 'Frédéric Malle', origin: 'Parijs, 2000', tagline: 'Uitgever van parfums', text: 'Malle geeft de grootste parfumeurs volledige vrijheid. Het resultaat: meesterwerken met de naam van de maker op de flacon.' },
  { id: 'jhag', segment: 'niche', name: 'Juliette Has a Gun', origin: 'Parijs, 2006', tagline: 'Speels, modern, gedurfd', text: 'Van Romano Ricci, achterkleinzoon van Nina Ricci. Lichte, moderne geuren met een knipoog.' },
  { id: 'molecules', segment: 'niche', name: 'Escentric Molecules', origin: 'Berlijn, 2006', tagline: 'Eén molecuul, eindeloos effect', text: 'Geza Schoen reduceerde parfum tot één ingrediënt. Het resultaat is persoonlijk, huidnabij en verslavend.' },
  { id: 'memo', segment: 'niche', name: 'Memo Paris', origin: 'Parijs, 2007', tagline: 'Reizen in geur', text: 'Elke geur is een bestemming. Leer, hout en bloemen vertellen verhalen van verre plekken.' },
  { id: 'terenzi', segment: 'niche', name: 'Tiziana Terenzi', origin: 'Cattolica, 2011', tagline: 'Italiaanse intensiteit', text: 'Familiehuis uit Italië met extrait de parfums van een buitengewone intensiteit en duur.' },
  { id: 'margiela', segment: 'niche', name: 'Maison Margiela', origin: 'Parijs, 1988', tagline: 'Replica: geuren als herinneringen', text: 'De Replica-lijn vangt momenten: een jazzclub, een open haard, een luie zondagochtend. Herkenbaar, draagbaar, met een verhaal.' },

  /* ---------- Grote huizen ---------- */
  { id: 'dior', segment: 'designer', name: 'Dior', origin: 'Parijs, 1947', tagline: 'Couture in een flacon', text: 'Van Miss Dior tot Sauvage: het huis van Christian Dior maakt al sinds 1947 geuren die generaties lang blijven.' },
  { id: 'chanel', segment: 'designer', name: 'Chanel', origin: 'Parijs, 1910', tagline: 'Tijdloze elegantie', text: 'N°5 uit 1921 is nog altijd het bekendste parfum ter wereld. Chanel maakt klassiekers die nooit gedateerd raken.' },
  { id: 'ysl', segment: 'designer', name: 'Yves Saint Laurent', origin: 'Parijs, 1961', tagline: 'Parijse brutaliteit', text: 'Gedurfd en sensueel, van Opium tot Libre. Geuren met een duidelijke mening.' },
  { id: 'lancome', segment: 'designer', name: 'Lancôme', origin: 'Parijs, 1935', tagline: 'Franse vrouwelijkheid', text: 'Het huis van La Vie Est Belle en Idôle: lichte, optimistische bloemengeuren met een gourmand-hart.' },
  { id: 'armani', segment: 'designer', name: 'Giorgio Armani', origin: 'Milaan, 1975', tagline: 'Italiaanse verfijning', text: 'Ingetogen en elegant, zoals de kleding. Acqua di Giò is al bijna dertig jaar een van de meest gedragen herengeuren.' },
  { id: 'hermes', segment: 'designer', name: 'Hermès', origin: 'Parijs, 1837', tagline: 'Natuur en ambacht', text: 'Huisparfumeurs met volledige vrijheid en een voorliefde voor natuurlijke, transparante composities.' },
  { id: 'herrera', segment: 'designer', name: 'Carolina Herrera', origin: 'New York, 1981', tagline: 'Glamour met een knipoog', text: 'Good Girl, in de flacon in de vorm van een stiletto, werd in korte tijd een moderne klassieker.' },
  { id: 'mugler', segment: 'designer', name: 'Mugler', origin: 'Parijs, 1973', tagline: 'Theatraal en herkenbaar', text: 'Angel en Alien zetten nieuwe geurfamilies op de kaart. Mugler-geuren herken je van meters afstand.' },
  { id: 'jpg', segment: 'designer', name: 'Jean Paul Gaultier', origin: 'Parijs, 1976', tagline: 'Het enfant terrible', text: 'Flacons als torso\'s, geuren vol lavendel, vanille en honing. Speels, sensueel en onmiskenbaar Frans.' },
  { id: 'rabanne', segment: 'designer', name: 'Rabanne', origin: 'Parijs, 1966', tagline: 'Metaal en goud', text: '1 Million en Invictus horen al jaren bij de best verkochte herengeuren van Europa.' },
  { id: 'versace', segment: 'designer', name: 'Versace', origin: 'Milaan, 1978', tagline: 'Mediterrane zwier', text: 'Fris, zonnig en uitgesproken. Eros en Dylan Blue zijn geuren voor wie gezien wil worden.' },
  { id: 'boss', segment: 'designer', name: 'Hugo Boss', origin: 'Metzingen, 1924', tagline: 'Modern en betrouwbaar', text: 'Boss Bottled is sinds 1998 de kantoorgeur bij uitstek: netjes, warm en nooit te veel.' },
  { id: 'dg', segment: 'designer', name: 'Dolce & Gabbana', origin: 'Milaan, 1985', tagline: 'Siciliaanse zomer', text: 'Light Blue vangt een zomer aan de Middellandse Zee, al meer dan twintig jaar lang.' },
  { id: 'narciso', segment: 'designer', name: 'Narciso Rodriguez', origin: 'New York, 1997', tagline: 'Musk als handtekening', text: 'For Her maakte musk weer modern: zacht, huidnabij en opvallend lang houdbaar.' },
  { id: 'chloe', segment: 'designer', name: 'Chloé', origin: 'Parijs, 1952', tagline: 'Bohemien en licht', text: 'Poederige rozen en luchtige bloemen, in de kenmerkende flacon met het geplooide lint.' },
  { id: 'valentino', segment: 'designer', name: 'Valentino', origin: 'Rome, 1960', tagline: 'Romeinse couture', text: 'Born in Roma vertaalt de haute couture van Valentino naar moderne, intense geuren.' },
  { id: 'vr', segment: 'designer', name: 'Viktor & Rolf', origin: 'Amsterdam, 1993', tagline: 'Nederlandse couture', text: 'Flowerbomb, in de flacon in de vorm van een handgranaat, is een van de grootste parfumsuccessen uit Nederland.' },
  { id: 'gucci', segment: 'designer', name: 'Gucci', origin: 'Florence, 1921', tagline: 'Italiaanse romantiek', text: 'Bloom bracht tuberoos terug naar het grote publiek, in een flacon in gepoederd roze.' },
  { id: 'burberry', segment: 'designer', name: 'Burberry', origin: 'Londen, 1856', tagline: 'Brits en eigentijds', text: 'Van de klassieke geruite flacons tot het moderne Burberry Her: Londen in een geur.' },
  { id: 'ck', segment: 'designer', name: 'Calvin Klein', origin: 'New York, 1968', tagline: 'Minimalisme uit de jaren negentig', text: 'CK One was in 1994 het eerste grote unisexparfum en is nog altijd een icoon van eenvoud.' }
];

/* bottle: a = hoog rechthoekig, b = cilindrisch, c = vierkant/laag, d = rond/klassiek
   tint: kleur van het parfum in de flacon (illustratie), cap: kleur dop */
window.PRODUCTS = [
  /* ============ NICHE ============ */
  { id: 'creed-aventus', brand: 'creed', name: 'Aventus', sub: 'Eau de Parfum', gender: 'heren', family: 'fris', badge: 'Favoriet',
    bottle: 'a', tint: '#2E3A2F', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 255 }, { ml: 100, price: 345 }],
    notes: { top: ['Ananas', 'Zwarte bes', 'Bergamot', 'Appel'], heart: ['Berkenhout', 'Jasmijn', 'Patchoeli', 'Roos'], base: ['Musk', 'Eikenmos', 'Ambergrijs', 'Vanille'] },
    desc: 'Een geur die een eigen categorie werd. Sappige ananas en zwarte bes openen, rokerig berkenhout en patchoeli dragen. Zelfverzekerd, fris en onmiskenbaar aanwezig. De geur waarmee veel mannen nicheparfum ontdekken.' },
  { id: 'mfk-baccarat-rouge-540', brand: 'mfk', name: 'Baccarat Rouge 540', sub: 'Eau de Parfum', gender: 'unisex', family: 'orientaals', badge: 'Favoriet',
    bottle: 'b', tint: '#D8905F', cap: '#e8e2d6',
    sizes: [{ ml: 35, price: 160 }, { ml: 70, price: 275 }, { ml: 200, price: 450 }],
    notes: { top: ['Saffraan', 'Jasmijn'], heart: ['Amberhout', 'Ambergrijs'], base: ['Sparhars', 'Ceder'] },
    desc: 'Stralend als gesmolten kristal. Saffraan en jasmijn zweven boven een warme, mineraalachtige amberhout-basis. Een geur die een spoor achterlaat zonder ooit zwaar te worden.' },
  { id: 'byredo-gypsy-water', brand: 'byredo', name: 'Gypsy Water', sub: 'Eau de Parfum', gender: 'unisex', family: 'hout', badge: '',
    bottle: 'b', tint: '#E6D9BF', cap: '#141414',
    sizes: [{ ml: 50, price: 150 }, { ml: 100, price: 215 }],
    notes: { top: ['Bergamot', 'Citroen', 'Peper', 'Jeneverbes'], heart: ['Wierook', 'Dennennaald', 'Orris'], base: ['Amber', 'Vanille', 'Sandelhout'] },
    desc: 'Dennennaalden op een bosbodem, een kampvuur in de verte. Gypsy Water is een geur van vrijheid: licht, houtachtig en bijna huidnabij.' },
  { id: 'lelabo-santal-33', brand: 'lelabo', name: 'Santal 33', sub: 'Eau de Parfum', gender: 'unisex', family: 'hout', badge: 'Icoon',
    bottle: 'c', tint: '#C9A878', cap: '#3a2a1c',
    sizes: [{ ml: 50, price: 215 }, { ml: 100, price: 305 }],
    notes: { top: ['Kardemom', 'Iris', 'Viooltje'], heart: ['Sandelhout', 'Papyrus', 'Ceder'], base: ['Leer', 'Ambrox', 'Musk'] },
    desc: 'De geur van een houten hut in de woestijn. Sandelhout, leer en kardemom in een compositie die wereldwijd tot icoon uitgroeide, en nog altijd nergens op lijkt.' },
  { id: 'xerjoff-naxos', brand: 'xerjoff', name: 'Naxos', sub: 'Eau de Parfum', gender: 'unisex', family: 'gourmand', badge: '',
    bottle: 'd', tint: '#B5782F', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 185 }, { ml: 100, price: 245 }],
    notes: { top: ['Lavendel', 'Bergamot', 'Citroen'], heart: ['Honing', 'Kaneel', 'Jasmijn', 'Cashmeran'], base: ['Tabak', 'Tonkaboon', 'Vanille'] },
    desc: 'Een ode aan Sicilië. Honing, tabak en lavendel in een warme, verslavend zoete compositie met een Italiaanse zwier.' },
  { id: 'pdm-delina', brand: 'pdm', name: 'Delina', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Favoriet',
    bottle: 'd', tint: '#E9A9B8', cap: '#d9c6a8',
    sizes: [{ ml: 30, price: 125 }, { ml: 75, price: 240 }],
    notes: { top: ['Lychee', 'Rabarber', 'Bergamot', 'Nootmuskaat'], heart: ['Turkse roos', 'Pioenroos', 'Lelietje-van-dalen'], base: ['Cashmeran', 'Vanille', 'Musk', 'Wierook'] },
    desc: 'Een roos zoals je hem nog niet rook: fris door rabarber en lychee, zacht door cashmeran en vanille. Een roos voor wie geen roos wilde, en die blijft tot diep in de avond.' },
  { id: 'pdm-layton', brand: 'pdm', name: 'Layton', sub: 'Eau de Parfum', gender: 'heren', family: 'orientaals', badge: '',
    bottle: 'd', tint: '#3B3A40', cap: '#b48e4a',
    sizes: [{ ml: 75, price: 195 }, { ml: 125, price: 265 }],
    notes: { top: ['Appel', 'Lavendel', 'Bergamot', 'Mandarijn'], heart: ['Geranium', 'Jasmijn', 'Viooltje'], base: ['Vanille', 'Sandelhout', 'Kardemom', 'Guaiachout', 'Peper'] },
    desc: 'Verfijnd en warm tegelijk. Appel en lavendel openen, een zachte vanille-kardemom basis sluit af. Een geur voor avonden die langer duren dan gepland.' },
  { id: 'initio-oud-for-greatness', brand: 'initio', name: 'Oud for Greatness', sub: 'Extrait de Parfum', gender: 'unisex', family: 'orientaals', badge: '',
    bottle: 'c', tint: '#2A211D', cap: '#b48e4a',
    sizes: [{ ml: 90, price: 310 }],
    notes: { top: ['Saffraan', 'Nootmuskaat', 'Lavendel'], heart: ['Oud'], base: ['Musk', 'Patchoeli', 'Agarhout'] },
    desc: 'Oud zoals het bedoeld is: diep, rokerig en toch draagbaar. Saffraan en lavendel geven lucht aan een basis die urenlang blijft.' },
  { id: 'amouage-interlude-man', brand: 'amouage', name: 'Interlude Man', sub: 'Eau de Parfum', gender: 'heren', family: 'orientaals', badge: '',
    bottle: 'c', tint: '#3C2B26', cap: '#8e6e33',
    sizes: [{ ml: 100, price: 315 }],
    notes: { top: ['Bergamot', 'Oregano', 'Roze peper'], heart: ['Wierook', 'Opoponax', 'Labdanum', 'Amber'], base: ['Leer', 'Oud', 'Sandelhout', 'Patchoeli'] },
    desc: 'Chaos in balans. Wierook, oregano en leer botsen en versmelten in een van de meest besproken herengeuren uit de Arabische traditie.' },
  { id: 'nishane-hacivat', brand: 'nishane', name: 'Hacivat', sub: 'Extrait de Parfum', gender: 'unisex', family: 'fris', badge: 'Nieuw',
    bottle: 'c', tint: '#8CB38A', cap: '#141414',
    sizes: [{ ml: 50, price: 160 }, { ml: 100, price: 225 }],
    notes: { top: ['Ananas', 'Grapefruit', 'Bergamot'], heart: ['Ceder', 'Patchoeli', 'Jasmijn'], base: ['Eikenmos', 'Hout'] },
    desc: 'Frisse ananas boven een mossig-houten chypre-basis. Hacivat blijft helder van ochtend tot avond, dankzij de extrait-concentratie.' },
  { id: 'tomford-oud-wood', brand: 'tomford', name: 'Oud Wood', sub: 'Eau de Parfum · Private Blend', gender: 'unisex', family: 'hout', badge: '',
    bottle: 'a', tint: '#6B4A2E', cap: '#2a2a2a',
    sizes: [{ ml: 50, price: 225 }, { ml: 100, price: 320 }],
    notes: { top: ['Rozenhout', 'Kardemom', 'Chinese peper'], heart: ['Oud', 'Sandelhout', 'Vetiver'], base: ['Tonkaboon', 'Vanille', 'Amber'] },
    desc: 'Het oud-parfum waarmee de meeste mensen oud leren kennen: glad, warm en nooit te veel. Rozenhout en kardemom maken oud toegankelijk voor elke dag.' },
  { id: 'tomford-black-orchid', brand: 'tomford', name: 'Black Orchid', sub: 'Eau de Parfum', gender: 'unisex', family: 'orientaals', badge: 'Icoon',
    bottle: 'c', tint: '#1E1A22', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 125 }, { ml: 100, price: 175 }],
    notes: { top: ['Zwarte truffel', 'Ylang-ylang', 'Bergamot', 'Zwarte bes'], heart: ['Zwarte orchidee', 'Lotushout', 'Specerijen'], base: ['Patchoeli', 'Vanille', 'Wierook', 'Sandelhout'] },
    desc: 'Donker, rijk en theatraal. Truffel en zwarte orchidee boven een basis van patchoeli en vanille. De geur waarmee Tom Ford in 2006 zijn huis opende.' },
  { id: 'tomford-ombre-leather', brand: 'tomford', name: 'Ombré Leather', sub: 'Eau de Parfum', gender: 'unisex', family: 'hout', badge: '',
    bottle: 'c', tint: '#4A2C22', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 120 }, { ml: 100, price: 165 }],
    notes: { top: ['Kardemom'], heart: ['Leer', 'Jasmijn sambac'], base: ['Amber', 'Mos', 'Patchoeli'] },
    desc: 'Leer zoals het ruikt in een cabrio op een woestijnweg: warm, glad, met een vleug kardemom. Een van de meest gedragen Tom Fords van dit moment.' },
  { id: 'kilian-angels-share', brand: 'kilian', name: "Angels' Share", sub: 'Eau de Parfum', gender: 'unisex', family: 'gourmand', badge: 'Favoriet',
    bottle: 'c', tint: '#B5722C', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 230 }],
    notes: { top: ['Cognac'], heart: ['Kaneel', 'Tonkaboon', 'Eikenhout'], base: ['Praliné', 'Vanille', 'Sandelhout'] },
    desc: 'Het deel van de cognac dat in het vat verdampt, gevangen in een flacon. Warm, boozy en zoet zonder plakkerig te worden.' },
  { id: 'mancera-cedrat-boise', brand: 'mancera', name: 'Cedrat Boise', sub: 'Eau de Parfum', gender: 'unisex', family: 'fris', badge: '',
    bottle: 'a', tint: '#D8C67A', cap: '#141414',
    sizes: [{ ml: 60, price: 140 }, { ml: 120, price: 190 }],
    notes: { top: ['Siciliaanse citroen', 'Zwarte bes', 'Bergamot', 'Specerijen'], heart: ['Jasmijn', 'Ceder', 'Rode vruchten', 'Waterlelie'], base: ['Musk', 'Vanille', 'Eikenmos', 'Leer'] },
    desc: 'Citrus met ruggengraat. Citroen en zwarte bes op een cederhouten basis die de hele dag meegaat. Onze favoriete instap in nicheparfum.' },
  { id: 'montale-intense-cafe', brand: 'montale', name: 'Intense Café', sub: 'Eau de Parfum', gender: 'unisex', family: 'gourmand', badge: '',
    bottle: 'b', tint: '#5B3B2E', cap: '#c9c0b0',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 130 }],
    notes: { top: ['Witte bloemen'], heart: ['Roos', 'Koffie'], base: ['Vanille', 'Amber', 'Witte musk'] },
    desc: 'Verse koffie en roos, afgerond met vanille. Een geur die aanvoelt als een warme ochtend in een Parijs café, en die opvallend vaak complimenten oplevert.' },
  { id: 'roja-elysium', brand: 'roja', name: 'Elysium', sub: 'Parfum Cologne', gender: 'heren', family: 'fris', badge: '',
    bottle: 'a', tint: '#9DC3D6', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 295 }, { ml: 100, price: 370 }],
    notes: { top: ['Grapefruit', 'Citroen', 'Bergamot', 'Lijsterbes', 'Zwarte bes'], heart: ['Roos', 'Jasmijn', 'Lelietje-van-dalen', 'Cipres'], base: ['Ambergrijs', 'Vetiver', 'Leer', 'Musk', 'Ceder'] },
    desc: 'Frisheid op zijn meest luxueus. Een explosie van citrus, een hart van bloemen en een basis van vetiver en leer. Roja Dove op zijn stralendst.' },
  { id: 'diptyque-philosykos', brand: 'diptyque', name: 'Philosykos', sub: 'Eau de Parfum', gender: 'unisex', family: 'fris', badge: '',
    bottle: 'b', tint: '#A8C489', cap: '#141414',
    sizes: [{ ml: 75, price: 150 }],
    notes: { top: ['Vijgenblad', 'Groene noten'], heart: ['Vijg', 'Kokos'], base: ['Vijgenhout', 'Ceder', 'Witte musk'] },
    desc: 'De hele vijgenboom in één geur: blad, vrucht, hout en zonlicht. Groen, melkachtig en onweerstaanbaar zomers.' },
  { id: 'malle-portrait-of-a-lady', brand: 'malle', name: 'Portrait of a Lady', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Icoon',
    bottle: 'b', tint: '#8E2F3C', cap: '#141414',
    sizes: [{ ml: 50, price: 210 }, { ml: 100, price: 300 }],
    notes: { top: ['Turkse roos', 'Kaneel', 'Kruidnagel', 'Zwarte bes'], heart: ['Patchoeli', 'Sandelhout', 'Wierook'], base: ['Musk', 'Benzoë', 'Amber'] },
    desc: 'Een roos in haar meest dramatische vorm. Patchoeli, wierook en specerijen maken van Portrait of a Lady een van de grote parfums van deze eeuw.' },
  { id: 'jhag-not-a-perfume', brand: 'jhag', name: 'Not a Perfume', sub: 'Eau de Parfum', gender: 'dames', family: 'fris', badge: '',
    bottle: 'a', tint: '#F0E6E6', cap: '#141414',
    sizes: [{ ml: 50, price: 90 }, { ml: 100, price: 125 }],
    notes: { top: ['Cetalox'], heart: ['Cetalox'], base: ['Cetalox'] },
    desc: 'Eén molecuul, één effect: schone huid, maar dan beter. Niet opdringerig, wel aanwezig. Voor wie gewoon lekker wil ruiken, zonder dat het naar parfum ruikt.' },
  { id: 'molecules-molecule-01', brand: 'molecules', name: 'Molecule 01', sub: 'Eau de Toilette', gender: 'unisex', family: 'hout', badge: '',
    bottle: 'a', tint: '#D9D4CB', cap: '#1a1a1a',
    sizes: [{ ml: 30, price: 75 }, { ml: 100, price: 140 }],
    notes: { top: ['Iso E Super'], heart: ['Iso E Super'], base: ['Iso E Super'] },
    desc: 'Een geur die je zelf nauwelijks ruikt, maar anderen wel. Iso E Super vermengt zich met je huid tot een warme, houtachtige aura die volledig van jou is.' },
  { id: 'memo-african-leather', brand: 'memo', name: 'African Leather', sub: 'Eau de Parfum', gender: 'unisex', family: 'hout', badge: '',
    bottle: 'd', tint: '#7A4A2B', cap: '#b48e4a',
    sizes: [{ ml: 75, price: 235 }],
    notes: { top: ['Kardemom', 'Saffraan', 'Komijn'], heart: ['Geranium', 'Oud', 'Vetiver'], base: ['Leer', 'Patchoeli', 'Musk'] },
    desc: 'De savanne bij zonsondergang. Kruidige saffraan en kardemom boven warm leer en vetiver. Een reis in een flacon.' },
  { id: 'terenzi-kirke', brand: 'terenzi', name: 'Kirke', sub: 'Extrait de Parfum', gender: 'unisex', family: 'bloemig', badge: 'Nieuw',
    bottle: 'd', tint: '#C94B7B', cap: '#d9c6a8',
    sizes: [{ ml: 100, price: 235 }],
    notes: { top: ['Passievrucht', 'Perzik', 'Cassis', 'Peer'], heart: ['Lelietje-van-dalen', 'Heliotroop', 'Framboos'], base: ['Sandelhout', 'Musk', 'Vanille', 'Patchoeli'] },
    desc: 'Fruit en bloemen met een Italiaanse intensiteit. Passievrucht, perzik en framboos op een zachte, musky basis. Draag hem licht: één spray is genoeg voor een hele zomerdag.' },
  { id: 'margiela-jazz-club', brand: 'margiela', name: 'Replica Jazz Club', sub: 'Eau de Toilette', gender: 'unisex', family: 'orientaals', badge: 'Favoriet',
    bottle: 'b', tint: '#8A5A2E', cap: '#e8e2d6',
    sizes: [{ ml: 30, price: 65 }, { ml: 100, price: 140 }],
    notes: { top: ['Roze peper', 'Citroen', 'Neroli'], heart: ['Rum', 'Tabaksblad', 'Scharlei'], base: ['Vanille', 'Tonkaboon', 'Styrax', 'Vetiver'] },
    desc: 'Een rokerige kelder in Brooklyn: rum, tabak en vanille. Replica Jazz Club is warm en gezellig, en verrassend fris in de opening.' },
  { id: 'margiela-by-the-fireplace', brand: 'margiela', name: 'Replica By the Fireplace', sub: 'Eau de Toilette', gender: 'unisex', family: 'gourmand', badge: '',
    bottle: 'b', tint: '#B07A4A', cap: '#e8e2d6',
    sizes: [{ ml: 30, price: 65 }, { ml: 100, price: 140 }],
    notes: { top: ['Roze peper', 'Oranjebloesem', 'Kruidnagel'], heart: ['Kastanje', 'Guaiachout', 'Jeneverbes'], base: ['Vanille', 'Perubalsem', 'Cashmeran'] },
    desc: 'Geroosterde kastanjes bij een houtvuur. Zoet, rokerig en troostend; de geur van een winterse avond in de bergen.' },

  /* ============ GROTE HUIZEN · DAMES ============ */
  { id: 'dior-jadore', brand: 'dior', name: "J'adore", sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Icoon',
    bottle: 'd', tint: '#E8C27A', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 120 }, { ml: 100, price: 165 }],
    notes: { top: ['Ylang-ylang', 'Bergamot', 'Peer'], heart: ['Damascener roos', 'Jasmijn sambac', 'Magnolia'], base: ['Musk', 'Vanille', 'Ceder'] },
    desc: 'Het bloemenboeket van Dior sinds 1999: ylang-ylang, Damascener roos en jasmijn in een gouden, stralende compositie. Vrouwelijk zonder zoet te worden.' },
  { id: 'dior-miss-dior-blooming-bouquet', brand: 'dior', name: 'Miss Dior Blooming Bouquet', sub: 'Eau de Toilette', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#F2C9D4', cap: '#e8e2d6',
    sizes: [{ ml: 50, price: 105 }, { ml: 100, price: 145 }],
    notes: { top: ['Siciliaanse mandarijn'], heart: ['Pioenroos', 'Damascener roos'], base: ['Witte musk'] },
    desc: 'Een lichte, poederige pioenroos met een frisse mandarijn-opening. De zachtste van de Miss Dior-familie, en de makkelijkste om elke dag te dragen.' },
  { id: 'chanel-coco-mademoiselle', brand: 'chanel', name: 'Coco Mademoiselle', sub: 'Eau de Parfum', gender: 'dames', family: 'orientaals', badge: 'Favoriet',
    bottle: 'c', tint: '#E9CFA5', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 125 }, { ml: 100, price: 175 }],
    notes: { top: ['Sinaasappel', 'Bergamot', 'Grapefruit'], heart: ['Roos', 'Jasmijn', 'Lychee'], base: ['Patchoeli', 'Vetiver', 'Vanille', 'Witte musk'] },
    desc: 'Frisse citrus, een hart van roos en jasmijn, en een patchoeli-basis met karakter. Sinds 2001 een van de meest gedragen damesgeuren ter wereld, en met reden.' },
  { id: 'chanel-no5', brand: 'chanel', name: 'N°5', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Icoon',
    bottle: 'c', tint: '#E4C98A', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 125 }, { ml: 100, price: 175 }],
    notes: { top: ['Aldehyden', 'Ylang-ylang', 'Neroli'], heart: ['Jasmijn', 'Meiroos', 'Iris'], base: ['Sandelhout', 'Vanille', 'Vetiver'] },
    desc: 'Het parfum uit 1921 dat alle andere parfums beïnvloedde. Aldehyden geven een abstracte, zijdeachtige glans aan jasmijn en roos. Tijdloos is hier geen cliché.' },
  { id: 'lancome-la-vie-est-belle', brand: 'lancome', name: 'La Vie Est Belle', sub: 'Eau de Parfum', gender: 'dames', family: 'gourmand', badge: 'Favoriet',
    bottle: 'd', tint: '#F0D2DE', cap: '#e8e2d6',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 135 }],
    notes: { top: ['Zwarte bes', 'Peer'], heart: ['Iris', 'Jasmijn', 'Oranjebloesem'], base: ['Praliné', 'Vanille', 'Patchoeli', 'Tonkaboon'] },
    desc: 'Iris en praliné in een zoete, zonnige geur die sinds 2012 niet uit de top drie van Europa is verdwenen. Optimistisch, warm, direct herkenbaar.' },
  { id: 'lancome-idole', brand: 'lancome', name: 'Idôle', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'a', tint: '#F3D9DF', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 95 }, { ml: 75, price: 120 }],
    notes: { top: ['Peer', 'Bergamot', 'Roze peper'], heart: ['Roos', 'Jasmijn'], base: ['Witte musk', 'Vanille', 'Chypre-akkoord'] },
    desc: 'Een heldere, schone roos in de dunste flacon die Lancôme ooit maakte. Licht genoeg voor overdag, met genoeg musk om te blijven.' },
  { id: 'ysl-black-opium', brand: 'ysl', name: 'Black Opium', sub: 'Eau de Parfum', gender: 'dames', family: 'gourmand', badge: 'Favoriet',
    bottle: 'c', tint: '#2B1E22', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 100 }, { ml: 90, price: 140 }],
    notes: { top: ['Roze peper', 'Peer', 'Oranjebloesem'], heart: ['Koffie', 'Jasmijn', 'Bittere amandel'], base: ['Vanille', 'Patchoeli', 'Ceder'] },
    desc: 'Zwarte koffie en vanille in een glinsterende flacon. De geur van een avond die laat wordt: zoet, verslavend en energiek tegelijk.' },
  { id: 'ysl-libre', brand: 'ysl', name: 'Libre', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#E8C9A0', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 105 }, { ml: 90, price: 145 }],
    notes: { top: ['Lavendel', 'Mandarijn', 'Zwarte bes'], heart: ['Oranjebloesem', 'Jasmijn', 'Lavendel'], base: ['Vanille', 'Musk', 'Ceder', 'Ambergrijs'] },
    desc: 'Franse lavendel ontmoet Marokkaanse oranjebloesem. Libre draagt een traditioneel "mannelijke" noot met vrouwelijke vanzelfsprekendheid.' },
  { id: 'armani-si', brand: 'armani', name: 'Sì', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#C9553F', cap: '#e8e2d6',
    sizes: [{ ml: 50, price: 105 }, { ml: 100, price: 145 }],
    notes: { top: ['Zwarte bes'], heart: ['Meiroos', 'Freesia'], base: ['Vanille', 'Patchoeli', 'Ambroxan', 'Hout'] },
    desc: 'Chypre voor een nieuwe generatie: sappige zwarte bes, een roos in het hart en een houtachtige vanillebasis. Elegant en volwassen.' },
  { id: 'armani-my-way', brand: 'armani', name: 'My Way', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#F4E4D2', cap: '#b48e4a',
    sizes: [{ ml: 30, price: 70 }, { ml: 50, price: 100 }, { ml: 90, price: 135 }],
    notes: { top: ['Oranjebloesem', 'Bergamot'], heart: ['Tuberoos', 'Jasmijn'], base: ['Vanille', 'Ceder', 'Witte musk'] },
    desc: 'Tuberoos en oranjebloesem in een witte, lichte geur, in een navulbare flacon. Een reisgeur, letterlijk: elke noot komt uit een ander land.' },
  { id: 'herrera-good-girl', brand: 'herrera', name: 'Good Girl', sub: 'Eau de Parfum', gender: 'dames', family: 'orientaals', badge: 'Favoriet',
    bottle: 'a', tint: '#1E1B2E', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 100 }, { ml: 80, price: 135 }],
    notes: { top: ['Amandel', 'Koffie'], heart: ['Tuberoos', 'Jasmijn sambac'], base: ['Tonkaboon', 'Cacao', 'Vanille'] },
    desc: 'Tuberoos en jasmijn boven tonkaboon en cacao, in de beroemde stiletto-flacon. Zoet en donker tegelijk; het contrast is het idee.' },
  { id: 'mugler-alien', brand: 'mugler', name: 'Alien', sub: 'Eau de Parfum', gender: 'dames', family: 'orientaals', badge: 'Icoon',
    bottle: 'c', tint: '#5B3A8C', cap: '#b48e4a',
    sizes: [{ ml: 30, price: 70 }, { ml: 60, price: 100 }, { ml: 90, price: 130 }],
    notes: { top: ['Jasmijn sambac'], heart: ['Cashmeranhout'], base: ['Witte amber'] },
    desc: 'Drie noten, één onmiskenbaar effect. Jasmijn sambac op warm cashmeranhout en amber, in een paarse flacon als een edelsteen. Je ruikt hem van ver.' },
  { id: 'jpg-scandal', brand: 'jpg', name: 'Scandal', sub: 'Eau de Parfum', gender: 'dames', family: 'gourmand', badge: '',
    bottle: 'd', tint: '#E8B86A', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 95 }, { ml: 80, price: 130 }],
    notes: { top: ['Bloedsinaasappel', 'Mandarijn'], heart: ['Honing', 'Gardenia', 'Oranjebloesem'], base: ['Patchoeli', 'Karamel', 'Zoethout'] },
    desc: 'Honing en gardenia, met een patchoeli-basis die de zoetheid in toom houdt. De flacon met de benen in de lucht zegt genoeg over de toon.' },
  { id: 'narciso-for-her', brand: 'narciso', name: 'For Her', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#2A2628', cap: '#2a2628',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 135 }],
    notes: { top: ['Roos', 'Perzik'], heart: ['Musk', 'Amber'], base: ['Patchoeli', 'Sandelhout', 'Vetiver'] },
    desc: 'Musk als hoofdrol, roos en perzik als bijrol. Een huidnabije, zachte geur die opvallend lang blijft hangen. In de zwarte flacon: de intensere EDP.' },
  { id: 'chloe-chloe', brand: 'chloe', name: 'Chloé', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'd', tint: '#F1D8CF', cap: '#e8e2d6',
    sizes: [{ ml: 50, price: 100 }, { ml: 75, price: 125 }],
    notes: { top: ['Pioenroos', 'Lychee', 'Freesia'], heart: ['Roos', 'Lelietje-van-dalen', 'Magnolia'], base: ['Ceder', 'Amber', 'Honing'] },
    desc: 'Een poederige, frisse roos met pioen en lychee. Bohemien en licht, in de flacon met het geplooide lint. De signatuurgeur van het huis sinds 2008.' },
  { id: 'valentino-born-in-roma-donna', brand: 'valentino', name: 'Donna Born in Roma', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Nieuw',
    bottle: 'c', tint: '#F0C6CF', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 105 }, { ml: 100, price: 145 }],
    notes: { top: ['Zwarte bes', 'Roze peper', 'Bergamot'], heart: ['Jasmijn grandiflorum', 'Jasmijn sambac'], base: ['Bourbonvanille', 'Cashmeran'] },
    desc: 'Drie soorten jasmijn op een basis van bourbonvanille en cashmeran. Romeinse couture in een flacon met gouden studs: zacht van buiten, stevig van binnen.' },
  { id: 'vr-flowerbomb', brand: 'vr', name: 'Flowerbomb', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: 'Icoon',
    bottle: 'd', tint: '#F0B9C8', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 115 }, { ml: 100, price: 160 }],
    notes: { top: ['Thee', 'Bergamot'], heart: ['Jasmijn', 'Roos', 'Orchidee', 'Freesia'], base: ['Patchoeli', 'Musk', 'Vanille'] },
    desc: 'Een explosie van bloemen op een zoete patchoeli-basis, in de flacon in de vorm van een handgranaat. Sinds 2005 het trotse Nederlandse antwoord op de Parijse huizen.' },
  { id: 'gucci-bloom', brand: 'gucci', name: 'Bloom', sub: 'Eau de Parfum', gender: 'dames', family: 'bloemig', badge: '',
    bottle: 'c', tint: '#E9B9C4', cap: '#d9c6a8',
    sizes: [{ ml: 50, price: 100 }, { ml: 100, price: 140 }],
    notes: { top: ['Rangoon-klimmer'], heart: ['Tuberoos', 'Jasmijn'], base: ['Iris', 'Sandelhout'] },
    desc: 'Een witte, romige tuberoos zonder zoetigheid. Bloom ruikt als een tuin in volle bloei, en bracht tuberoos terug naar het grote publiek.' },
  { id: 'burberry-her', brand: 'burberry', name: 'Burberry Her', sub: 'Eau de Parfum', gender: 'dames', family: 'gourmand', badge: '',
    bottle: 'c', tint: '#C9607A', cap: '#d9c6a8',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 135 }],
    notes: { top: ['Aardbei', 'Framboos', 'Braam', 'Zwarte bes'], heart: ['Jasmijn', 'Viooltje'], base: ['Musk', 'Amber', 'Eikenmos'] },
    desc: 'Rood fruit uit een Londense markt, afgerond met musk en amber. Jong, zoet en opgewekt, met een houtachtige basis die hem volwassen houdt.' },

  /* ============ GROTE HUIZEN · HEREN ============ */
  { id: 'dior-sauvage', brand: 'dior', name: 'Sauvage', sub: 'Eau de Toilette', gender: 'heren', family: 'fris', badge: 'Favoriet',
    bottle: 'a', tint: '#2A3F5F', cap: '#1a1a1a',
    sizes: [{ ml: 60, price: 90 }, { ml: 100, price: 125 }, { ml: 200, price: 185 }],
    notes: { top: ['Calabrische bergamot', 'Peper'], heart: ['Sichuanpeper', 'Lavendel', 'Geranium', 'Vetiver'], base: ['Ambroxan', 'Ceder', 'Labdanum'] },
    desc: 'Bergamot en peper boven een basis van ambroxan: fris, ruig en enorm populair sinds 2015. Dé herengeur van het afgelopen decennium, in de koelste blauwe flacon.' },
  { id: 'chanel-bleu-de-chanel', brand: 'chanel', name: 'Bleu de Chanel', sub: 'Eau de Parfum', gender: 'heren', family: 'hout', badge: 'Favoriet',
    bottle: 'c', tint: '#1F2A44', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 110 }, { ml: 100, price: 150 }, { ml: 150, price: 195 }],
    notes: { top: ['Grapefruit', 'Citroen', 'Munt', 'Roze peper'], heart: ['Gember', 'Nootmuskaat', 'Jasmijn', 'Iso E Super'], base: ['Wierook', 'Vetiver', 'Ceder', 'Sandelhout', 'Labdanum'] },
    desc: 'Citrus en gember boven een houtachtige, wierookachtige basis. Netjes genoeg voor een pak, karaktervol genoeg voor een avond. De veilige keuze die nooit saai is.' },
  { id: 'ysl-y', brand: 'ysl', name: 'Y', sub: 'Eau de Parfum', gender: 'heren', family: 'fris', badge: '',
    bottle: 'c', tint: '#E8E4DC', cap: '#1a1a1a',
    sizes: [{ ml: 60, price: 90 }, { ml: 100, price: 125 }],
    notes: { top: ['Appel', 'Gember', 'Bergamot'], heart: ['Salie', 'Jeneverbes', 'Geranium'], base: ['Amberhout', 'Tonkaboon', 'Ceder', 'Olibanum'] },
    desc: 'Groene appel en salie op een amberhouten basis. Schoon, modern en veelzijdig; een geur die van de sportschool naar het diner gaat zonder te wisselen.' },
  { id: 'jpg-le-male', brand: 'jpg', name: 'Le Male', sub: 'Eau de Toilette', gender: 'heren', family: 'orientaals', badge: 'Icoon',
    bottle: 'b', tint: '#8FB4D6', cap: '#1a1a1a',
    sizes: [{ ml: 75, price: 75 }, { ml: 125, price: 100 }],
    notes: { top: ['Munt', 'Lavendel', 'Bergamot'], heart: ['Kaneel', 'Oranjebloesem', 'Komijn'], base: ['Vanille', 'Tonkaboon', 'Sandelhout', 'Amber'] },
    desc: 'Lavendel, munt en vanille in de torso-flacon in matrozenpak. Sinds 1995 een van de best verkochte herengeuren ter wereld, en nog altijd onmiddellijk herkenbaar.' },
  { id: 'rabanne-1-million', brand: 'rabanne', name: '1 Million', sub: 'Eau de Toilette', gender: 'heren', family: 'orientaals', badge: 'Favoriet',
    bottle: 'c', tint: '#C9962E', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 75 }, { ml: 100, price: 105 }, { ml: 200, price: 150 }],
    notes: { top: ['Bloedmandarijn', 'Grapefruit', 'Munt'], heart: ['Roos', 'Kaneel', 'Specerijen'], base: ['Leer', 'Amber', 'Patchoeli', 'Wit hout'] },
    desc: 'Een goudstaaf als flacon en een geur van kaneel, leer en amber. Niet subtiel, wel ongelooflijk succesvol sinds 2008. Een geur die een ruimte binnenkomt vóór jij dat doet.' },
  { id: 'rabanne-invictus', brand: 'rabanne', name: 'Invictus', sub: 'Eau de Toilette', gender: 'heren', family: 'fris', badge: '',
    bottle: 'd', tint: '#CFD8DE', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 75 }, { ml: 100, price: 105 }],
    notes: { top: ['Grapefruit', 'Zeenoten', 'Mandarijn'], heart: ['Laurierblad', 'Jasmijn'], base: ['Guaiachout', 'Patchoeli', 'Eikenmos', 'Ambergrijs'] },
    desc: 'Grapefruit en zeelucht boven guaiachout, in een flacon als een trofee. Fris, sportief en energiek; een geur voor overdag en voor de zomer.' },
  { id: 'armani-acqua-di-gio-profondo', brand: 'armani', name: 'Acqua di Giò Profondo', sub: 'Eau de Parfum', gender: 'heren', family: 'fris', badge: '',
    bottle: 'a', tint: '#2E6E8E', cap: '#1a1a1a',
    sizes: [{ ml: 75, price: 95 }, { ml: 125, price: 130 }],
    notes: { top: ['Zeenoten', 'Bergamot', 'Groene mandarijn'], heart: ['Rozemarijn', 'Lavendel', 'Cipres', 'Mastiek'], base: ['Minerale noten', 'Musk', 'Patchoeli', 'Amber'] },
    desc: 'De diepere, donkerdere versie van de klassieker uit 1996. Zeelucht, rozemarijn en een minerale basis; aquatisch zonder zoet te worden.' },
  { id: 'versace-eros', brand: 'versace', name: 'Eros', sub: 'Eau de Toilette', gender: 'heren', family: 'orientaals', badge: '',
    bottle: 'c', tint: '#2E8AA6', cap: '#b48e4a',
    sizes: [{ ml: 50, price: 70 }, { ml: 100, price: 95 }, { ml: 200, price: 135 }],
    notes: { top: ['Munt', 'Groene appel', 'Citroen'], heart: ['Tonkaboon', 'Geranium', 'Ambroxan'], base: ['Vanille', 'Vetiver', 'Ceder', 'Eikenmos'] },
    desc: 'Munt en groene appel boven vanille en tonkaboon, in de turquoise flacon met de Medusa. Zoet, fris en uitgesproken; een geur die opvalt in een volle ruimte.' },
  { id: 'boss-bottled', brand: 'boss', name: 'Boss Bottled', sub: 'Eau de Toilette', gender: 'heren', family: 'hout', badge: '',
    bottle: 'a', tint: '#D9C9A8', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 65 }, { ml: 100, price: 90 }],
    notes: { top: ['Appel', 'Pruim', 'Citroen', 'Bergamot'], heart: ['Geranium', 'Kaneel', 'Mahonie', 'Anjer'], base: ['Sandelhout', 'Vetiver', 'Ceder', 'Olijfhout'] },
    desc: 'Appel en kaneel boven sandelhout. De kantoorklassieker sinds 1998: warm, netjes en nooit opdringerig. Een geur waar niemand iets op tegen heeft.' },
  { id: 'hermes-terre-dhermes', brand: 'hermes', name: "Terre d'Hermès", sub: 'Eau de Toilette', gender: 'heren', family: 'hout', badge: 'Icoon',
    bottle: 'c', tint: '#C97A3C', cap: '#1a1a1a',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 130 }],
    notes: { top: ['Sinaasappel', 'Grapefruit', 'Peper'], heart: ['Geranium', 'Vuursteen'], base: ['Vetiver', 'Ceder', 'Patchoeli', 'Benzoë'] },
    desc: 'Sinaasappel op vetiver en een minerale vuursteennoot: aarde, lucht en citrus in één. Jean-Claude Ellena maakte in 2006 een herengeur die kenners en beginners allebei dragen.' },
  { id: 'dg-light-blue-pour-homme', brand: 'dg', name: 'Light Blue Pour Homme', sub: 'Eau de Toilette', gender: 'heren', family: 'fris', badge: '',
    bottle: 'a', tint: '#BFD9E8', cap: '#1a1a1a',
    sizes: [{ ml: 75, price: 75 }, { ml: 125, price: 100 }],
    notes: { top: ['Grapefruit', 'Bergamot', 'Siciliaanse mandarijn', 'Jeneverbes'], heart: ['Rozemarijn', 'Rozenhout', 'Peper'], base: ['Musk', 'Eikenmos', 'Wierook'] },
    desc: 'Een zomer aan de kust van Sicilië: citrus, rozemarijn en een zoute musk-basis. Fris en moeiteloos, voor warme dagen en lichte overhemden.' },

  /* ============ GROTE HUIZEN · UNISEX ============ */
  { id: 'ck-one', brand: 'ck', name: 'CK One', sub: 'Eau de Toilette', gender: 'unisex', family: 'fris', badge: 'Icoon',
    bottle: 'b', tint: '#E8E6E0', cap: '#c9c0b0',
    sizes: [{ ml: 100, price: 55 }, { ml: 200, price: 80 }],
    notes: { top: ['Bergamot', 'Kardemom', 'Ananas', 'Papaja'], heart: ['Jasmijn', 'Viooltje', 'Roos', 'Nootmuskaat'], base: ['Musk', 'Amber', 'Ceder', 'Eikenmos'] },
    desc: 'Het unisexparfum dat in 1994 een generatie definieerde. Citrus, groene thee en schone musk; eenvoudig, fris en nog altijd modern.' },
  { id: 'hermes-un-jardin-sur-le-nil', brand: 'hermes', name: 'Un Jardin sur le Nil', sub: 'Eau de Toilette', gender: 'unisex', family: 'fris', badge: '',
    bottle: 'c', tint: '#B9D29A', cap: '#e8e2d6',
    sizes: [{ ml: 50, price: 95 }, { ml: 100, price: 135 }],
    notes: { top: ['Groene mango', 'Grapefruit', 'Tomatenblad'], heart: ['Lotus', 'Hyacint', 'Calamus'], base: ['Wierook', 'Sycomorenhout', 'Musk'] },
    desc: 'Een tuin aan de Nijl bij dageraad: groene mango, lotus en een vleug wierook. Transparant en fris, voor wie van groene geuren houdt.' },

  /* ============ EIGEN ============ */
  { id: 'ontdekkingsset', brand: 'dnp', name: 'Ontdekkingsset', sub: 'Zes samples van 2 ml', gender: 'unisex', family: 'fris', badge: 'Nieuw', kind: 'set',
    bottle: 'set', tint: '#1C1B19', cap: '#B48E4A',
    sizes: [{ ml: 6, price: 35, label: '6 × 2 ml' }],
    notes: { top: ['Aventus', 'Baccarat Rouge 540'], heart: ['Santal 33', 'Delina'], base: ['Oud Wood', 'Gypsy Water'] },
    desc: 'Zes van onze meest geliefde geuren in samples van 2 ml, om thuis een week lang te dragen. Het bedrag verrekenen we bij aankoop van een flacon, in de winkel of online. Ook te bestellen met eigen keuze: zet je zes favorieten in de opmerking bij je bestelling.' },
  { id: 'cadeaubon', brand: 'dnp', name: 'Cadeaubon', sub: 'Digitaal of op papier', gender: 'unisex', family: 'fris', badge: '', hidden: true,
    bottle: 'gift', tint: '#1C1B19', cap: '#B48E4A',
    sizes: [{ ml: 50, price: 50, label: '€ 50' }, { ml: 100, price: 100, label: '€ 100' }, { ml: 150, price: 150, label: '€ 150' }, { ml: 250, price: 250, label: '€ 250' }],
    notes: { top: [], heart: [], base: [] },
    desc: 'Het mooiste cadeau voor iemand die van geur houdt: de keuze. In te wisselen in de winkel in Sneek en online, twee jaar geldig.' }
];
window.BRANDS.push({ id: 'dnp', segment: 'eigen', name: 'De Niche Parfumerie', origin: 'Sneek', tagline: '', text: '' });

window.SEGMENTS = { niche: 'Nichehuizen', designer: 'Grote huizen' };

window.FAMILIES = {
  orientaals: { label: 'Oriëntaals', sub: 'Amber, specerijen, oud', cls: 'fam--orient' },
  hout: { label: 'Houtachtig', sub: 'Sandelhout, ceder, vetiver', cls: 'fam--hout' },
  bloemig: { label: 'Bloemig', sub: 'Roos, jasmijn, iris', cls: 'fam--bloem' },
  fris: { label: 'Fris', sub: 'Citrus, groen, aquatisch', cls: 'fam--fris' },
  gourmand: { label: 'Gourmand', sub: 'Vanille, honing, cognac', cls: 'fam--gourmand' }
};

window.GENDERS = { dames: 'Dames', heren: 'Heren', unisex: 'Unisex' };

/* ---------- Flacon-illustratie (placeholder voor echte productfotografie) ---------- */
window.bottleSVG = function (p, uid) {
  const id = (uid || 'b') + '-' + p.id;
  const tint = p.tint, cap = p.cap;
  const defs = `
    <defs>
      <linearGradient id="g-${id}" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="${tint}" stop-opacity=".92"/>
        <stop offset=".35" stop-color="${tint}" stop-opacity=".55"/>
        <stop offset=".55" stop-color="#fff" stop-opacity=".18"/>
        <stop offset=".8" stop-color="${tint}" stop-opacity=".8"/>
        <stop offset="1" stop-color="${tint}" stop-opacity="1"/>
      </linearGradient>
      <linearGradient id="c-${id}" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="${cap}" stop-opacity=".85"/>
        <stop offset=".5" stop-color="${cap}"/>
        <stop offset="1" stop-color="#000" stop-opacity=".55"/>
      </linearGradient>
      <linearGradient id="s-${id}" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>`;
  const label = (w, y, size) => `
    <text x="100" y="${y}" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="${size || 7}" letter-spacing="2" fill="${isLight(tint) ? '#2a2825' : '#f5f1ea'}" opacity=".9">${esc(shortName(p.name))}</text>
    <text x="100" y="${y + 11}" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="5" letter-spacing="1.5" fill="${isLight(tint) ? '#6e675d' : '#d1b06b'}" opacity=".9">${esc(brandName(p.brand).toUpperCase())}</text>`;

  if (p.bottle === 'gift') {
    return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cadeaubon De Niche Parfumerie">
      <rect x="20" y="70" width="160" height="110" rx="6" fill="${tint}"/>
      <rect x="20" y="70" width="160" height="110" rx="6" fill="none" stroke="${cap}" stroke-opacity=".6"/>
      <rect x="28" y="78" width="144" height="94" rx="3" fill="none" stroke="${cap}" stroke-opacity=".35"/>
      <text x="100" y="118" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="9" letter-spacing="3" fill="#f5f1ea">DE  NICHE</text>
      <text x="100" y="134" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="7" letter-spacing="3" fill="${cap}">PARFUMERIE</text>
      <text x="100" y="158" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="6" letter-spacing="2.5" fill="#f5f1ea" opacity=".7">CADEAUBON</text>
    </svg>`;
  }
  if (p.bottle === 'set') {
    const vial = (x, c) => `<rect x="${x}" y="120" width="14" height="56" rx="3" fill="${c}" fill-opacity=".85" stroke="rgba(0,0,0,.2)"/><rect x="${x + 3}" y="110" width="8" height="12" rx="1" fill="#2a2825"/>`;
    return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ontdekkingsset met zes samples">
      <rect x="24" y="92" width="152" height="104" rx="4" fill="${tint}"/>
      <rect x="30" y="98" width="140" height="92" rx="2" fill="none" stroke="${cap}" stroke-opacity=".5"/>
      ${vial(40, '#2E3A2F')}${vial(60, '#D8905F')}${vial(80, '#C9A878')}${vial(100, '#E9A9B8')}${vial(120, '#6B4A2E')}${vial(140, '#E6D9BF')}
      <text x="100" y="212" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="6" letter-spacing="2.5" fill="#f5f1ea" opacity=".8">DE NICHE · ONTDEKKINGSSET</text>
    </svg>`;
  }

  let body = '';
  switch (p.bottle) {
    case 'a': // hoog, rechthoekig
      body = `
        <rect x="80" y="18" width="40" height="34" rx="2" fill="url(#c-${id})"/>
        <rect x="88" y="52" width="24" height="10" fill="#444" opacity=".6"/>
        <rect x="52" y="60" width="96" height="190" rx="6" fill="url(#g-${id})" stroke="rgba(0,0,0,.18)" stroke-width="1"/>
        <rect x="58" y="66" width="14" height="178" rx="4" fill="url(#s-${id})"/>
        ${label(96, 165)}`;
      break;
    case 'b': // cilindrisch
      body = `
        <rect x="76" y="14" width="48" height="36" rx="24" ry="8" fill="url(#c-${id})"/>
        <rect x="90" y="48" width="20" height="12" fill="#555" opacity=".6"/>
        <path d="M58 72 Q58 58 72 58 H128 Q142 58 142 72 V236 Q142 252 126 252 H74 Q58 252 58 236 Z" fill="url(#g-${id})" stroke="rgba(0,0,0,.18)" stroke-width="1"/>
        <path d="M66 74 Q66 66 74 66 H80 V244 H74 Q66 244 66 236 Z" fill="url(#s-${id})"/>
        ${label(160, 165)}`;
      break;
    case 'c': // vierkant, laag, brede dop
      body = `
        <rect x="70" y="28" width="60" height="36" rx="3" fill="url(#c-${id})"/>
        <rect x="88" y="64" width="24" height="8" fill="#444" opacity=".6"/>
        <rect x="40" y="72" width="120" height="178" rx="8" fill="url(#g-${id})" stroke="rgba(0,0,0,.18)" stroke-width="1"/>
        <rect x="48" y="80" width="16" height="162" rx="5" fill="url(#s-${id})"/>
        <rect x="62" y="130" width="76" height="62" fill="${isLight(tint) ? 'rgba(255,255,255,.55)' : 'rgba(245,241,234,.9)'}" />
        <text x="100" y="158" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="7" letter-spacing="2" fill="#1c1b19">${esc(shortName(p.name))}</text>
        <text x="100" y="170" text-anchor="middle" font-family="Jost, Arial, sans-serif" font-size="5" letter-spacing="1.5" fill="#8e6e33">${esc(brandName(p.brand).toUpperCase())}</text>`;
      break;
    default: // d: rond, klassiek
      body = `
        <rect x="84" y="20" width="32" height="30" rx="4" fill="url(#c-${id})"/>
        <rect x="90" y="50" width="20" height="10" fill="#444" opacity=".6"/>
        <path d="M100 60 C 40 70, 26 150, 46 212 C 58 248, 142 248, 154 212 C 174 150, 160 70, 100 60 Z" fill="url(#g-${id})" stroke="rgba(0,0,0,.18)" stroke-width="1"/>
        <path d="M70 100 C 56 130, 54 170, 62 206" stroke="url(#s-${id})" stroke-width="12" stroke-linecap="round" fill="none" opacity=".9"/>
        ${label(160, 160)}`;
  }
  return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.name)} van ${esc(brandName(p.brand))} (illustratie)">${defs}${body}</svg>`;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function isLight(hex) { const n = parseInt(hex.slice(1), 16); const r = n >> 16, g = (n >> 8) & 255, b = n & 255; return (r * 299 + g * 587 + b * 114) / 1000 > 150; }
  function brandName(bid) { const b = window.BRANDS.find(x => x.id === bid); return b ? b.name : bid; }
  function shortName(n) { n = n.replace(/^Replica /, '').toUpperCase(); return n.length > 16 ? n.slice(0, 15) + '…' : n; }
};

/* ---------- Productbeeld: foto als die bestaat, anders de illustratie ----------
   Zet een foto neer als img/producten/<product-id>.jpg (bv. img/producten/dior-sauvage.jpg).
   base = pad naar de projectroot ('' in de webshop, '../' op de merksite). */
window.productMedia = function (p, uid, base) {
  base = base || "";
  if (p.bottle === "set" || p.bottle === "gift") return window.bottleSVG(p, uid);
  return window.bottleSVG(p, uid) +
    `<img class="pimg" src="${base}img/producten/${p.id}.jpg" alt="${p.name.replace(/"/g, "&quot;")}" loading="${uid === "stage" ? "eager" : "lazy"}" onload="this.parentElement.classList.add('has-photo')" onerror="this.remove()">`;
};
