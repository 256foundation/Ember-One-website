# Specifications

Figures for the EmberOne/00 design files on the `v6.1` branch.
The nominal hashrate remains unverified on this revision.

::: info Current as of November 4, 2026
Describes the latest revision, on the [`v6.1`
branch](https://github.com/256foundation/emberone00-pcb/tree/v6.1).
The default branch, `master`, is older. See [Design
files](/reference/design-files).
:::

## EmberOne/00

| Item | Value |
| --- | --- |
| Power class | 100 W |
| Input voltage | 12–16 V DC. The regulator's maximum power input is 16 V. See [Input voltage](#input-voltage). |
| ASICs | 12 × Bitmain BM1362, powered in series. The v6.1 footprints are BM1362AC. |
| ASIC variants | BM1362AA, AB, AC, and AD. The v6.1 README says AI and BD are untested, and that AJ and AK will not work. |
| Hashrate | 3.6 TH/s theoretical nominal. Not yet verified on rev6.1. See [Hashrate](#hashrate). |
| Board size | 125 × 125 mm, measured on the v6.1 board outline |
| Core regulator | [TPS546D24A](https://www.ti.com/product/TPS546D24A) |
| IO voltage | 6 V VDDIO. The v6.1 schematic labels a TPS61041 "VDDIO 6V Boost Regulator". |
| Board controller | RP2040, running [emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw) |
| Host interface | USB, to a separate control board |
| Temperature sensors | TMP1075 and TMP451 on the v6.1 schematic. The [Mujina driver](https://github.com/256foundation/mujina) reads both. |
| Cooling | Cooling for the ASICs and power MOSFETs must be supplied separately. The hashboard has no fan connector. [Libre Board](https://libreboard.org) is one control board option with fan connectors. |
| Design tool | [KiCad](https://www.kicad.org) |
| License | Hardware: CERN-OHL-S-2.0. USB-serial firmware: [GPLv3](/community#license). |

## Input voltage

The input range is **12–16 V DC**. The TPS546D24A core regulator
sets the 16 V ceiling. The [TI datasheet, section
6.3](https://www.ti.com/lit/ds/symlink/tps546d24a.pdf), specifies
16 V maximum for the power-stage input, PVIN. The separate
controller supply, AVIN, supports 18 V. That does not raise the
power-stage input limit.

The v6.1 README and silkscreen's 17 V upper limit need correction.
The correction is tracked in [issue
#50](https://github.com/256foundation/emberone00-pcb/issues/50).

## Hashrate

The theoretical nominal hashrate is **3.6 TH/s**.

::: warning Not yet verified on rev6.1
This is a theoretical figure, not a measured result for rev6.1.
Hardware verification on this revision is still required.
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
