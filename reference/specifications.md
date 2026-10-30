# Specifications

Figures for the EmberOne/00 design files on the `v6.1` branch.
Open questions are marked in place. This page does not fill them
in.

::: info Current as of October 2026
Describes the files on the [`v6.1`
branch](https://github.com/256foundation/emberone00-pcb/tree/v6.1).
The default branch, `master`, is older. See [Design
files](/reference/design-files).
:::

::: warning Open question
`[TBD: confirm with Skot - is rev 6.1 the current board]`

v6.1 is the newest named revision in `emberone00-pcb`. The last
commit on that branch is 2026-03-21. The only GitHub Release is
still [v3](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release)
(2025-04-30). Confirm that v6.1 is the revision this site should
present as current.
:::

## EmberOne/00

| Item | Value |
| --- | --- |
| Power class | 100 W |
| Input voltage | Open question. See below. |
| ASICs | 12 × Bitmain BM1362, powered in series. The v6.1 footprints are BM1362AC. |
| ASIC variants | BM1362AA, AB, AC, and AD. The v6.1 README says AI and BD are untested, and that AJ and AK will not work. |
| Hashrate | Open question. See below. This table states no figure. |
| Board size | 125 × 125 mm, measured on the v6.1 board outline |
| Core regulator | TPS546D24S |
| IO voltage | 6 V VDDIO. The v6.1 schematic labels a TPS61041 "VDDIO 6V Boost Regulator". |
| Board controller | RP2040, running [emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw) |
| Host interface | USB, to a separate control board |
| Temperature sensors | TMP1075 and TMP451 on the v6.1 schematic. The [Mujina driver](https://github.com/256foundation/mujina) reads both. |
| Cooling | The [v3 release notes](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release) say to cool the ASICs and the power MOSFETs Q1, Q2, Q3, and Q4. The v6.1 files do not label a fan connector. |
| Design tool | KiCad 10. The v6.1 board file is `generator_version` 10.0. The title block says rev v6.1, date 2026-03-20. |
| License | Hardware: CERN-OHL-S-2.0. USB-serial firmware: [open question](/community#license). |

## Input voltage

::: warning Open question
`[TBD: confirm with Skot - input voltage]`

The v6.1 README says "Wide 12-17VDC input voltage." The v6.1
silkscreen text is `100W`, `12-17`, `VDC`. [Issue
#50](https://github.com/256foundation/emberone00-pcb/issues/50) is
still open. Its title is "Change Silkscreen to indicate 12-18V
Input". A commit on 2025-09-11 changed an earlier silkscreen from
12-24 to 12-18. The `master` README still says 12–24 V, which is
also what the previous emberone.org page said. This page states no
input range until the choice is confirmed.
:::

## Hashrate

::: warning Open question
`[TBD: confirm with Skot - hashrate]`

The v6.1 README says the design should reach 3.6 TH/s at about
33 J/TH, and also "about 3.5 TH/s". Both lines say "should". The
[v3 release notes](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release)
report a measurement of 2 TH/s at 500 MHz and 3.4 V, on test
firmware. The design repository publishes no measured hashrate for
revision 6.1. This page states no hashrate until the choice is
confirmed.
:::

## Validation

What a revision's test status allows anyone to claim is unsettled.
The wording lives on [Where Ember One Is
Today](/explanation/status#validation). Boards have run real
hashrate. See that page for the record, and for the open question
beside it.

## See also

- [Revisions](/reference/revisions)
- [Design files](/reference/design-files)
- [USB interface](/reference/usb-interface)
- [Run with Mujina](/howto/run-with-mujina)
