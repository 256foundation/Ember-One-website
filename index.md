---
layout: home

hero:
  name: EMBER ONE
  text: Open source Bitcoin mining hashboard reference design
  tagline: >-
    Published PCB files, bill of materials, and interface, for anyone
    to build on.
  image:
    src: /emberone.webp
    alt: >-
      KiCad render of the EmberOne/00 board from the v6.1 design
      files. Not a photograph of a built board.
  actions:
    - theme: brand
      text: Specifications
      link: /reference/specifications
    - theme: alt
      text: Where it stands
      link: /explanation/status
    - theme: alt
      text: GitHub
      link: https://github.com/256foundation/emberone00-pcb/tree/v6.1

features:
  - title: A reference design, not a product
    details: >-
      The 256 Foundation publishes the design. It does not manufacture
      or sell boards.
    link: /explanation/why-ember-one
    linkText: Why Ember One exists
  - title: Only the hashboard
    details: >-
      EmberOne/00 hosts twelve BM1362 ASICs in series. A separate
      control board drives it over USB.
    link: /reference/specifications
    linkText: Specifications
  - title: Runs with Mujina
    details: >-
      Mujina mainline includes a driver for the EmberOne/00.
    link: /howto/run-with-mujina
    linkText: Firmware
  - title: Open hardware
    details: >-
      The KiCad design files are licensed CERN-OHL-S-2.0.
    link: /reference/design-files
    linkText: Design files
---

## What is EMBER ONE?

Ember One is an open-source reference design for a Bitcoin mining
hashboard. A hashboard is the circuit board that hosts ASIC chips
and turns electricity into hashrate. In other chip industries,
manufacturers publish reference designs that show how to use a chip.
Bitcoin ASIC makers publish none. Ember One publishes the PCB files,
the bill of materials, and the interface a control board uses to
drive the hashboard.

The first board, EmberOne/00, is a 100 W hashboard with twelve
Bitmain BM1362 ASICs powered in series. It is only the hashboard. A
separate USB-connected control board, such as [Libre
Board](https://libreboard.org), runs the firmware.

The picture above is the KiCad render shipped in the
[v6.1 design files](https://github.com/256foundation/emberone00-pcb/tree/v6.1).
It is not a photograph of a built board.

::: warning Open question
`[TBD: confirm with Skot - is rev 6.1 the current board]`

v6.1 is the newest named revision in the design repository. The last
commit on that branch is 2026-03-21. This site describes those files.
It does not claim v6.1 is the revision to present as the current
board until that is confirmed.
:::

## Find the project

- [Design files on GitHub](https://github.com/256foundation/emberone00-pcb/tree/v6.1),
  branch `v6.1`. Whether that branch link should stay is an [open
  question](/reference/design-files#which-files-to-link).
- [USB-serial firmware on GitHub](https://github.com/256foundation/emberone-usbserial-fw).
  This is the firmware on the board's RP2040. It is not the mining
  firmware.
- [Ember One on the 256 Foundation forum](https://forum.256foundation.org/c/ember-one/5)
- Sister projects: [Mujina](https://mujina.org),
  [Libre Board](https://libreboard.org)

::: warning Open question
`[TBD: confirm with Tyler - include Telegram among the community links]`

The previous emberone.org page linked `t.me/the256foundation` and
called that link the forum. The forum is the category above.
[mujina.org](https://mujina.org/community) lists the Telegram group
as its own channel. This site leaves the group out until that choice
is confirmed.
:::
