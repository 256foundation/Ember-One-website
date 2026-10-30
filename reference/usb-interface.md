# USB Interface

The EmberOne/00 carries an RP2040. That chip runs
[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw).
The mining firmware is separate. It runs on the control board. See
[Run with Mujina](/howto/run-with-mujina).

## Identity

The device enumerates as USB VID:PID `1209:256f`, allocated through
[pid.codes](https://pid.codes). The firmware source sets the
manufacturer string to `256F` and the product string to
`EmberOne00`.

`bcdDevice` is set to `0x0500`. The firmware comment defines that
value as hardware revision 5, firmware 0.0. The major number is the
hardware revision. The firmware version restarts at 0.0 for each
hardware revision. The commit that set the constant describes it as
v5.0.0 for hardware revision 5.

The serial number is a hash of the RP2040 flash chip's unique ID.

## Two serial interfaces

The firmware brings up two USB serial interfaces.

- The first is the control interface: I2C, GPIO, ADC, and LED.
- The second is the data interface. It passes UART through to the
  ASICs. The host baud rate is mirrored on the UART.

Packet layouts for the control interface are in the firmware
repository's README. This page does not copy them.

## License

The firmware repository's `LICENSE` file is GPL-3.0. Its
`Cargo.toml` says `MIT`. Which one to state is an [open
question](/community#license).

## See also

- [Specifications](/reference/specifications)
- [Run with Mujina](/howto/run-with-mujina)
