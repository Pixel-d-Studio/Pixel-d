---
layout: home

title: Pixel'D
titleTemplate: Pixel'D

hero:
  text: Pixel'D
  tagline: Upcoming Discord Bot Studio
  actions:
    - theme: brand
      text: Let's Go!
      link: /Info.md
    - theme: alt
      text: Our Bots!
      link: /bot.md
    - theme: alt
      text: Github
      link: https://github.com/orgs/rolinked
  image:
    src: /logo.png
    alt: Pixel'd
---
:root {
  --vp-home-hero-name-color: #ffffff; /* White text color */
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #333D79FF 30%, #007bff); /* Blue gradient */
  --vp-home-hero-image-filter: blur(20px); /* Reduced blur for sharper image */
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(30px); /* Adjust blur on larger screens */
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(40px); /* More blur on even larger screens (optional) */
  }
}
