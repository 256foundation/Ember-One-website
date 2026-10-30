# Community and Contributing

Ember One is a [256 Foundation](https://256foundation.org) project.
The design is published. Review, bring-up notes, and corrections
happen in public.

## Where things happen

- **[Design repository][pcb]**: KiCad files, issues, and pull
  requests. The link goes to the `v6.1` branch. Whether that should
  be a release instead is [open](/reference/design-files#which-files-to-link).
- **[USB-serial firmware][fw]**: the RP2040 firmware.
- **[Forum][forum]**: the Ember One category.

[pcb]: https://github.com/256foundation/emberone00-pcb/tree/v6.1
[fw]: https://github.com/256foundation/emberone-usbserial-fw
[forum]: https://forum.256foundation.org/c/ember-one/5

::: warning Open question
`[TBD: confirm with Tyler - include Telegram among the community links]`

The previous emberone.org page linked `t.me/the256foundation` and
called it the forum. The forum is the category above.
[mujina.org](https://mujina.org/community) lists that Telegram group
as its own channel. This page leaves it out until the choice is
confirmed.
:::

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

::: warning Open question
`[TBD: confirm with Skot - usbserial firmware license]`

[emberone-usbserial-fw](https://github.com/256foundation/emberone-usbserial-fw)
ships a GPL-3.0 `LICENSE` file. Its `Cargo.toml` sets
`license = "MIT"`. This page does not pick one until that is
confirmed. The hardware license above is not part of this question.
:::
