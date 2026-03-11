export type PricingItem = {
  name: string;
  price: string;
};

export type PricingCategory = {
  title: string;
  items: PricingItem[];
};

export const pricingHighlights = [
  {
    label: "Zadatek",
    value: "100 zł",
    description: "Płatny w ciągu 24 h od potwierdzenia terminu.",
  },
  {
    label: "Konsultacja",
    value: "100 zł",
    description: "Pomaga dobrać zabieg i bezpieczny plan działania.",
  },
  {
    label: "Rezerwacja",
    value: "Booksy",
    description: "Najwygodniejszy sposób, aby sprawdzić terminy i umówić wizytę.",
  },
];

export const pricingCategories: PricingCategory[] = [
  {
    title: "Makijaż permanentny",
    items: [
      { name: "Soft Ombré Brows", price: "1000 zł" },
      { name: "Metoda włos maszynowy", price: "1200 zł" },
      { name: "Metoda hybrydowa", price: "1200 zł" },
      { name: "Satin Lips", price: "1000 zł" },
      { name: "Makijaż permanentny brwi i ust", price: "1800 zł" },
      { name: "Dopigmentowanie do 12 tygodni", price: "300 zł" },
      { name: "Odświeżenie do 12 miesięcy", price: "650 zł" },
      { name: "Odświeżenie do 24 miesięcy", price: "750 zł" },
      { name: "Konsultacja", price: "100 zł" },
      { name: "Usuwanie laserowe makijażu permanentnego brwi / ust", price: "250 zł" },
      { name: "Usuwanie laserowe tatuażu", price: "od 300 zł" },
      { name: "Usuwanie chemiczne - remover", price: "250 zł" },
    ],
  },
  {
    title: "Modelowanie ust i wolumetria",
    items: [
      { name: "Wypełnienie kwasem hialuronowym", price: "800 zł" },
      { name: "1 ml Revolax", price: "800 zł" },
      { name: "1 ml Stylage", price: "850 zł" },
      { name: "Hialuronidaza", price: "800 zł" },
      { name: "Rozpuszczanie kwasu hialuronowego miejscowo", price: "450 zł" },
      { name: "Modelowanie żuchwy", price: "900 zł" },
      { name: "Modelowanie kości policzkowych", price: "700 zł" },
      { name: "Modelowanie brody", price: "700 zł" },
      { name: "Bruzdy nosowo-wargowe", price: "800 zł" },
      { name: "Full Face", price: "3000 zł" },
      { name: "Full Face + modelowanie ust", price: "3500 zł" },
    ],
  },
  {
    title: "BTX - redukcja zmarszczek",
    items: [
      { name: "Lwia zmarszczka", price: "350 zł" },
      { name: "Zmarszczki poprzeczne czoła", price: "500 zł" },
      { name: "Kurze łapki", price: "450 zł" },
      { name: "Foxy Eye", price: "400 zł" },
      { name: "Broda brukowana", price: "400 zł" },
      { name: "Lip flip - wywinięcie ust", price: "450 zł" },
      { name: "Korekta nosa", price: "600 zł" },
      { name: "Zmarszczki królicze nosa", price: "350 zł" },
      { name: "Uśmiech dziąsłowy", price: "450 zł" },
      { name: "Zmarszczki palacza", price: "350 zł" },
      { name: "Opadające kąciki ust", price: "350 zł" },
      { name: "Bruksizm", price: "800 zł" },
      { name: "Nadpotliwość", price: "800 zł" },
      { name: "Platysma", price: "900 zł" },
      { name: "Pakiet 2 okolice", price: "600 zł" },
      { name: "Pakiet 3 okolice", price: "800 zł" },
      { name: "Full Face", price: "3000 zł" },
      { name: "Modelowanie ust + BTX (2 okolice)", price: "1300 zł" },
    ],
  },
  {
    title: "Biostymulatory tkankowe",
    items: [
      { name: "Lumi Eyes / Ami Eyes", price: "500 zł" },
      { name: "Tropokolagen twarz", price: "700 zł" },
      { name: "Tropokolagen okolica oka", price: "500 zł" },
      { name: "Karisma", price: "900 zł" },
      { name: "Jalupro Classic", price: "700 zł" },
      { name: "Sunekos 200", price: "800 zł" },
      { name: "Sunekos 1200", price: "800 zł" },
      { name: "Hydra Royal", price: "500 zł" },
      { name: "Geo Lifting V", price: "600 zł" },
      { name: "Ashanti", price: "600 zł" },
      { name: "Ejal 40", price: "550 zł" },
      { name: "Nucleofill Soft", price: "800 zł" },
      { name: "Nucleofill Strong", price: "800 zł" },
      { name: "Profhilo", price: "800 zł" },
      { name: "Kwas polimlekowy - twarz", price: "2000 zł" },
      { name: "Kwas polimlekowy - szyja", price: "1200 zł" },
      { name: "Kwas polimlekowy - dłonie", price: "1000 zł" },
    ],
  },
  {
    title: "Mezoterapia i Dermapen",
    items: [
      { name: "Mezoterapia twarzy", price: "500 zł" },
      { name: "Mezoterapia okolic oczu", price: "400 zł" },
      { name: "Mezoterapia twarz + oczy", price: "650 zł" },
      { name: "Mezoterapia twarz + szyja + dekolt", price: "750 zł" },
      { name: "Mezoterapia dłoni", price: "400 zł" },
      { name: "Mezoterapia skóry głowy", price: "400 zł" },
      { name: "DR CYJ 1 ml", price: "550 zł" },
      { name: "DR CYJ 2 ml", price: "850 zł" },
      { name: "Dermapen 4.0 - twarz", price: "650 zł" },
      { name: "Dermapen 4.0 - twarz + szyja", price: "750 zł" },
      { name: "Dermapen 4.0 - twarz + szyja + dekolt", price: "850 zł" },
      { name: "Koktajl Monaco", price: "600 zł" },
      { name: "Rewitalizacja ust Neauvia Hydro Deluxe", price: "650 zł" },
    ],
  },
  {
    title: "Lipoliza iniekcyjna",
    items: [
      { name: "Lipoliza podbródka", price: "350 zł" },
      { name: "Lipoliza policzków", price: "350 zł" },
      { name: "Lipoliza ud", price: "600 zł" },
      { name: "Lipoliza boczków", price: "500 zł" },
      { name: "Lipoliza brzucha", price: "500 zł" },
      { name: "Lipoliza ramion", price: "450 zł" },
      { name: "Lipoliza kolan", price: "400 zł" },
    ],
  },
  {
    title: "Nici PDO i PLLA",
    items: [
      { name: "Nici PDO Mono - 1 szt.", price: "50 zł" },
      { name: "Nici PDO Mono - 20 szt.", price: "1000 zł" },
      { name: "Nici PDO Mono - 50 szt.", price: "1700 zł" },
      { name: "Full Face - 100 szt.", price: "2500 zł" },
      { name: "Nici PDO Tornado - 10 szt.", price: "1000 zł" },
      { name: "Nici PDO Tornado - 20 szt.", price: "1800 zł" },
      { name: "Cavern Fill PLLA - lwia zmarszczka", price: "700 zł" },
      { name: "Cavern Fill PLLA - bruzdy nosowo-wargowe", price: "800 zł" },
      { name: "Nici PLLA - 10 szt.", price: "600 zł" },
      { name: "Nici PLLA - 20 szt.", price: "1200 zł" },
      { name: "Nici PLLA - okolica oka (min. 20 szt.)", price: "1200 zł" },
    ],
  },
  {
    title: "Morpheus8",
    items: [
      { name: "Twarz", price: "1000 zł" },
      { name: "Twarz + szyja", price: "1200 zł" },
      { name: "Twarz + szyja + dekolt", price: "1500 zł" },
      { name: "Pakiet 3 zabiegi - twarz", price: "2500 zł" },
      { name: "Pakiet 3 zabiegi - twarz + szyja", price: "3000 zł" },
      { name: "Pakiet 3 zabiegi - twarz + szyja + dekolt", price: "3800 zł" },
    ],
  },
];

export const pricingFootnote =
  "*Powyżej 12 tygodni zabieg makijażu permanentnego traktowany jest jako odświeżenie. Odświeżenie makijażu wykonanego w innym salonie, po wcześniejszej konsultacji, może zostać potraktowane jako nowy zabieg.";
