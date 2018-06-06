# Different CSS Media Queries and When to use them

Know that many of these can be combined!

## By Viewport Size

* Best to use `em` values, since they accamodate browser zooming and scale accordingly.

### Minimum

* Any viewports **larger** than the set size will use these styles
* Can be for width or height
* Preferred over max-width, since it encourages mobile-first design

```
@media (min-width: 30em) { ... }
@media (min-height: 30em) { ... }
```

### Maximum

* Any viewports **larger** than the set size will use these styles
* Can be for width or height

```
@media (max-width: 30em) { ... }
@media (max-height: 30em) { ... }
```

### Aspect Ratio

* Works on screens with a specific ratio between the viewport height and width

```
@media (aspect-ratio: 11/5) { ... }
  // Height of 10rem and width of 22rem
  // Also height of 22rem and width of 10rem
```

### Orientation

* For landscape or portrait modes
  - Landscape: the width is greater than or equal to the height
  - Portrait: the height is greater than or equal to the width
* May be paired with `screen` media query to be sage

```
@media screen and (orientation: landscape) {
  .layout { flex-direction: row; } // Horizontal layout for more horizontal screens
}

@media screen and (orientation: portrait) {
  .layout { flex-direction: column; } // Vertical layout for more vertical screens
}
```

## By Viewport Type

* There's many types of viewports to query by, but only four have enough support for confident usage.
* Note that these don't have parenthesis around them, like the size queries.
* Can be mixed with size queries

### Color

* For screens with color
* Can be for screens with any color capabilities, or specific bits per color component (way of measuring number of colors)

```
p { color: black } // Default, grayscale devices

@media (color) {
  p { color: red } // For devices with at least basic colors
}

@media (min-color: 8) {
  p { color: #24ba13; } // Devices with 8 bits per color component (larger color variety)
}
```

### Resolution

* For different display densities (DPI, DPCM, etc)
* Can be a specific DPI, or a minimum or maximum DPI
* Great for styling or layout for higher DPI devices

```
@media (resolution: 50dpi) { ... } // Only for devices with 50dpi

@media (min-resolution: 300dpi) {
  .hide-on-high-dpi { display: none } // Hides elements on high DPI devices
}

@media (max-resolution: 300dpi) {
  .hide-on-low-dpi { display: none } // Hides elements on low DPI devices
}
```

### Screen

* Targets typical screen devices, like phones and computers

```
@media screen { ... }
```

### Print

* Targets pages being printed
* Can be used for adding psuedo-elements to show shorter links, or even QR codes, in place of long links atop a printed page

```
@media print { ... }
```

### Speech

* Targets pages being used by screen readers. This isn't always reliable however, since browsers may not always share this info.
* Can help tell the browser how to read content

```
@media speech { ... }
```

### All

* Is usually the default for the Type media query.
* The cascade into other types of devices may create accidents or unintended effects, so `screen` may be a better option in many cases.

```
@media all { ... }
```

## Chaining Media Queries

You can use different logic for how CSS should apply all these queries.

### "And"

* Used with two different queries
* Tells the CSS that both queries (before and after the term) must evaluate to **true**
* Done by using the word "and" between queries

```
@media screen and (min-width: 30rem) { ... }
```

### "Or"

* Used with two different queries
* Tells the CSS that either one of the queries before or after must evauate to **true.** If one is false, the browser gets the CSS.
* Done by using a comma between queries

```
@media screen, (min-width: 30rem) { ... }
```

### "Not"

* Used with one query
* Tells the CSS that the query must be **false**
* Done by putting the word "not" before the query
* When used as part of an "and" or "or" query pair, "not" only applies to the one query it's used on

```
@media not screen { ... }
@media not screen and (min-width: 30rem) { ... } // Works if it's not a screen, AND the width is larger than 30rem
@media not screen, (min-width: 30rem) { ... } // Works if it's not a screen, OR the width is larger than 30rem
```

## @supports

* Targets pages in browsers that support specific features
* Great for progressive enhancement if you're designing for older browsers
* Use for CSS features that don't have enough widespread support
* Needs to check a property and value
* Older browsers that don't support `@supports` will just skip it. Usually older browsers with less feature support anyway.

```
.layout {
  display: block;
}

@supports (display: grid) {
  .layout {
    display: grid;
  }
}
```

-----

## References

1. [Designing for Inclusion with Media Queries](https://noti.st/ericwbailey/QxdLmO/slides)
