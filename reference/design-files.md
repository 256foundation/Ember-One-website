# Design Files

The EmberOne/00 design lives in
[emberone00-pcb](https://github.com/256foundation/emberone00-pcb).
The hardware license is
[CERN-OHL-S-2.0](https://github.com/256foundation/emberone00-pcb/blob/v6.1/LICENSE).

## Which files to link

::: warning Open question
`[TBD: confirm with Skot - link the v6.1 branch or a future release]`

This site links the [`v6.1`
branch](https://github.com/256foundation/emberone00-pcb/tree/v6.1),
because that is where the files these pages describe are. The only
GitHub Release is
[v3](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release)
(2025-04-30). Confirm whether the link should stay on the branch or
wait for a release tag.
:::

The default branch is `master`. It is not v6.1. Its README still
says 12–24 V input and that Mujina support is coming soon. Use the
`v6.1` link above when you want the files this site describes.

## On the v6.1 branch

- KiCad project `emberone00` (`emberone00.kicad_pro`,
  `emberone00.kicad_sch`, `emberone00.kicad_pcb`)
- `3d/`, STEP models
- `doc/render.png`, the render used on the home page
- `artwork/emberone_logo.png`, a small silkscreen mark. This site
  does not use it as a logo.
- `webench/`

The v6.1 branch has no `Manufacturing Files/` directory and no
`assembly.md`.

The v6.1 README links to `assembly.md`. That file is not on the
branch. `assembly.md` is on the v3 release and on `master`. It is a
note from that earlier design. This site does not turn it into a
build guide.

## Manufacturing outputs

`Manufacturing Files/` (BOM CSV, interactive BOM, and gerbers) is on
the [`v5`](https://github.com/256foundation/emberone00-pcb/tree/v5)
branch and on
[`master`](https://github.com/256foundation/emberone00-pcb/tree/master).
It is not on v6 or v6.1.

## USB-serial firmware

The RP2040 firmware is a separate repository:
[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw).
See [USB interface](/reference/usb-interface). Its license text and
its `Cargo.toml` disagree. See
[License](/community#license).

## See also

- [Specifications](/reference/specifications)
- [Revisions](/reference/revisions)
