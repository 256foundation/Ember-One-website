# Where EMBER ONE Is Today

Ember One is a published reference design. Boards have been built
and have run real hashrate. This page says what is in hand, what
is not, and how to decide whether to use the files.

::: info Current as of November 4, 2026
This page tracks a moving project. [Follow the
work](#follow-the-work) lists where change shows up.
:::

## What exists

The EmberOne/00 repository records revisions from v1 through v6.1.
The latest revision is v6.1. This site describes those files. See
[Revisions](/reference/revisions).

Boards have been fabricated, brought up, and run real hashrate
against a real pool. At Telehash #2 (May 5, 2025) an early board
hashed live to an early Hydrapool instance. At Telehash #3
(January 21, 2026) Ember One hashboards, driven by Libre Board and
running Mujina, mined into a self-hosted Hydrapool. The full stack
demonstrated working end-to-end at the Foundation's own event.

Initial support for EmberOne/00 is in Mujina. Further development
and optimization are ongoing. See [Run with
Mujina](/howto/run-with-mujina).

## Validation

::: warning Open question
`[TBD: confirm with Skot and Tyler - validation status wording]`

The Canon says no revision has been through a validation campaign,
and that the Foundation does not encourage production. A September
2025 newsletter called v4 production-ready. This page does not
choose between those wordings. The sentence above, that boards have
run real hashrate, stands either way.
:::

## What does not exist yet

- A GitHub Release newer than
  [v3](https://github.com/256foundation/emberone00-pcb/releases/tag/v3-release)
  (2025-04-30). Later revisions are branches.
- A measured hashrate for revision 6.1. The theoretical nominal
  hashrate is 3.6 TH/s. It still needs verification on rev6.1. See
  [Hashrate](/reference/specifications#hashrate).
- A build guide for the v6.1 design. `assembly.md` is on the v3
  release and on `master`. It is not on v6.1. This site does not
  reprint it.
- Boards for sale from the 256 Foundation. The Foundation does not
  manufacture or sell Ember One.

## Is EMBER ONE for you yet?

**Read or build on the design: the files are published.** Start
with [Design files](/reference/design-files) and
[Specifications](/reference/specifications). Review the
[validation status](#validation) before using the files.

**Buy a board: no.** The 256 Foundation does not manufacture or
sell boards. This site is not a catalog, and it names no seller.

**Run the firmware:** use [Mujina](/howto/run-with-mujina). This
site has no Ember One procedure of its own.

## Follow the work

- [emberone00-pcb issues](https://github.com/256foundation/emberone00-pcb/issues)
- [Ember One on the forum](https://forum.256foundation.org/c/ember-one/5)
- [Community](/community), including the Foundation's Telegram group
  chat

## See also

- [Why Ember One](/explanation/why-ember-one)
- [Revisions](/reference/revisions)
