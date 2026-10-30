# Revisions

Named revisions of EmberOne/00 in
[emberone00-pcb](https://github.com/256foundation/emberone00-pcb).
Dates below are the dates of the branch, the release, or the
commits that introduce the change.

::: warning Open question
`[TBD: confirm with Skot - is rev 6.1 the current board]`

The table lists the revisions the repository records. It does not,
by itself, decide which row this site should call current. v6.1 is
the newest named revision. The only GitHub Release is v3.
:::

## Recorded revisions

| Rev | When | What the repository records |
| --- | --- | --- |
| [v1](https://github.com/256foundation/emberone00-pcb/tree/v1) | October 2024 | Earliest named branch. Voltage-regulator test PCBs. |
| [v2](https://github.com/256foundation/emberone00-pcb/tree/v2) | February 2025 | First full hashboard. |
| [v3](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release) | 2025-04-30 | The only GitHub Release. Release notes: confirmed working on hardware; 12–24 V input at 100 W; 2 TH/s at 500 MHz and 3.4 V on test firmware. Cool the ASICs and MOSFETs Q1–Q4. |
| [v4](https://github.com/256foundation/emberone00-pcb/tree/v4) | 2025 | Reverse-polarity protection, a USB TVS diode, and RP2040 BOOT and RESET buttons. |
| [v5](https://github.com/256foundation/emberone00-pcb/tree/v5) | September 2025 | TPS546D24S regulator. Optional accessory connector. BOM, interactive BOM, and gerbers are on this branch. |
| [v6](https://github.com/256foundation/emberone00-pcb/tree/v6) | February 2026 | TPS61041 boost set up for 6 V VDDIO. RP2040 SWD moved to a 3-pin header. Project files renamed to `emberone00`. |
| [v6.1](https://github.com/256foundation/emberone00-pcb/tree/v6.1) | March 2026 | 3.3 V supervisor, PGOOD divider, and button TVS diodes, in commits that name [issue #54](https://github.com/256foundation/emberone00-pcb/issues/54), [#56](https://github.com/256foundation/emberone00-pcb/issues/56), and [#58](https://github.com/256foundation/emberone00-pcb/issues/58). Those three issues are still open. KiCad 10. New render. Last commit 2026-03-21. |

A branch `v4.1` and tags `v4.1-RC`, `v5-RC`, `v5-RC2`, and `v5-RC3`
also exist, along with earlier `*_pcb_order` tags. None of those is
a GitHub Release. This table does not give them their own change
list.

## What is not current

`master` does not point at v6.1. Its latest commit as of this page
is 2025-09-12. The README on `master` still says 12–24 V input, and
still says Mujina support is coming soon. Both statements are out
of date. Mujina mainline already has an EmberOne/00 driver. See
[Run with Mujina](/howto/run-with-mujina).

The input range printed on v6.1, and whether to publish a hashrate
at all, are open. See
[Specifications](/reference/specifications).

## See also

- [Design files](/reference/design-files)
- [Where Ember One Is Today](/explanation/status)
