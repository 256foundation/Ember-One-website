# Community and Contributing

Ember One is a [256 Foundation](https://256foundation.org) project.
The design is published. Review, bring-up notes, and corrections
happen in public.

## Where things happen

GitHub holds the design work. The forum is the conversation around
that work. Telegram is the 256 Foundation's public group chat.

- **[Design repository][pcb]**: bug reports with reproducible
  technical detail, KiCad file issues, pull requests, and formal
  design reviews. The link stays on the `v6.1` branch until the
  revision is verified and released. See
  [Design files](/reference/design-files#which-files-to-link).
- **[USB-serial firmware][fw]**: the RP2040 firmware.
- **[Forum][forum-home]**, including the Ember One
  [category][ember-forum]. The category is for the conversation
  listed below.
- **[Telegram][telegram]**: the Foundation's public group chat.

[pcb]: https://github.com/256foundation/emberone00-pcb/tree/v6.1
[fw]: https://github.com/256foundation/emberone-usbserial-fw
[forum-home]: https://forum.256foundation.org
[ember-forum]: https://forum.256foundation.org/c/ember-one/5
[telegram]: https://t.me/the256foundation

## The Ember One forum category

Use the [category][ember-forum] for:

- **Build questions and assembly help.** Hand-building tips, sourcing
  components, and ASIC variant compatibility.
- **Hardware troubleshooting.** Debugging boards, thermal problems,
  and power-supply setups.
- **Testing and benchmarking.** Results, hashrate, and power draw.
- **Forks and derivatives.** A spin on the design, or a question
  about the form factor or a different ASIC.
- **Roadmap and future ASIC variants.** Which chips people want
  supported. A formal design proposal belongs as a GitHub issue.
- **Integration.** Pairing Ember One with Libre Board, Mujina, and
  the rest of the open mining stack.

## Contributing

You do not need a grant. The designs are published. Read them,
build on them, and say what is wrong with them. Hardware review,
bring-up experience, and BOM feedback are all useful.

Open an issue or a pull request on the [design
repository][pcb]. For the words on this site, use the edit link at
the bottom of a page, or the notes under [Contributing to this
site](#contributing-to-this-site).

## Contributing to this site

This site lives in its [own repository][site-repo] and takes pull
requests. The [contributing guide][site-contributing] covers the
workflow. Every page ends with an edit link.

[site-repo]: https://github.com/256foundation/Ember-One-website
[site-contributing]: https://github.com/256foundation/Ember-One-website/blob/main/CONTRIBUTING.md

## Supporting this work

Ember One is a project of the [256
Foundation](https://256foundation.org), which builds open tools for
Bitcoin mining across the stack: this hashboard, the Libre Board
control board, and Mujina firmware. Ember One takes no donations of
its own. To support the work, support the Foundation.

## License

The EmberOne/00 hardware design is licensed
[CERN-OHL-S-2.0](https://github.com/256foundation/emberone00-pcb/blob/v6.1/LICENSE).

We started the work. Nobody owns it.

[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw)
is licensed under [GNU GPLv3](https://github.com/256foundation/emberone-usbserial-fw/blob/main/LICENSE).
Its Cargo package license is `GPL-3.0-only`.
