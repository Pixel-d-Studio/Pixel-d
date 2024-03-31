import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Rolinked',
  description: 'Coming Soon.',
  themeConfig: {
    logo: './public/fav.ico',
    srcdir: './public',
    nav: [
      { text: 'Info', link: '/Info' },

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
          // ...
        ],
      },
    ],
  },
});
