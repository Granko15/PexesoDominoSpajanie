# Slovo & Piktogram – prototyp

Interaktívny prototyp troch hier (pexeso, spájanie, domino) na precvičovanie
dvojíc **slovo – piktogram**. Súčasť diplomovej práce.

## Ako spustiť lokálne
Stačí otvoriť `index.html` v prehliadači. Alebo:

    python3 -m http.server 8000

a otvoriť http://localhost:8000

## Ako nasadiť na GitHub Pages
1. Vytvor nový repozitár, napr. `slovo-piktogram` (public).
2. Nahraj doň `index.html`, `data.js` a `README.md`.
3. V repozitári: **Settings → Pages**.
4. Source: **Deploy from a branch**, Branch: **main**, folder: **/ (root)** → Save.
5. O ~1 minútu bude appka na:
   `https://<tvoje-meno>.github.io/slovo-piktogram/`

## Ako upraviť obsah
Všetko je v `data.js`:
- `TOPICS` = zoznam tém
- každá téma má `id`, `name` a `cards`
- karta = `{ word: "pes", icon: "🐕" }`

Počet tém ani slov nie je obmedzený. Hry si samy vyberú náhodný výber
(pexeso 8 dvojíc, spájanie 6 dvojíc, domino 8 dlaždíc).

## Ako nahradiť emoji obrázkami
V `data.js` nahraď `icon: "🐕"` za `icon: "<img src='obrazky/pes.png' alt=''>"`.
(V tomto prototype sa `icon` vkladá priamo do HTML.)
