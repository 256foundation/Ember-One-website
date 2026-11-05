# Run with Mujina

Mining firmware for the EmberOne/00 is
[Mujina](https://mujina.org). This site does not publish a flashing
procedure or a bring-up procedure for Ember One. No such procedure
is in the design repository.

Initial support for EmberOne/00 is in Mujina. Further development
and optimization are ongoing.

Start from Mujina's own docs:

- [Your First Run](https://mujina.org/tutorial/first-run) runs the
  miner on a computer. It needs no mining hardware.
- The EmberOne/00 row of the [compatibility
  matrix](https://mujina.org/reference/hardware-compatibility) says
  where the driver lives. The driver is
  `mujina-miner/src/board/emberone00.rs` in the [Mujina
  repository](https://github.com/256foundation/mujina).

The hashboard's own RP2040 runs
[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw).
That firmware is the [USB interface](/reference/usb-interface). It
is not Mujina.
