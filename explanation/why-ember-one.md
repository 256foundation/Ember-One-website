# Why EMBER ONE

Ember One is an open-source hashboard for learning how a multi-chip
miner is designed. ASIC communication, power delivery, and thermal
design sit on one board. That board connects to a separate
controller, such as [Libre Board](https://libreboard.org).

The same split is how larger mining systems are built. The hashboard
is one board. The controller is another.

EmberOne/00 is the first board. It is a 100 W hashboard with twelve
BM1362 ASICs from the Antminer S19j Pro. The v6.1 design uses
BM1362AC footprints. Figures for power, size, and the rest are in
[Specifications](/reference/specifications).

## Power, data, and heat

These are three different problems. The design keeps them separate.

**Power.** The twelve ASICs are powered in series. That is the
electrical arrangement of the core supply. The onboard TPS546D24A
feeds that string from a 12–16 V input. The limits are in
[Specifications](/reference/specifications#input-voltage).

**Data.** The series string is not the data path. The chips are
linked to each other for command, clock, busy, and reset. The
v6.1 schematic names the reset net `CHAIN_RST_N`. Command, clock,
and busy are their own nets, separate from the power rails and
from that reset. One UART, TX and RX, leaves the ASIC group. An
onboard RP2040 passes that UART over USB to the control board,
along with a separate control interface for I2C, GPIO, ADC, and
the LED. See [USB interface](/reference/usb-interface).

**Heat.** The ASICs and the power MOSFETs both have to be cooled.
Ember One does not yet include a heatsink or a water block. For
development and testing, you design, adapt, or provide that
cooling yourself. The hashboard has no fan connector. See
[Cooling](/reference/specifications#cooling).

## The controller is a separate board

The hashboard does not run the miner. A control board does. Libre
Board is one such board. Mining firmware such as
[Mujina](https://mujina.org) runs there. See [Run with
Mujina](/howto/run-with-mujina).

The split is what you can work on. Hashboard and controller are
developed on their own. A change to one does not require a new
design of the other. You can study the chain of chips, the series
power, and the cooling on the hashboard while the controller stays
a USB host. You can work on the controller while the hashboard
stays the board it already is.

Ember One scales up. Libre Board scales down. Ember One is the
hashboard, so a larger machine is a larger hashboard: more chips,
more power, and the cooling that goes with them. Libre Board is
the controller, and it stays the smaller board that drives the
hashboard.

## Bitaxe

[Bitaxe](https://www.bitaxe.org) is an all-in-one board. The mining
chip and the controller are one design. Bitaxe is earlier work by
Skot, the lead maintainer of Ember One. Chip count is not the
distinction: a Bitaxe design can use more than one chip.

Ember One is the hashboard alone. It expects a separate
controller, which is the arrangement used in larger miners. The
pages here are about that hashboard.

## What the files are

Ember One and Libre Board are reference designs, not products. The
256 Foundation sells nothing.

We started them. Nobody owns them.

## See also

- [Specifications](/reference/specifications)
- [USB interface](/reference/usb-interface)
- [Where Ember One Is Today](/explanation/status)
