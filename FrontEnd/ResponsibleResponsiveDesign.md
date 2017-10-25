* Title: [Responsible Responsive Design](https://abookapart.com/products/responsible-responsive-design)
* Author: Scott Jehl
* Publisher: A Book Apart


## Intro

* The web is surprisingly fragile: growing audiences have weaker connections and rely more on mobile devices across the world. Websites' accessibility need to reflect this in several ways:
    * Usability: the UI is clear and accessible
    * Access: Works for all browsers and assistive technologies, or at least ones in your audience
    * Sustainability: Work for devices now and in the future
    * Performance: efficiency and speed for good user experience
* Sites should be made for unpredictable, often unfavorable viewing experiences, to ensure they're delivered properly to all users.


## Design

* Two main tenets in design: **usability and accessibility**
* **Breakpoints:** start making sites in a browser fast to find screen widths where content looks bad. Use this to add *major breakpoints,* which affect most or all of the site, and *minor breakpoints,* which are only for specific components.
* Design sites as a collection of separate modules that can work with each other
    * **Progressive Disclosure:** hiding portions of content on smaller screens for a better fit, and making it easy to toggle what's visible and what isn't.
    * For responsive tables, [Reflow](https://api.jquerymobile.com/table-reflow/) is a useful plugin for stacking table content on mobile.
    * Brad Frost's [awesome list of responsive patterns!](https://bradfrost.github.io/this-is-responsive/patterns.html)
* Also remember to design for touch-devices on smaller screens to:
    * Any mouse-centric design or functions, like hovering, should still work without a mouse. Don't make important content accessible only via hover.
    * Don't assume touch will be used, but design like it will be.
    * Any elements likely to be touched should be large enough fingers (57px) or thumbs (72px), and have enough white space around them.
    * Good solution: set up event listeners that wait for mouse and touch events. [Tappy.js](https://github.com/filamentgroup/tappy) and [FastClick](https://github.com/ftlabs/fastclick) both help.
* HTML is built to be more accessible, but careless CSS and JS that affects an element's visibility can disrupt this. Design must keep this kind of accessibility in mind.
    * **Progressive Enhancement:** Starting with meaningful HTML and layering unobtrusive CSS and JS to make the experience but still accessible.
    * CSS-only components are good since they're simple, lightweight, and still work for assistive devices (assuming no content is purposefully hidden).
    * Complex visuals can be made more accessible by starting with semantic HTML and generating a visualization using JS, so the basic markup makes the info accessible and meaningful to screen readers.
    * Grade each component by its accessibility, not the entire site.


## Detection

* Seeing the features a browser can and can't support, and providing a suitable web experience from those.
* Device specific detection is often risky, unreliable, and hard to scale gracefully to new browsers. It will only get riskier in the future so is best avoided as a detection focus. Detection should instead focus on:
    * **Features:** CSS properties, JS APIs, etc
    * **Constraints:** Viewport size, connectivity issues, etc
* Use CSS media queries to detect viewport size from a mobile-first approach: make the base CSS for mobile devices and apply media queries for larger screen sizes as needed.
* [Modernizr](https://modernizr.com/) is popular for detecting browser CSS and JS features so it's easy to use feature detection for including or excluding certain features.
* **@supports** also allows for feature detection in CSS without any JS, although it doesn't have 100% browser support (mainly with IE). However it will degrade gracefully and just be ignored by these browsers.

> Small note: position: fixed has limited support on some mobile browsers. Fixed-Fixed is one tool that can help detect this.

**Polyfill:** Process of emulating features on unsupported browsers. A more hacky, less involved version of this would be a *shim.* Recommended polyfills are:
* MatchMedia - Javascript media queries
* Respond.js - Makes IE 8 or older browsers understand CSS media queries

Testing sites on actual different devices is ideal, but using emulators like BrowserStack or some browser dev tools works too.


## Performance

Building websites with new media, without thought for slower networks, and for different sizes and browsers tends to inflate the code base.

* There should be a *minimal number of external files (CSS, JS, fonts, images) being requested via HTTP requests.* This is one of the most helpful actions to take.
* CSS is best loaded before the webpage load, and JS afterwards
* Browser network tools can help us track the # of network requests
* Optimize image files
* Minify and concatenate, or remove all unneeded white space, from text files.
* Compress text files with something like GZip, which shrinks their size between server and browser
* Configure for optimal cache, or browser's static, local version of files from a site

**Perceived Load Time** is how long it takes for a usable version of the page to load without necessarily loading all files
* Google PageSpeed Insights and WebPageTest are good speed testers

**Performance Budget:** a set of size metrics to abide by for files to stop performance from slowing too much. These can include max files sizes, HTTP requests
* Should be a priority from the project's start
* Good inspiration for one is looking at metrics of competing sites

Use a tool to automate as many of the above steps as possible, such as Grunt or Gulp.


## Delivery

**Serving HTML:** Try to only load critical content first, and load "nice to have" content after with JavaScript if the user wants it.
* Can be done with Conditional Loading or a pattern called [Ajax-Include](https://www.filamentgroup.com/lab/ajax-includes-modular-content.html) for lazy-loading (but this uses more HTTP requests).
    * Ajax Include can also work depending on certain media queries.
* If we need to move elements to different positions based on screen size AppendAround.js can do this.

**Serving CSS:** CSS should be served via the Head element to avoid the Flash of Unstyled Content (FOUC). There's several approaches:
* Serving all styles and media queries in a single file. It only has one HTTP request, but the large size can drag down load times.
* Create stylesheets based on media breakpoints and use media queries in the Head tag. Can lower load times based on screens, but many browsers may make the HTTP requests for each stylesheet in every size anyway.
* Put all CSS inline. Makes for a faster load time since there's no HTTP requests, but there can't be a cache. Best only for single-page sites.
* *Hybrid approach:* Inline only the **critical CSS**, or CSS for elements that appear above the fold so the page appears to load very fast. Can be done through top-down stylesheet organization, through automated tools, and/or a javascript function called LoadCSS.

**Serving Images:** Images always load asynchronously so they don't block page rendering, but often have the most weight on a page.
* CSS background images have HTTP requests. But you can use media queries to responsibly load smaller images for smaller screens. Inline data URIs can also get images without requests.
* *Compressive Images* are ones saved at twice their size at bad quality, and then scaled down. This way images fit a variety of sizes at good quality. Avoid multiple use cases of this on one page.
* Use the <picture> element with source and srcset elements to responsibly serve source images based on screen sizes and screen resolution. Not natively supported on many browsers, so use the polyfill Picturefill.
    * The sizes attribute can scale the image based on the viewport's width at certain screen sizes.

**Icon Fonts:** Great since they provide lots of different media that's easily referenced with only one HTTP request.
* Keep the character separate from text, likely use it through CSS psuedo-elements, so it degrades gracefully.
* Also watch for if they fail on certain mobile browsers. A Font Garde is a simple tool to hide them on unsupportive platforms.

**Fonts:** The FOUT for web fonts can be avoided by converting font CSS into a single data URI CSS file, and using LoadCSS to quickly load it.

**Javascript:** Javascript is another heavy asset, and it blocks page rendering while it's being downloaded.
* Get in the habit of slimming down your JS. Consider it a last resort for solving problems, question the use of 3rd-party libraries, or use a simple Javascript framework for lighter functionality (like Shoestring). If you must use jQuery, try a custom jQuery build.
* Inline critical parts of your Javascript in the Head to reduce load time. Don't put too much there as it can't be cached.
* Putting JavaScript at the page bottom means the content loads beforehand, but can raise issues of users interacting with your content without any JS.
* With Javascript files in the head tag, Most recent browsers let you use the attributes *defer*(load after other assets) or *async*(load while other assets are loading).
    * Async isn't supported on all mobile browsers, but defer can be a fallback.
    * Async can't control the order JS files are loaded in.
* Javascript can also be referenced dynamically in the head tag for focused references and little delays. The other created LoadJS as a reusable function to do this.

The author created Enhance.js to put all the above notes for delivery together for progressive enhancement in loading assets.



