# AGENTS.md

Guidance for AI agents and human contributors working on this
repository.

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution
workflow. This file covers the site's structure and editorial
rules.

## What this repository is

The source for [emberone.org](https://emberone.org), the
user-facing website of the Ember One open source hashboard. The
site is built with VitePress and deployed to GitHub Pages by
GitHub Actions. The board design lives at
<https://github.com/256foundation/emberone00-pcb>. The on-board
RP2040 firmware lives at
<https://github.com/256foundation/emberone-usbserial-fw>. The
mining firmware is [Mujina](https://mujina.org).

## Tech stack

- VitePress 1.x with the default theme. No plugins.
- Theme customization is CSS-only: `.vitepress/theme/custom.css`.
- Site config, nav, and sidebar: `.vitepress/config.mts`.
- Static assets in `public/`.
- `just` is the command runner. The deploy workflow is plumbing
  around it.

## Developing

```
just install    # npm install
just dev        # dev server with hot reload
just build      # static build to .vitepress/dist (honors DOCS_BASE)
just preview    # build, then serve the production build
just checks     # all checks; today that is the build
just ci         # what CI runs: npm ci + build
```

Always verify with `just checks` before committing. It fails on
dead internal links.

## Content organization: Diataxis

Pages follow [Diataxis](https://diataxis.fr). The sidebar mirrors
the structure:

- `howto/` — task pages for someone who already knows the field
- `reference/` — facts, for lookup
- `explanation/` — context, read away from the work
- `index.md` and `community.md` sit outside the modes

There is no tutorial. Ember One has no lesson that runs without
the hardware. Do not add one that invents a procedure.

Keep each page in one mode. A how-to does not teach. A reference
does not instruct. An explanation contains no steps.

The Mujina how-to on this site is a pointer to mujina.org. Do not
expand it into flashing steps unless a verified procedure exists
in the design repos.

## Content conventions

- State only what is in the design repositories or already written
  on this site from those sources. If a fact is unsettled, leave a
  visible warning whose first line is `[TBD: confirm with …]`.
  Do not pick a side inside the placeholder.
- The editorial voice is institutional. The site names no
  individual as its face or maintainer. A TBD line may name the
  person who has to confirm the fact.
- The site asks for no donations. "Supporting this work" links to
  the 256 Foundation and stops there.
- Status is plain declaratives, a "current as of" date, and no
  promised dates.
- The words "honest" and "honestly" do not appear in site copy.
- Spell the project "EMBER ONE" in the hero, the nav title, the
  site and social title, and any heading. Running prose keeps
  "Ember One". Spell the board "EmberOne/00".
- Never say Mujina was "ported" to the board. A driver for the
  board is added to Mujina.
- When a page mentions Telehash, say the stack demonstrated
  working end-to-end at the Foundation's own event. Never say
  "deployed".
- Ember One and Libre Board are reference designs, not products.
  The 256 Foundation sells nothing. Say that in those words when
  the question of buying comes up.
- Do not say the Foundation owns the design. The line is "We
  started them. Nobody owns them."
- The hardware license is CERN-OHL-S-2.0. Do not state a firmware
  license while the USB-serial TBD is open.
- Do not add a roadmap, a grant cycle, or a list of future ASICs.
- A Bitaxe comparison stays short and respectful, and it belongs
  on the why page. Disclose that Bitaxe is earlier work by Skot,
  Ember One's lead maintainer. Do not make that person the face
  of the site, and do not rank the projects.
- Register: plain technical English, like a good man page. Short
  verbs. No metaphor. One assertion per sentence.
- The hero name and the nav-bar site title are Space Mono Bold
  (700), self-hosted. Do not apply that face to body text, and do
  not load it from a font CDN. Everything else stays Inter. Do not
  add a logo file that pretends to be an official mark. The
  favicon and social card are drafts for review.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main`.
`DOCS_BASE` is `/` for `256foundation/Ember-One-website` and
`/<repo-name>/` for any other repository, including forks. The
CNAME for emberone.org is emitted only for the production
repository. The committed `CNAME` file stays in the tree.

Do not merge to `main`, and do not change Pages settings, as part
of ordinary content work. Go-live is documented in the README.
