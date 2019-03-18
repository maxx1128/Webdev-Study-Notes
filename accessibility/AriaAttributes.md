# ARIA and Other Attributes

ARIA attributes help add extra meaning to HTML elements in case their semantic meaning isn't enough to convey meaning to users. HTML5 usually gives a good amount of meaning to basic elements, but also may not be enough.

#### Descriptive ARIA

* `aria-label` - Has a string. A description for the element that is read out instead of it's content. Therefore these should not be used as a supplement or "hint" that goes with the element's content, since it will wind up replacing it!
* `aria-expanded` - Has a boolean value. Tells if a connected menu or popup is expanded or not.
* `aria-required` - Has a boolean value. Conveys if an input must be filled out.
* `aria-expanded` - Has a boolean value. Convey if an attached or nested element, such as a menu, is currently expanded or not.
* `aria-haspopup` - Has a boolean value. Only use to convey that an element has a corresponding popup element, such as a menu or (maybe) a modal. Best when paired with `aria-expanded`.
* `aria-describedby` - Has a string that matches the ID of another element. This other element has text which describes the current element. This attribute may have the ID of a paragraph tag describing its purpose. Most useful when the description can't be placed close to the element in the DOM.
* `aria-labellededby` - Same as `aria-describedby` but much shorter. While `describedby` is often a more detailed paragraph, `labellededby` is often a header and a concise definition of only a few words (such as a header). Most useful when the description can't be placed close to the element in the DOM, otherwise the native `label` element should work.
* `aria-valuemin` - Specify an element's maximum possible value (such as for a progress bar)
* `aria-valuemax` - Specify an element's minumum possible value
* `aria-valuenow` - Specifiy an element's current held value

#### ARIA States

* `aria-disabled` - If the basic HTML `disabled` attribute doesn't work with an element (for example it would work with `button`), this has a boolean value to convey if its disabled or not.

### Aria for updates

`aria-live` controls how changes to the related element will be announced to the user. Should only be used on elements that require the user's attention, such as contents in streams of content.

* `aria-live="off"` - an area isn’t live at the moment and shouldn’t give updates
* `aria-live="polite"` - an area will give an update during the next available time, like when a user is done typing
* `aria-live="assertive"` - will announce updates immediately. Only use it for real important things, like errors.

### Non-ARIA attributes

* `role` - Desribes the basic purpose or function of an element. This isn't needed with proper semantic HTML5 tags. For example, a `button` element doesn't need a `role="button"` attribute since that would be redundant. But if there's no semantic tag for an element, adding a `role` attribute will help convey its meaning.
* `title` - Gives an element a basic "label" which is heard by screen readers and appears in a tooltip on hover. _Due to inconsistent and unreliable screen reader interpretation and support, it is best avoided._ It's more reliable to use extra text (possibly hidden except for screen readers) or `aria-label`.
* `alt` - Has a string, used on image elements to describe the image for users who can't see it.
  * It doesn't need to start with "Photo of a ..." since the screen reader already announces it's a graphic.
  * Images inside links should use the alt text to concisely tell users what the link does or where it goes.

## Resources

* [Uncanny A11y](http://adrianroselli.com/2019/02/uncanny-a11y.html)
* [Title attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#Accessibility_concerns)
