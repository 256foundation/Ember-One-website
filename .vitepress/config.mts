import { defineConfig } from 'vitepress'

// The deploy workflow sets DOCS_BASE so one config serves both a fork
// preview (served under /<repo-name>/) and production at emberone.org
// (served at /).
const base = process.env.DOCS_BASE || '/'

const title = 'EMBER ONE'
const description = 'Open source Bitcoin mining hashboard reference design'

export default defineConfig({
  title,
  description,

  base,
  cleanUrls: true,
  lastUpdated: true,

  srcExclude: ['README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'node_modules/**'],

  // Dev-server only: Vite blocks requests addressed to hostnames it
  // does not know. To review the dev server from another machine by
  // name, list the names in DEV_ALLOWED_HOSTS, comma separated:
  // DEV_ALLOWED_HOSTS=myhost just dev
  vite: {
    server: {
      allowedHosts: (process.env.DEV_ALLOWED_HOSTS || '')
        .split(',')
        .filter(Boolean)
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    // Social link previews. og:image requires an absolute URL, so it
    // points at production even in a fork preview. The card is a text
    // wordmark plus the v6.1 board render. It is a draft for review,
    // not an existing project logo.
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://emberone.org/og-card.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    // No nav logo. The title is set as text. See custom.css.

    // The docs are organized by Diataxis (https://diataxis.fr):
    // how-to guides, reference, explanation. There is no tutorial
    // yet: Ember One has no lesson that runs without the hardware.
    // Keep each page in one mode; link across modes instead of
    // mixing them.
    nav: [
      { text: 'How-to', link: '/howto/run-with-mujina' },
      { text: 'Reference', link: '/reference/specifications' },
      { text: 'Explanation', link: '/explanation/why-ember-one' },
      { text: 'Community', link: '/community' }
    ],

    sidebar: [
      {
        text: 'How-to Guides',
        items: [
          { text: 'Run with Mujina', link: '/howto/run-with-mujina' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Specifications', link: '/reference/specifications' },
          { text: 'Revisions', link: '/reference/revisions' },
          { text: 'Design Files', link: '/reference/design-files' },
          { text: 'USB Interface', link: '/reference/usb-interface' }
        ]
      },
      {
        text: 'Explanation',
        items: [
          { text: 'Why EMBER ONE', link: '/explanation/why-ember-one' },
          { text: 'Where EMBER ONE Is Today', link: '/explanation/status' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Community and Contributing', link: '/community' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/256foundation/emberone00-pcb/tree/v6.1'
      }
    ],

    footer: {
      message:
        'A 256 Foundation project. Hardware licensed CERN-OHL-S-2.0. ' +
        'This site is <a href="https://github.com/256foundation/Ember-One-website">open to contributions on GitHub</a>.',
      copyright:
        'Copyright Ember One contributors' +
        `<a class="foundation-mark" href="https://256foundation.org" aria-label="256 Foundation">` +
        `<img class="light-logo" src="${base}256-foundation-light.png" alt="">` +
        `<img class="dark-logo" src="${base}256-foundation-dark.png" alt=""></a>`
    },

    search: {
      provider: 'local'
    },

    outline: { level: [2, 3] },

    editLink: {
      pattern:
        'https://github.com/256foundation/Ember-One-website/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
