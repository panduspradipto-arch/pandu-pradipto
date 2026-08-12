# PORTFOLIO CONTENT MAP

> **LOCKED CONTENT REFERENCE — DO NOT MODIFY PROJECT DATA WITHOUT EXPLICIT APPROVAL.**

Reference document only. Nothing here has been written into `src/data`. Every
`[NEEDS CONFIRMATION]` flag is deliberate and must survive until the owner
resolves it. Do not normalize, infer, or fill gaps to make the data tidy.

Last updated: 2026-08-11

---

## 1 · Sources

Two archives, both **internal only**. Neither folder name nor its structure is
ever exposed on the website.

| Source | Files | Role |
|---|---|---|
| `PORTOFOLIO/` | 295 | Curated subset, organised by deliverable discipline |
| `_Artwork/` | 836 | Full archive, organised by year (2006–2025) and format |

Discipline folders (BRANDING, CONTENT DESIGN, CONTENT VIDEO, DESIGN KV, DVC/TVC,
MOTIONGRAPHIC, PHOTOGRAPHY, STORYBOARD) are **cross-sections, not projects**. A
single campaign spans five or six of them. They survive as **filter metadata**,
never as site categories.

### Technical note — aspect ratio

**Never read aspect ratio from storage dimensions or folder names.** Several
assets store non-square pixels: ABC Sirup, realme, and the Mila D'Opiz masters
all report `1080×1080` storage but carry `SAR/DAR 9:16` and display vertical.
Always take `display_aspect_ratio` from the file itself.

---

## 2 · TIER A — homepage + dedicated Project Detail

| # | Project | Client | Category | Year | Role | Assets | Hero candidate |
|---|---|---|---|---|---|---|---|
| A1 | Telon Lang / TLP | Telon Lang | Visual + Commercial | 2018–2020 | `[USER TO CONFIRM]` | 41 | POSM Gondola in-situ |
| A2 | Hotlicks / Django's | Hotlicks · Django's | Digital + Commercial | 2023–2025 | `[USER TO CONFIRM]` | 42 | First Fire t8.0 (cropped) |
| A3 | BRI | BRI | Visual + Commercial | 2021–2024 | **Art Director** | ~24 + 3 films | Traveloka Horizontal · Giro film |
| A4 | TriPollar | TriPollar | Digital + Visual | 2024 | `[USER TO CONFIRM]` | 44 @ 4320×4320 | Gold-on-black product |
| A5 | Schwarzkopf (incl. Hairtitude) | Schwarzkopf | Digital | 2023 | `[USER TO CONFIRM]` | 70 + 2 films | Hairtitude 1920×1080 |
| A6 | Bank Mandiri — Corporate Banking | Bank Mandiri | Commercial | 2018–2020 | `[USER TO CONFIRM]` | 11 → **4 publishable** | MCB t27.0 |
| A7 | JOAYO | JOAYO | Commercial | 2020 | `[USER TO CONFIRM]` | Final artwork only | JOA YO_30S t23.1 |
| A8 | Mila D'Opiz | Mila D'Opiz | Digital | 2025 | `[USER TO CONFIRM]` | 17, all 9:16 | t32.2 (corrected) |
| A9 | Balsem Lang | Balsem Lang | Visual | 2020 | `[USER TO CONFIRM]` | 10 | BL Backdrop |
| A10 | realme | realme | Commercial + Digital | 2025 | `[USER TO CONFIRM]` | 6, all 9:16 | t23.0 (corrected) |

### Per-project constraints

- **A1 Telon Lang** — `[CO-BRANDED — PANAKO / TELON LANG]` on `16_Panako_TL_TLP`.
  Ownership of ~14 unassigned POSM/in-situ files unresolved; they are among the
  best landscape hero candidates available.
- **A2 Hotlicks / Django's** — merged as one engagement (confirmed). Client-brand
  watermark (red lips, top-left) appears on every reel and collides with the site
  wordmark; resolved by safe crop, **never by retouching**. Three reels are
  degraded re-encodes (`SaveVid`, `WhatsApp`, `6791b38e…`); masters unknown.
- **A3 BRI** — single entry covering Consumer/Retail, Private/Prioritas, Card &
  Identity, ibbiz, and Giro.
- **A6 Bank Mandiri** — three Corporate Banking KVs are `copy` files; originals
  unknown. `MCB 60s` has 2.35:1 letterboxing baked into 1920×1080 (usable height
  ~816px) and burnt-in Indonesian subtitles on several frames.
- **A7 JOAYO** — entire `_Artwork` set sits under `1 Pitching/`. Publishable
  material is a **small subset**. See §7.
- **A8 / A10** — no stills and no landscape assets exist. Poster frames are a
  prerequisite, not a polish step.

---

## 3 · TIER B — Work page

| Project | Client | Year | Role | Assets |
|---|---|---|---|---|
| Ula | Ula (fintech) | 2022–2023 | **Senior Art Director** | 6 → 1 work |
| Kit Kat | Kit Kat | 2024 | **Art Director** (freelance, agency VMLY&R) | 1 |
| Prudential Syariah | Prudential | 2024 | **Art Director** (freelance, agency VMLY&R) | 1 |
| Google Summit Jakarta | — | 2024 | **Videographer** | 1 @ 1920×1080 |
| Oliver Tse | — | 2023 | **Videographer** | 1 @ 1920×1080 |
| Japota × JKT48 | Japota | 2022 | **Videographer** | 1 @ 1276×720 |
| Ensure | Ensure | 2023 | `[USER TO CONFIRM]` | 18 |
| ABC Sirup | ABC | 2024 | `[USER TO CONFIRM]` | 2 @ 9:16 |
| Micromine Indonesia | Micromine | 2023 | `[USER TO CONFIRM]` | 1 |
| BTN — Digital Store | BTN | 2025 | `[USER TO CONFIRM]` | 1 |
| Clean & Green Jakarta | CGJ | 2024 | `[USER TO CONFIRM]` | 1 |
| Rucika | Rucika | 2020 | `[USER TO CONFIRM]` | 3 |
| XL (incl. NB-IoT) | XL | 2020 | `[USER TO CONFIRM]` | 3 |
| Daihatsu — Ayla | Daihatsu | 2018–2020 | `[USER TO CONFIRM]` | 2 |
| Woods' | Woods' | 2018–2020 | `[USER TO CONFIRM]` | 3 |
| Djabesmen | Djabesmen | 2018–2020 | `[USER TO CONFIRM]` | 1 |
| Fatigon | Fatigon | 2018–2020 | `[USER TO CONFIRM]` | 6 boards |
| Torabika | Torabika | 2018–2020 | `[USER TO CONFIRM]` | 3 |
| Bebelac | — | 2023 | Motion graphics | 1 |
| Pristine | — | 2021 | Motion graphics | 1 |

Notes: **Ayla** is a product name; the client is **Daihatsu**. `AYLA_PANDU.jpg`
is 4961×3508 landscape — one of the highest-resolution landscape assets held.
`24_daihatsu oil_KV_2b.jpg` is reinstated under the same client.

---

## 4 · TIER C — archive

**Early Work (2006–2008)** — Garuda Indonesia, SGM "It's My Life", PKS PSAs (8),
BimoReel. 14 SD-era `.mov` files. Communicates career depth. **Never homepage.**
Let the year carry the chronology; do not over-emphasise.

---

## 5 · Homepage — 6 projects, exact sequence

Six, not eight: the approved grid cadence is full-bleed → 60/40 pair → three-up.
Six fills one complete cycle. A seventh restarts with another full-bleed and
breaks the rhythm.

| Slot | Project | Rationale |
|---|---|---|
| 1 — full-bleed | Hotlicks / Django's | Only frame that holds at 640px full-bleed; opens on craft |
| 2 — large 1.4fr | Telon Lang | Deepest body; retail in-situ needs width |
| 3 — small 1fr | TriPollar | Gold-on-black; tonal contrast, closest match to site palette |
| 4 — three-up | BRI | Largest client body; confirmed Art Director |
| 5 — three-up | Schwarzkopf | 70 assets + HD film; international brand |
| 6 — three-up | realme | Closes on 2025 so the row reads current |

Sector spread: F&B → FMCG retail → beauty device → banking → professional beauty → tech.

**Alternates:** Bank Mandiri (strong 60s TVC credential, held back by only 4
publishable assets) · Mila D'Opiz (pale palette fights the dark ground).

---

## 6 · Project Detail pages — 6

**Telon Lang · Hotlicks/Django's · BRI · TriPollar · Schwarzkopf · JOAYO**

Each has a hero, enough supporting material for real gallery rhythm, and mixed
formats. **Mila D'Opiz** and **realme** require approved poster frames first.
**Bank Mandiri** requires the originals behind its three `copy` KVs.

---

## 7 · Publication restrictions

### Never publish

| Category | Detail |
|---|---|
| JOAYO pitch material | `1 Pitching/Brief/` — creative brief, agency brief, contact report, BIG IDEA deck. Client-confidential |
| JOAYO references | `ref k\v/` (18) — third-party mood references, **not this portfolio's work** |
| JOAYO client material | `Materi Joayo/` — client-supplied packs and logos |
| Licensed stock | `_Artwork/SS/` (94) + JOAYO `Stock/`, `Shutterstock Pandu 03.06.2020`. Design source only — **must never be presented as photography** |
| Corporate portrait session | 40 files. Excluded by owner decision |
| Benstar | 2 files. Pitch project, excluded by owner decision |
| Animatics | Stillomatic, Scrubber, Coolant. Excluded by owner decision |
| Adem Sari · Energen | Excluded by owner decision |
| Showreel | `Showreel Motion Graphic Part 1 - Pandu Seno.mp4`. Excluded by owner decision |
| Working files | All `.psd`, `.ai`, `.eps`, `.psb` |
| Duplicates | Any filename containing `copy`; `-Recovered`; `outtakes_branding/` |
| Superseded | The 2019 ABC print catalog entry (deleted — ABC is one 2024 project) |

### Handling rules

- **Never digitally remove or clone out a watermark.** Prefer a clean alternate
  asset; then a safe crop that does not damage composition; otherwise flag and
  recommend replacing the hero.
- **Never crop important artwork purely to remove a watermark** if the crop
  damages the composition.
- **Never re-crop portrait work into landscape containers** for layout
  consistency. Preserve the original visual intent.
- Video is hosted externally and embedded on demand via click-to-load facade.
  Nothing loads from the video host until the viewer asks.

---

## 8 · Hero frame references

**All hero frames below are PLACEHOLDERS — not approved.** Extracted as
fallback/poster assets. **No source video was altered or replaced.**

| Project | Frame | Source video | Timestamp | Ratio |
|---|---|---|---|---|
| Hotlicks / Django's | Flames in dark grill | `First Fire Hotlicks PIK 2.mp4` | 8.0s | 16:9 (safe-cropped 1920×930) |
| Hotlicks (alt) | Steak on coals | `Hotlicks B-Roll Serpong.mp4` | 27.1s | 16:9 |
| JOAYO | Wide, cyclist through trees | `JOA YO_30S.mov` | 23.1s | 16:9 |
| Bank Mandiri | Professional on phone, city depth | `MCB 60s (bahasa).mov` | 27.0s | 16:9 (letterboxed) |
| Bank Mandiri (alt) | Child drawing | `MCB 60s (bahasa).mov` | 18.0s | 16:9 |
| Mila D'Opiz | Wide interior, model + mirror | `2025_Milla D_Opiz - 01.mp4` | 32.2s | **9:16** |
| realme | Symmetrical wide, monitors framing bed | `2025 - realme _ V1.mp4` | 23.0s | **9:16** |
| realme (alt) | Clean, no supers | `2025 - realme _ V1.mp4` | 9.2s | **9:16** |

Rejected per selection criteria: awkward expressions, motion blur, transition
frames, and burnt-in subtitles. Campaign supers that are part of the artwork are
acceptable.

---

## 9 · Photography

**Photography remains a SUPPORTING capability.**

There is currently **no confirmed photography body in the archive**. The only
photographic files located are licensed stock (`_Artwork/SS/`) and social
re-downloads (`Snapinsta.app_*`, `SaveVid.Net_*`). The corporate portrait session
was excluded by owner decision.

**Do not claim a photography portfolio strength that is not supported by the
available work.** Do not make Photography a primary homepage capability claim
until a strong featured photography project exists.

`[PHOTOGRAPHY — NEEDS STRONGER FEATURED PROJECT]`

---

## 10 · Videography

**Confirmed Videographer credits:**

- Google Summit Jakarta — 2024
- Oliver Tse — 2023
- Japota × JKT48 — 2022

These support the video half of "Video & Photography". They do **not** support a
photography claim.

---

## 11 · Clients — confirmed only

Use **only** these names in the Clients section:

BRI · Bank Mandiri · Schwarzkopf · TriPollar · realme · Daihatsu · Prudential ·
Kit Kat · BTN · Micromine · Ula · ABC · XL · Rucika · Woods' · Djabesmen ·
Ensure · Telon Lang · Balsem Lang · JOAYO · Hotlicks · Mila D'Opiz · Torabika ·
Japota · Fatigon

Understated and editorial. **No giant logo wall.** No client logo files have been
supplied — the marquee renders wordmarks until real marks land.

---

## 12 · Agencies / credits — NOT clients

**VMLY&R is an agency, not a client.** Keep it in project credits where relevant
(Kit Kat, Prudential Syariah — freelance Art Director engagements).

Other agency/studio names appearing in source data (Dentsu, Cerahati) are
likewise **credits, not clients**, and remain `[NEEDS CONFIRMATION]`.

---

## 13 · Employment context — not projects

**GovTech Procurement** — office where the owner worked as **Multimedia
Specialist, 2023–2024**. This is employment history and belongs in **About**,
never in the Work map.

Note: the legacy catalog applied "Multimedia Specialist" as a *project role* on
Mila D'Opiz (dated 2025, i.e. after that position). Flagged for the role pass.

---

## 14 · Open items

### Blocking nothing, still unresolved

| Item | Status |
|---|---|
| Roles on 15 projects | `[USER TO CONFIRM]` — owner refining separately |
| Hero frames | All placeholders; none approved |
| Unassigned POSM / in-situ set (~14 files) | Ownership between Telon Lang and Balsem Lang unresolved |
| Bank Mandiri `copy` KVs | Originals unknown |
| Hotlicks degraded reels ×3 | Masters unknown |
| NB-IoT | Both files are `Alt02`; selected version unknown |
| Schwarzkopf date edge | AON set contains files dated Jan 2024; recorded as 2023 per owner |
| TriPollar folder placement | Sits in `_Artwork/2023/`; recorded as 2024 per owner |

### Assets not found in either archive

`[FEATURED ASSET NOT FOUND]` — MLBB · Cimory × Tayo "Dance" · *Anika & the Worry
Monster* · J&T Express

### Portrait for About

No portrait asset exists in either archive matching the approved black-and-white
street portrait direction. `uploads/hero.jpg` in the Claude Design project is the
only candidate seen. `[ABOUT PORTRAIT — ASSET NEEDS SOURCING]`

---

## 15 · Totals

**30 projects** — 10 Tier A, 20 Tier B — plus Early Work (2006–2008) as an
archive grouping. Within the 20–30 target.

Approximate publishable pool after all exclusions: **~200 assets**.
