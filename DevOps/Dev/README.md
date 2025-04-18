## Dev - Kehityspipeline

Tämä kansio sisältää kaikki PowerShell-moduulit, jotka vastaavat projektin *rakennuksesta, kokoamisesta ja käynnistämisestä* paikallisesti.

---

## Suoritusjärjestys

## Suoritusjärjestys

```text
┌────────────────────┐
│ 1. Find-Rollups    │
│ Skannaa kaikki     │
│ rollup.config.js   │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ 2. Run-Rollup      │
│ Ajaa jokaisen      │
│ löydetyn buildin   │
└────────┬───────────┘
         ▼
┌────────────────────────────┐
│ 3. Create-BuildDir         │
│ Poistaa aiemman            │
│ ja luo uuden               │
│ päivämääräleimatun kansion│
└────────┬───────────────────┘
         ▼
┌────────────────────────────┐
│ 4. Copy-Output             │
│ Kopioi src/App → build     │
└────────────────────────────┘


---

## 🧪 Dev.ps1 (pääscriptti)

Tämä suorittaa yllä olevat stepit automaattisesti, jonka jälkeen se käynnistää `npm run dev`.

- `rollup -c --watch` pitää huolen livereloadista
- Dev-server toimii buildin jälkeen normaalisti

---

## 📦 Rakenne

/Dev │ ├── 1-Find-Rollups.ps1 ├── 2-Run-Rollup.ps1 ├── 3-Create-BuildDir.ps1 ├── 4-Copy-Output.ps1 ├── README.md <-- Tämä tiedosto


---

## 📌 Huomioita

- Rollup-configien nimet voivat olla vapaavalintaisia, kunhan ovat nimetty `rollup.config.js`
- `utils/` ja `components/` kansiot oletuksena eivät sisällä omaa rollupia
- Tiedostot suoritetaan `Dev.ps1`-päätiedostosta, joka sijaitsee projektin juuressa

---

.\Dev.ps1

Yksi komento — täydellinen dev-kokemus.
