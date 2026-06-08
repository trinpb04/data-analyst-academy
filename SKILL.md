---
name: data-analyst-academy-design
description: Use this skill to generate well-branded interfaces and assets for Data Analyst Academy (the "Data Analyst Encyclopedia" learning platform), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick orientation
- **Product**: Data Analyst Encyclopedia — a self-paced platform to learn data
  analytics. Four views: **Atlas** (knowledge graph), **Paths** (roadmap timeline),
  **Lessons** (library), **Revise** (cheat sheets). Six color-coded modules.
- **Entry CSS**: link `styles.css`. Author against semantic aliases — `--text-strong`,
  `--text-body`, `--text-muted`, `--surface-page`, `--surface-card`, `--brand` (deep tech teal
  `#0E7C6F`), `--border`, and the module colors `--mod-business|excel|statistics|sql|python|powerbi`.
- **Type**: Inter (UI) + JetBrains Mono (code). **Icons**: Lucide (2px round stroke).
  **Category = color dots**, not emoji.
- **Components**: `window.DataAnalystAcademyDesignSystem_f0f875` — Button, IconButton,
  Badge, ModuleTag, Card, Avatar, Input, SegmentedTabs. Load `_ds_bundle.js`
  (relative to project root) in DS-card / starting-point HTML.
- **Voice**: Vietnamese prose + English technical terms; addresses the learner as
  "bạn" (you); English title-case headings. See `readme.md → Content Fundamentals`.

## Files
- `readme.md` — full brand, content, visual, and iconography guide + manifest.
- `tokens/` — colors, typography, spacing/radius/shadow/motion, fonts, base.
- `guidelines/` — foundation specimen cards.
- `components/` — reusable React primitives (`.jsx` + `.d.ts` + `.prompt.md`).
- `ui_kits/encyclopedia/` — full interactive product recreation to copy from.
- `assets/` — the "T.i" logo marks (light/dark).
