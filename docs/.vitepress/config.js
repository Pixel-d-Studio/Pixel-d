import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Rolinked',
  description: 'Simple and Fun! | Connecting Roblox to Discord.',
  themeConfig: {
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/hns6mbPyAW' },
    logo: './i.png',
    head: [['link', { rel: 'icon', href: '/i.png' }]],
    nav: [
      { text: 'Info', link: '/Info' },
      { text: 'Bot', link: '/bot' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Info', link: '/Info' },
          { text: 'Bot', link: '/bot' },
          // ...
        ],
      },
    ],
  },
  ],
});
