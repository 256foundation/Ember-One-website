# Design Files

The EmberOne/00 design lives in
[emberone00-pcb](https://github.com/256foundation/emberone00-pcb).
The hardware license is
[CERN-OHL-S-2.0](https://github.com/256foundation/emberone00-pcb/blob/v6.1/LICENSE).

## Which files to link

This site links the [`v6.1`
branch](https://github.com/256foundation/emberone00-pcb/tree/v6.1).
v6.1 is the latest revision of EmberOne/00. The link stays on this
branch until the revision is verified and released.

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

The v6.1 README links to `assembly.md`. That file is not on the
branch. Adding assembly documentation for rev6.1 is tracked in
[issue #60](https://github.com/256foundation/emberone00-pcb/issues/60).

## Manufacturing outputs

Pre-generated manufacturing files are no longer provided. Users
generate manufacturing outputs from the design in
[KiCad](https://www.kicad.org) to meet their chosen PCB
manufacturer's specifications.

## USB-serial firmware

The RP2040 firmware is a separate repository:
[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw).
It is licensed under [GNU GPLv3](/community#license).
See [USB interface](/reference/usb-interface).

## See also

- [Specifications](/reference/specifications)
- [Revisions](/reference/revisions)
