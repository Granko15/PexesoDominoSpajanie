/* =====================================================================
   OBSAH HIER
   - id:    krátky unikátny názov (bez diakritiky a medzier)
   - name:  názov témy zobrazený v aplikácii
   - cards: zoznam dvojíc { word, icon }
     * word = slovo z kartičky
     * icon = emoji (prototyp) – neskôr sa dá nahradiť obrázkom
   ===================================================================== */

const TOPICS = [
  {
    id: "zvierata",
    name: "Zvieratá",
    cards: [
      { word: "pes",       icon: "🐕" },
      { word: "mačka",     icon: "🐈" },
      { word: "kôň",       icon: "🐎" },
      { word: "krava",     icon: "🐄" },
      { word: "ovca",      icon: "🐑" },
      { word: "prasa",     icon: "🐖" },
      { word: "sliepka",   icon: "🐔" },
      { word: "kohút",     icon: "🐓" },
      { word: "kačica",    icon: "🦆" },
      { word: "ryba",      icon: "🐟" },
      { word: "vták",      icon: "🐦" },
      { word: "medveď",    icon: "🐻" },
      { word: "líška",     icon: "🦊" },
      { word: "zajac",     icon: "🐇" },
      { word: "myš",       icon: "🐁" }
    ]
  },
  {
    id: "ovocie-zelenina",
    name: "Ovocie a zelenina",
    cards: [
      { word: "jablko",    icon: "🍎" },
      { word: "hruška",    icon: "🍐" },
      { word: "banán",     icon: "🍌" },
      { word: "pomaranč",  icon: "🍊" },
      { word: "citrón",    icon: "🍋" },
      { word: "hrozno",    icon: "🍇" },
      { word: "jahoda",    icon: "🍓" },
      { word: "čerešňa",   icon: "🍒" },
      { word: "melón",     icon: "🍉" },
      { word: "broskyňa",  icon: "🍑" },
      { word: "paradajka", icon: "🍅" },
      { word: "mrkva",     icon: "🥕" },
      { word: "zemiak",    icon: "🥔" },
      { word: "kukurica",  icon: "🌽" },
      { word: "paprika",   icon: "🫑" }
    ]
  },
  {
    id: "farby-tvary",
    name: "Farby a tvary",
    cards: [
      { word: "červená",     icon: "🔴" },
      { word: "modrá",       icon: "🔵" },
      { word: "zelená",      icon: "🟢" },
      { word: "žltá",        icon: "🟡" },
      { word: "oranžová",    icon: "🟠" },
      { word: "fialová",     icon: "🟣" },
      { word: "hnedá",       icon: "🟤" },
      { word: "čierna",      icon: "⚫" },
      { word: "biela",       icon: "⚪" },
      { word: "srdce",       icon: "❤️" },
      { word: "hviezda",     icon: "⭐" },
      { word: "kruh",        icon: "⭕" },
      { word: "trojuholník", icon: "🔺" },
      { word: "štvorec",     icon: "◼️" },
      { word: "obdĺžnik",    icon: "▬" }
    ]
  },
  {
    id: "doprava",
    name: "Dopravné prostriedky",
    cards: [
      { word: "auto",        icon: "🚗" },
      { word: "autobus",     icon: "🚌" },
      { word: "vlak",        icon: "🚆" },
      { word: "lietadlo",    icon: "✈️" },
      { word: "loď",         icon: "🚢" },
      { word: "bicykel",     icon: "🚲" },
      { word: "motorka",     icon: "🏍️" },
      { word: "kamión",      icon: "🚚" },
      { word: "sanitka",     icon: "🚑" },
      { word: "hasičské auto", icon: "🚒" },
      { word: "policajné auto", icon: "🚓" },
      { word: "taxík",       icon: "🚕" },
      { word: "električka",  icon: "🚊" },
      { word: "helikoptéra", icon: "🚁" },
      { word: "raketa",      icon: "🚀" }
    ]
  },
  {
    id: "rodina",
    name: "Rodina a ľudia",
    cards: [
      { word: "mama",      icon: "👩" },
      { word: "otec",      icon: "👨" },
      { word: "babka",     icon: "👵" },
      { word: "dedko",     icon: "👴" },
      { word: "chlapec",   icon: "👦" },
      { word: "dievča",    icon: "👧" },
      { word: "bábätko",   icon: "👶" },
      { word: "rodina",    icon: "👨‍👩‍👧" },
      { word: "učiteľ",    icon: "👨‍🏫" },
      { word: "lekár",     icon: "👨‍⚕️" },
      { word: "policajt",  icon: "👮" },
      { word: "kuchár",    icon: "👨‍🍳" },
      { word: "hasič",     icon: "👨‍🚒" },
      { word: "klaun",     icon: "🤡" },
      { word: "kráľ",      icon: "👑" }
    ]
  },
  {
    id: "jedlo",
    name: "Jedlo a nápoje",
    cards: [
      { word: "chlieb",     icon: "🍞" },
      { word: "mlieko",     icon: "🥛" },
      { word: "syr",        icon: "🧀" },
      { word: "maslo",      icon: "🧈" },
      { word: "vajce",      icon: "🥚" },
      { word: "mäso",       icon: "🍖" },
      { word: "polievka",   icon: "🍲" },
      { word: "cestoviny",  icon: "🍝" },
      { word: "ryža",       icon: "🍚" },
      { word: "pizza",      icon: "🍕" },
      { word: "koláč",      icon: "🍰" },
      { word: "čaj",        icon: "🍵" },
      { word: "káva",       icon: "☕" },
      { word: "voda",       icon: "💧" },
      { word: "džús",       icon: "🧃" }
    ]
  },
  {
    id: "skola",
    name: "Škola a pomôcky",
    cards: [
      { word: "kniha",       icon: "📕" },
      { word: "pero",        icon: "🖊️" },
      { word: "ceruzka",     icon: "✏️" },
      { word: "pravítko",    icon: "📏" },
      { word: "nožnice",     icon: "✂️" },
      { word: "lepidlo",     icon: "🧴" },
      { word: "batoh",       icon: "🎒" },
      { word: "tabuľa",      icon: "📋" },
      { word: "zošit",       icon: "📓" },
      { word: "farby",       icon: "🎨" },
      { word: "štetec",      icon: "🖌️" },
      { word: "počítač",     icon: "💻" },
      { word: "telefón",     icon: "📱" },
      { word: "hodiny",      icon: "⏰" },
      { word: "kalkulačka",  icon: "🧮" }
    ]
  },
  {
    id: "pocasie",
    name: "Počasie a ročné obdobia",
    cards: [
      { word: "slnko",   icon: "☀️" },
      { word: "oblak",   icon: "☁️" },
      { word: "dážď",    icon: "🌧️" },
      { word: "sneh",    icon: "❄️" },
      { word: "blesk",   icon: "⚡" },
      { word: "dúha",    icon: "🌈" },
      { word: "vietor",  icon: "🌬️" },
      { word: "jar",     icon: "🌸" },
      { word: "leto",    icon: "🏖️" },
      { word: "jeseň",   icon: "🍂" },
      { word: "zima",    icon: "⛄" },
      { word: "mráz",    icon: "🥶" },
      { word: "hmla",    icon: "🌫️" },
      { word: "búrka",   icon: "⛈️" },
      { word: "tornádo", icon: "🌪️" }
    ]
  }
];
