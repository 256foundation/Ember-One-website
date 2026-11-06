# Contributing to emberone.org

This repository is the source of [emberone.org](https://emberone.org).
Pull requests are welcome. Most changes here are small: a wording
fix, a corrected fact, a removed placeholder once a question is
answered. Those need no discussion. If the change is obviously
correct and self-contained, open the pull request.

## Small edits, from the site itself

Every page ends with an "Edit this page on GitHub" link. It opens
the page's markdown in GitHub's web editor and offers a pull
request. Use it for typos, wording, and single-page corrections.

## Larger changes, locally

For a new page, a reorganization, or anything touching several
files, open an issue here first. Then work from a clone. The
[README](README.md) covers setup. Two rules:

- Read [AGENTS.md](AGENTS.md) before writing. Contributions are
  reviewed against it.
- Run `just checks` before you open the pull request. It builds
  the site and fails on dead internal links.

## Open questions

A page may contain a warning that starts with `[TBD: …]`. That
block is a question for the maintainers, not a fact. Do not delete
it, and do not replace it with a guess. Remove it only when the
answer is confirmed, and put the confirmed fact in its place.

## Commits

Make each commit one logical change. Messages follow [conventional
commits](https://www.conventionalcommits.org/), with the subject
in imperative mood and the body explaining what and why, wrapped
at 72 characters.

Common types here: `feat` for new pages or sections, `fix` for
factual corrections, `style` for wording, `chore` for build and
deploy plumbing.

## Pull requests

Rebase on the latest `main`, run `just checks`, and give the pull
request a conventional-commit title. If the work is unfinished and
you want early feedback, open the pull request as a draft.
