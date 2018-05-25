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

### Orientation

## By Viewport Type

* There's many types of viewports to query by, but only four have enough support for confident usage.
* Note that these don't have parenthesis around them, like the size queries.
* Can be mixed with size queries

### Color

### Color-index

### Monochrome

### Resolution

### Grid?

### Scan?

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

-----

## References

1. [Designing for Inclusion with Media Queries](https://noti.st/ericwbailey/QxdLmO/slides)
