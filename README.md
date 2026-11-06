# emberone.org

The source for [emberone.org](https://emberone.org), the website of
the Ember One open source Bitcoin mining hashboard. The site is
built with [VitePress](https://vitepress.dev) and deployed to
GitHub Pages. The board design lives at
<https://github.com/256foundation/emberone00-pcb>.

This branch replaces the previous Jekyll site. Git history keeps
that copy. The live site does not change until Pages is switched
to GitHub Actions and this work is merged. See [Deployment](#deployment).

## Run the site locally

You need Node.js and [just](https://just.systems/).

```
just install   # npm install
just dev       # dev server with hot reload
```

Run `just` with no arguments to list the other recipes. Run `just
checks` before you open a pull request. It builds the site and
fails on dead internal links.

`npm run dev` and `npm run build` are the same commands without
`just`.

## Where things are

- Pages are markdown, organized by [Diataxis](https://diataxis.fr)
  mode: `howto/`, `reference/`, `explanation/`. There is no
  `tutorial/` yet. `index.md` is the landing page. `community.md`
  sits outside the modes.
- Nav and sidebar: `.vitepress/config.mts`.
- Theme: CSS-only overrides in `.vitepress/theme/custom.css`.
- Images and other static assets: `public/`.

Open questions are left in the pages as `[TBD: …]` warnings. Do
not delete one unless the question is answered.

## Contributing

Pull requests are welcome. [CONTRIBUTING.md](CONTRIBUTING.md)
covers the workflow and commit messages. [AGENTS.md](AGENTS.md)
records the site's content conventions: the organization, the
prose register, and what a page may claim.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on push to
`main`. One workflow serves both cases. `DOCS_BASE` is `/` when
`GITHUB_REPOSITORY` is `256foundation/Ember-One-website`, and
`/<repo-name>/` otherwise. The CNAME `emberone.org` is written
into the built site only for that production repository. Forks do
not get a CNAME, so a fork preview cannot take the production
domain.

The committed `CNAME` file stays in the repository. The workflow
writes a second copy into the Pages artifact at build time.

GitHub Pages does not build previews of branches. To preview on
Pages, push the branch to a fork. The workflow then serves the
site at `https://<user>.github.io/Ember-One-website/`.

### Go-live

The repository still uses GitHub's built-in Pages build. This
branch does not change emberone.org.

Go-live order:

1. In the repository's Pages settings, set the source to GitHub
   Actions.
2. Merge this branch to `main`.

The workflow is not on `main` until the merge, so do the two steps
together. The merge push builds with base `/`, writes the CNAME
into the Pages artifact, and deploys.

Merging while Pages is still on the built-in Jekyll build would
publish this tree through Jekyll instead of the workflow. Leave
the built-in source in place until the moment of the switch.
