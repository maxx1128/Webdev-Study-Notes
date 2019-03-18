---
group: frontend
layout: post

title: Hardboiled Web Design
descr: Design and front-end development for the hardboiled coders

resources:
  - title: Hardboiled Web Design
    author: Andy Clarke
    link: https://stuffandnonsense.co.uk/buy/hardboiledwebdesign
    publisher: Smashing Magazine
---

### Progressive Enhancement
* Build for least capable devices first, and enhance only for those with more capabilities.
* Wide support first, new support sparingly
* Use prefixes when needed so new technologies don't go to waste
* It's **okay** for designs to be *different* on different browsers
* [Modernizr](https://modernizr.com/) is a major tool for this.

### 3 Elements of Design Atmosphere
* Design Atmosphere is preserved on all different screen sizes and across most, if not all, components
* Should balance personality with readability
* Make sure to define your brand personality first, as they greatly influence the Design Atmosphere

1. Typography (responsive)
    * Large reflection of a designs personality
    * Make sure it's readable on all screen sizes
        * Decide on a min and max font size at certain breakpoints
        * Don't forget `line-height` and `letter-spacing` properties
2. Color Schemes and Tones
    * Should be main engines for personality, emotional reactions, and contrast
    * Communicate what a user can, can't, should, and shouldn't do
    * Show a set variety of different light and dark shades of each color to expand a limited palette (e.g. 10%, 25%, 50%, 75%, 90%)
    * Make sure colors contrast enough with backgrounds to be accessible
    * Color Palettes should aim to include:
        * **Main** - most common colors
        * **Secondary** - interaction or action colors
        * **Neutral** - for containers, borders, etc
        * **Accents** and Contrasts - for information, warning, success, and other similar elements
        * **Mono** - shades of white and black
3. Texture
    * Can create a sense of hierarchy in elements
    * Texture elements include:
        * Buttons
        * Borders
        * Shading
        * Box shapes
        * Backgrounds
        * Images

### Circles of Confusion
* Helps determine how important some elements are to a site's design and how to handle different experiences. The key is to *maintain a core experience, not a pixel-perfect one.*
* **Innermost Ring** - Must always be consistent
* **Middle Ring** - Important but not vital. Have backup styles that may differ in experience slightly
* **Outer Ring** - Non-vital elements we don't need backups for and can degrade gracefully. No serious backups needed, if at all.

### Pattern Library Tips
* Be as simple as possible
* Avoid unneeded elements and frameworks unless they're absolutely needed
* Focus more on Design Atmosphere
* Use Atomic Design Principles of atoms, modules, organisms, etc.
* Guidelines should inform the use of elements, not instruct, on the site's atmosphere and goals
