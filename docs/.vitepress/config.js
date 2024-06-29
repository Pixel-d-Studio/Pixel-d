import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'PixelD Studio',
  description: 'Upcoming Bot Studio',
  themeConfig: {
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/hns6mbPyAW' }],
    logo: './logo.png',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
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
});
