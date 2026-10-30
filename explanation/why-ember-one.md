# Why EMBER ONE

This page is the context behind Ember One: what the project is for,
and what it refuses to be.

## Mining chips ship without a reference design

Mining chips ship with no datasheets, no pinouts, and no way to buy
the chips on their own. To build on competitive silicon you buy a
full machine, remove the chips, and reverse-engineer how to talk
to them.

In other chip industries, manufacturers publish reference designs
so other people can build on the silicon. In Bitcoin ASIC mining,
the companies that make the chips also make the miners. They
publish nothing.

Ember One is the open answer at the hashboard layer: a reference
design anyone can build against, non-exclusively. Ember One and
Libre Board are reference designs, not products. The 256 Foundation
sells nothing.

We started them. Nobody owns them.

## Two ways the work gets done

There are two approaches. For chips from unwilling manufacturers,
the chips come off existing miners, the interface is
reverse-engineered, and the design is published anyway. For willing
manufacturers, they supply chips, and the reference-design work is
done with them.

EmberOne/00 takes the first path. It uses BM1362 chips from the
Antminer S19j Pro. The v6.1 design is drawn with twelve BM1362AC
parts, powered in series.

## Hashboard, not a whole miner

Ember One is only the hashboard. Its job is power delivery,
thermal design, and chips in series. [Libre
Board](https://libreboard.org) is the separate control board.
Ember One scales up. Libre Board scales down.

The mining firmware is [Mujina](https://mujina.org). See [Run with
Mujina](/howto/run-with-mujina).

## See also

- [Where Ember One Is Today](/explanation/status)
- [Specifications](/reference/specifications)
