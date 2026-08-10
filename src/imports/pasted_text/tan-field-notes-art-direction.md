# TAN / FIELD NOTES — ART DIRECTION v3

## What changed from v1 → v2
1. Turned "archive" from a visual metaphor into an actual data structure (cross-references between sections, Section 03).
2. Merged three overlapping "unique features" into one system, **The Ledger** (Section 04).
3. Added a recruiter/hiring-manager fast path (Section 06).
4. Added technical guardrails — accessibility, performance, motion (Section 22).
5. Trimmed mobile guidance to only what's actually different from desktop.

## What changed in v3
The v2 "editorial monochrome archive" look, while solid, overlaps heavily with a genre that's become common across AI-assisted dev portfolios (dither + halftone + contour lines + archive numbers). v3 keeps the structure entirely, but regrounds the *material system* in something specific and personal to a code-dev/game-dev background:
1. Texture moves from generic photographic halftone to **1-bit ordered/retro dither** (Section 18) — a real, citable technical reference (era of devices like the Game Boy Camera) rather than a mood filter.
2. The Field Mark becomes a small **pixel sprite** with idle-frame animation instead of an abstract contour-line graphic (Section 15).
3. Added an optional **Display Mode** easter egg — a handheld-screen palette toggle (Section 15A) — as a discoverable, personal signature rather than a default gimmick.
4. Added a disciplined **bitmap-font accent** for numbers/tags only (Section 16), so retro shows up in texture and type, not tone.
5. Added explicit retro-specific "don'ts" (Section 23) so this stays a developer's archive with a retro material system, not a games-website pastiche.

---

# 01. CORE CONCEPT (unchanged, this is good)

> "A developer documenting the things he discovers, builds, and experiments with."

Visual system name: **TAN / FIELD NOTES**

Blend: editorial design, technical documentation, field notebooks, engineering diagrams, archival documents, developer interfaces, subtle brutalism, monochrome photography, halftone/dither, contour lines.

Hard rule, unchanged: no literal notebook skeuomorphism. No fake paper, no fake handwriting, no decorative notebook graphics. The concept is communicated through *information architecture*, not props.

---

# 02. SITE STRUCTURE

```
HOME
├── FIELD NOTE        (Introduction / identity)
├── RECORDS            (Certifications / credentials)
├── BUILT              (Projects)
├── FIELD HISTORY      (Experience)
├── LAB                (Ideas / experiments)
└── START A NEW FIELD NOTE  (Contact)
```

Naming stays anti-generic: BUILT not Projects, LAB not Blog/Ideas, FIELD NOTE not About, START A NEW FIELD NOTE not Contact.

---

# 03. THE SIGNATURE SYSTEM: CROSS-REFERENCES

**This is the one addition that makes the whole concept earn its premise.** Everything else in v1 (archive numbers, "originated from," idea→project links) was gesturing at this — make it explicit and site-wide.

Every entry — a project, an experiment, a role, a certification — carries a stable ID (`BUILT/001`, `LAB/003`, `FIELD-HISTORY/002`) and can **cite** other entries it's related to. Citations render as small inline references, like footnotes:

```
BUILT / 001
UTRACKER

...built to solve a scheduling problem I first
wrote about in LAB / 003 →, using patterns from
FIELD HISTORY / 002 →.
```

Clicking a reference jumps to that entry with a brief highlight-flash (not a full page reload where avoidable). A small "Referenced by" list can appear at the bottom of any entry, showing what points back to it.

Why this matters: it's the difference between a portfolio that *says* "everything here is connected" and one where you can actually click through the connections. No other developer portfolio does this because it requires actual content modeling, not just styling — which is exactly why it's a strong signal for a software developer specifically.

Scope it honestly: not every entry needs citations. Force nothing. Empty is fine — an entry with no references just doesn't show the block.

---

# 04. THE LEDGER (replaces v1's archive number / currently-viewing / field status)

One small persistent UI element, not three overlapping ones.

Fixed position (e.g. corner or thin bar): 

```
LEDGER
BUILT / 003
6 OF 24 ENTRIES
LAST UPDATED — AUG 2026
```

It updates as the user navigates. It's the site's single "you are here, and here's the state of the archive" instrument — doing the job v1 split across three separate features. Use real values only (real entry count, real last-updated date). Never simulate live data.

---

# 05. HERO

Editorial, not a generic self-intro.

```
FIELD NOTE / 001

TAN
SOFTWARE DEVELOPER

I build digital products, systems, and
experiments around real-world problems.

PHILIPPINES — 2026 — SOFTWARE / WEB / SYSTEMS
```

Right side: large monochrome portrait treated as an archival field photograph — subtle dither, halftone, offset frame, small coordinate-style metadata (`PORTRAIT / 01`, `SUBJECT: TAN`, `FIELD: SOFTWARE DEVELOPMENT`). Keep the treatment restrained; it should read as "documented," not "specimen."

Include `[ PLAY FIELD NOTE ]` opening an intro-video modal labeled `FIELD NOTE / 001 — INTRODUCTION`, 16:9 frame, short description below, `× CLOSE NOTE`.

---

# 06. THE 60-SECOND READ (new — recruiter fast path)

Editorial sites risk burying the information a hiring manager actually needs under atmosphere. Add one small, undisguised control near the top of Home:

```
[ QUICK VIEW ]  —  role, stack, 3 best projects, résumé download, contact
```

This isn't a compromise on the concept — a field archive would obviously have an index card summarizing the record. It just needs to exist and be one click away, not buried three sections deep. Résumé stays a real, plain PDF — do not stylize the résumé download itself into an artifact; people need to be able to open and forward it without friction.

---

# 07. SECTION TRANSITIONS

Archive-marker style instead of generic dividers:

```
FIELD NOTE / 001 → RECORDS / 002
ARCHIVE ENTRY / 003 → BUILT
RECORD / 004 → FIELD HISTORY
```

---

# 08. RECORDS (Certifications)

Each credential is an indexed archive entry, not a card:

```
[01]
CERTIFICATION
[IMAGE]
ISSUED BY — ORGANIZATION
2026 — VERIFIED
```

Click opens a document-viewer modal:

```
DOCUMENT / 001 — CERTIFICATION      × CLOSE
[large certificate image]
ISSUER / DATE / CREDENTIAL / STATUS
[ VERIFY DOCUMENT ]
```

No unnecessary animation — this interaction should feel precise, like inspecting a real document.

---

# 09. BUILT

```
BUILT / SELECTED WORK
"Things that started as problems, ideas, or experiments and became software."
```

Custom archive-explorer layout, not project cards:

```
INDEX                         BUILT / 001
01 UTRACKER   ←selected        UTRACKER
02 SIP WEST                    FULL-STACK APPLICATION — 2026
03 ENDING                      STATUS: COMPLETED
04 THESIS
                                DESCRIPTION / ROLE / STACK /
                                CHALLENGE / SOLUTION / RESULT

                                [ SOURCE ]  [ LIVE ]
```

Where a project evolved from an idea, show the lineage plainly:

```
ORIGINATED FROM
LAB / 003 →
```

This is now just one instance of the Section 03 cross-reference system — don't build it as a separate mechanism.

---

# 10. LAB

```
LAB / EXPERIMENTS
"Not everything here is finished."
```

That line stays — it's doing real work, making the section feel honest rather than curated.

Index entries:

```
LAB / 001
ANTI-SMOKE BELCHING DETECTION
COMPUTER VISION / IOT
STATUS: RESEARCHING
```

Detail view: TITLE, STATUS, CATEGORY, DATE, PROBLEM (why this exists), CONCEPT (how it could work), TECHNOLOGY, CURRENT STATE, NEXT EXPERIMENT. These can be genuinely unfinished — hypotheses and open questions are allowed and encouraged.

**Experiment Log** — smaller, lower-stakes entries inside LAB for observations that aren't full write-ups:

```
EXPERIMENT / 014
QUESTION — Can this model detect X reliably at night?
RESULT — Promising, ~80% on the test set.
NEXT — Try against low-light footage.
```

---

# 11. FIELD HISTORY (Experience)

```
FIELD HISTORY

2026
SOFTWARE DEVELOPER — COMPANY — FULL-TIME

2025
FREELANCE DEVELOPER — WEB / SHOPIFY / SEO

2024
VIDEO EDITOR — COMPANY
```

Detail per entry: ROLE, COMPANY, TYPE, DATE, DESCRIPTION, CONTRIBUTIONS, TECHNOLOGIES. Concise — no long paragraphs. Can cite related BUILT/LAB entries via the Section 03 system.

---

# 12. CONTACT

```
START A NEW FIELD NOTE.
"Have a problem worth exploring?"
[ SEND MESSAGE ]
```

One of the few fully black sections — white type, minimal halftone, very subtle contour lines. Large closing statement, then EMAIL / GITHUB / LINKEDIN.

---

# 13. FOOTER

```
TAN / FIELD NOTES — SOFTWARE DEVELOPER — PHILIPPINES — 2026
BUILT · LAB · FIELD HISTORY · RECORDS · CONTACT
© 2026 TAN
```

---

# 14. VISUAL LANGUAGE

Base palette stays strict: white, black, off-white, light gray. No gradients, no neon.

**Optional, disciplined exception:** consider a single accent (e.g. a muted safety-orange or amber) used *only* for status flags — `RESEARCHING`, `COMPLETED`, `PROTOTYPING`, `VERIFIED`. Real field/lab documentation often uses exactly this move (a red-line stamp, a flagged tag) so it doesn't break the concept — and it meaningfully improves scannability, which pure monochrome can hurt. Entirely optional; the site works in strict monochrome too. Your call.

---

# 15. THE FIELD MARK — NOW A SPRITE

Reframe the field mark as a tiny **pixel sprite** rather than an abstract contour-line graphic — a small, low-res, 1-bit dithered glyph built on a visible pixel grid, in the spirit of a game asset rather than a design ornament. It still varies by section (`field mark / 001` on Home, `/003` on Built, `/005` on Lab) but now behaves like a sprite sheet: 2–4 frame idle animation, looping slowly (a subtle "breathing" cycle — a couple of pixels shift per frame), the way an idle game character sprite would. This is a much more specific and personal signature than generic contour lines, and it's a direct, legible nod to game dev without saying "game dev" anywhere.

Keep it small and quiet. It's a signature, not a mascot — never the focal point, never larger than a few dozen pixels on screen.

## 15A. DISPLAY MODE — an optional easter egg worth considering

A small toggle, tucked away (e.g. in the footer or Ledger), labeled something like:

```
DISPLAY — MODERN / HANDHELD
```

Switching to "HANDHELD" briefly recolors the interface into a 4-shade monochrome-green palette (the classic dot-matrix handheld screen look) instead of the black/white/gray system — same layout, same content, different display simulation. It's subtle, fully reversible, respects the "quiet, not screaming" philosophy (Section 25) because it's opt-in and tucked away rather than the default — but for anyone who finds it, it's an unmistakable, personal, very specific signal about who built this site. This is the kind of detail Section 25's "layered discovery" is describing: something you only find if you actually explore.

Keep this strictly optional in scope/budget — cut first if time is tight. It should never affect body-text contrast enough to hurt readability; if legibility suffers in that mode, don't ship it.

---

# 16. TYPOGRAPHY

Clean modern sans-serif as the body/heading workhorse — Geist, Inter, or Manrope — but not on its own; that pairing alone is what most "modern minimal dev portfolio" sites already default to.

Add one **bitmap/pixel typeface** as a small, disciplined accent — used only for: archive numbers, status tags (`RESEARCHING`, `COMPLETED`), and the Ledger. Not for body copy, not for headings, not for anything that needs to be read at length — bitmap fonts get fatiguing fast. Think arcade-scoreboard digits: small, sparing, unmistakable. This single move does more for "retro + personal" than any texture choice, because typography is the thing people register even when they can't articulate why a site feels distinct.

Dramatic scale contrast stays: oversized headings (`FIELD HISTORY`), very small metadata (`RECORD / 004`, now optionally in the bitmap accent face).

---

# 17. LAYOUT

Editorial grid, not centered-everything: asymmetric layouts, large whitespace, offset elements, overlapping images, strong vertical rhythm — but disciplined, never chaotic.

---

# 18. TEXTURE — 1-BIT RETRO DITHER (revised)

Drop generic photographic halftone as the default. Use **1-bit ordered dithering** — the coarse, blocky, pixel-grid pattern produced by old low-color-depth displays and devices (the Game Boy Camera is the clearest real reference point: monochrome, dithered, unmistakably game-hardware-coded). This is a specific, technical, citable choice — you can point to exactly what algorithm/era it's from — rather than a vague "grainy editorial" mood.

Practical notes:
- Run portrait and project images through an actual ordered-dither (Bayer matrix) or Floyd–Steinberg filter, not a soft halftone gradient. The result should look slightly blocky at close range — that's correct, don't smooth it.
- Keep resolution/dither-cell size consistent site-wide so it reads as one system, not a random filter.
- Still applied as *material to specific elements* (portrait, project thumbnails, certain image treatments) — never as blanket background wallpaper.
- Grain, contour lines, and technical marks stay in the toolkit for non-photographic elements (diagrams, the field mark), but the dither itself is the signature texture now, and it should be unmistakably retro-digital rather than print-editorial.

---

# 19. THE SCAN INTERACTION — DITHER RESOLVE

On opening a project, idea, or certificate, the image can briefly resolve from a coarse, low-resolution dither pattern into its finer final version (~200–400ms) — like an old low-bandwidth device rendering a photo, rather than a generic fade. Text content still appears via the existing `01 — DOCUMENT FOUND` archival-inspection cue. This stays an *archival inspection with a retro-technical texture*, not a hacker terminal — still no "INITIALIZING," "ACCESS GRANTED," "BOOTING."

---

# 20. TRANSITIONS & MICRO-INTERACTIONS

Page transitions: brief monochrome flash, archive number updates, next page appears. Fast — never delay navigation.

Micro-interactions: index numbers shift slightly on hover, dither subtly changes on image hover, link arrows shift (`OPEN ↗`), certificate borders darken slightly, field mark dots reorganize. Reward exploration; never demand it.

---

# 21. MOBILE (only what differs from desktop)

- BUILT's left/right index-explorer becomes a horizontal swipeable archive selector.
- LAB becomes a single vertical scroll of archive records.
- FIELD HISTORY becomes a simple vertical timeline.
- The Ledger collapses to a thin single-line bar.
- Everything else — typography scale contrast, field mark, cross-references, scan interaction — carries over unchanged. Don't redesign mobile as a separate system; compact the same one.

---

# 22. TECHNICAL GUARDRAILS (new)

A software developer's portfolio is itself evidence of craft — these aren't nice-to-haves:

- **Motion:** respect `prefers-reduced-motion`; every animation (field mark, scan effect, page transitions) needs a reduced/instant fallback.
- **Contrast:** body text and metadata must meet WCAG AA contrast even at small sizes — easy to violate with light-gray-on-off-white editorial styling.
- **Performance:** target Lighthouse 90+ across the board; lazy-load archive images; keep the dither/halftone treatments as lightweight SVG/CSS filters where possible, not large pre-rendered image assets.
- **Keyboard/screen reader:** archive-explorer (Section 09) and modals (Sections 08, 05) must be fully keyboard-navigable with proper focus trapping and ARIA labeling — an "archive" that only works with a mouse undercuts the premise.
- **SEO:** each BUILT/LAB/FIELD HISTORY entry gets its own real URL and meta description, not just a client-side route — so individual projects are actually discoverable and linkable.

---

# 23. WHAT NOT TO DO (unchanged, still correct)

No neon, gradients, glassmorphism, excessive rounded cards, generic developer illustrations, fake terminal windows, fake GitHub UI, excessive 3D/particles/parallax, giant cursor, fake statistics/testimonials/achievements, generic "passionate developer" copy, stock SaaS illustrations, excessive animation. Should never read as an AI-generated template.

Retro-specific additions — easy to overdo, so draw the line here: no CRT screen-border overlay wrapping the whole viewport, no screen-glitch/VHS-tracking effects, no autoplaying chiptune audio (any sound must be opt-in and off by default), no pixel-art illustration used decoratively outside the sprite/dither system, no "insert coin" or games-culture one-liners in copy. The retro reference should live entirely in *texture and typography* (the dither method, the bitmap accent, the sprite field mark) — never in tone of voice or literal game UI tropes. The moment it looks like a game website instead of a developer's archive, pull it back.

---

# 24. DESIGN PHILOSOPHY

**The content is the artifact. The design documents it.**

A project is the artifact — the portfolio documents it. An idea is a hypothesis — the portfolio documents the hypothesis. An experience is a historical record — the portfolio documents the record. A certification is evidence — the portfolio documents the evidence. And now, explicitly: **the connections between all of these are also part of the record** — which is what Section 03 makes real.

---

# 25. FINAL DIRECTION

Quiet, intelligent, editorial, technical, monochrome, tactile, personal, slightly experimental. Simple from a distance. On exploration, reveals: archive numbers, field marks, technical metadata, cross-referenced relationships, experiment logs, subtle dither, contour lines, document transitions, evolving ideas.

It should never announce "look how creative my website is." It should quietly say: *"I build things, I investigate problems, and I document what I learn — and you can trace how one led to the other."*