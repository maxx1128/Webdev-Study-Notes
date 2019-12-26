# Performance

## Why it Matters

Not all users will have access to high-data mobile plans, powerful WiFi, or broadband connections. This can be from high costs or lack of infrastructure. Web developers can often overlook this since we're so used to having strong web connectivity, and it'll bite them in the ass later.

This is why keeping your site from being too data-heavy is another part of retaining users and making the site accessible. It helps the site load fast even on bad connections. Keeping the number of pages users need to traverse for important tasks as low as possible can save users lots of data too (unless they make use of caching).

## Ways to Boost Performance

### Write Less Code

This seems obvious but is always worth writing - make sure all the code you need is truly necessary.

* Check if there's a simpler solution, such as native HTML instead of JavaScript. Even if its less sexy-looking, your users care a lot less than you think.
* Set up a performance budget to force you to prioritize features.
* Check dependencies' weight and use that as a factor when deciding if you want to add them.

### Lazy-load Images

Images are a huge data suck, and users may not even see them based on their scrolling or navigation. Only loading image assets when they appear on the screen can save a lot of data down the road. **Images are often a site's biggest performance drag, so lazy-loading and optimization (below) help immensely.**

### Minify and Uglify Assets

Minifying assets makes them physically smaller by removing unneeded spaces and line breaks. Uglifying changes the actual code to make it even smaller, such as using short, computer-generated variable names. Both make the assets near-impossible to read, so it should only be done when the assets are shipped to production.

Third-party JavaScript code can be big offenders here, since you often have less control over them and therefore may not be able to optimize them. So **avoiding third-party JavaScript on principle can help performance.**

Compressing files also helps if they're not too small (less than 1500 bytes), or are binary or image files. Gzip is usually a good compression choice.

Using WebP for image formats can also save a good chunk of data as well without a real loss in quality.

### Avoid Lots of Network Requests

More network requests means more time wasted and data downloaded. Especially if they're weighty additions not needed for each page but are loaded on every page anyway.

A potential big win here is not preloading or autoplaying videos. It avoids extra requests to download it, and data to play it, unless the user wants to watch it.

### Inline Critical CSS

If there's CSS you know will be used often, inlining them can lighten or remove requests for CSS files. It also makes your page appear to load a lot faster.The trade-off here is there styles can't be cached.

CSS should only be inlined if it meets at least one of these criteria:

1. It appears on most, if not all, pages of your site
2. It's important for front-page "above the fold" content

Another approach for high-priority asset loading is using browser hints like `<link rel="preload">` that loads them before other assets.

### Make it Work Without JavaScript

JavaScript is often the biggest bloat for a website. No JavaScript may remove some functionality, but the important thing is keeping the core functionality intact. For instance, a search should still work even if it can't give autocomplete suggestions. Users won't expect it to be perfect but it should still work.

### Avoiding Blocking Scripts

`<script>` tags stop the rendering of HTML until it's been read and executed. It's called a "blocking script" when this happens, and can be avoided by:

* Putting the script tag at the bottom of the HTML page
* [Add the `async` or `defer` attribute to the `<script>` tag](https://flaviocopes.com/javascript-async-defer/)
* Use JavaScript web workers to keep it off the main thread being run

### Use Service Workers for Offline Access

If your site has content someone would only need to download once before checking later, service workers can help a lot. Users can visit the site to download the initial page(s), then turn off their internet access. Visiting the site again while offline will still show the same info without needed to connect online again. Works well with content not often updated.

## Resources

* [I Used The Web For A Day On A 50 MB Budget](https://www.smashingmagazine.com/2019/07/web-on-50mb-budget/)
* [Getting Started with Web Performance](https://calibreapp.com/blog/get-started-with-performance)
