# Custom Properties

CSS Custom Properties are basically **variables you can use in normal CSS.** Unlike Sass variables, you don't need to run it through a compiler. It's part of the standard CSS.

## Syntax

```css
// Where you can define base property values
:root { --background-color: #eee; }

.standard-background {
  // Use "var()" to retrieve a value
  background-color: var(--background-color);
}

.standard-background.invert {
  // Can change values in other selectors
  --background-color: #000;

  background-color: var(--background-color);
}
```

## Advantages

* **You can change their values with JS without needing to reload the page.** You can also use JS logic to add more complexity and functionalty to how colors are set.
* Values can be overriden in the CSS Cascade.
  * This effect cascades to all uses of it in child elements.
  * You can make custom properties for colors change when used in child elements of a certain class. Good for CSS Themes!
  * You can change font size values for different screen sizes.
* Can be locally or globally scoped.

## Limits

* They can only be used as values. Sass variables could be used for class names or mixin values. Custom _properties_ are limit to values for _properties._ As such, these can only be set in selectors or `:root`.
  * However they can be used as part of shorthands or with `calc()`.
* They're virtually always static.

> I strongly recommend using preprocessors for global (static) variables. This not only ensures that they are always static, but it visually denotes them within the code. This can make CSS a whole lot more readable and easier to maintain.

## Tips for Custom Properties

### Limit to Local Use

Custom properties are best used for more dynamic values that change in different conditions. For example, we may want a slight variation on button sizes on different screen widths. This can be handled with a combination of custom properties and preprocessor variables.

```css
$button-sml: 1em;
$button-med: 1.5em;
$button-lrg: 2em;

.btn { --button-size: #{$button-sml}; }

@media screen and (min-width: 600px) {
  .btn-med { --button-size: #{$button-med}; }
  .btn-lrg { --button-size: #{$button-lrg}; }
}

.btn { font-size: var(--button-size); }
```

This gives all buttons a base font-size, and adjusts the font-size value for larger ones on larger screens. All in a locally scoped custom property. **It follows a rule of static global variables and dynamic local variables.**

### Change the Value, Not the Variable

Another rule: **don't give one property multiple custom properties.** If you need to change a value on something like a breakpoint, do it with a dynamic, local custom property.

```css
.example {
  // Custom Property Values
  --example-font-size: 1.2em;

  @media screen and (min-width: 800px) {
    --example-font-size: 2em;
  }

  // Styling
  font-size: var(--example-font-size);
}
```

### Responsive Design

If only a value changes based on screen size, use a custom variable. Best for simpler responsive design work.

## Resources

* [A Strategy Guide To CSS Custom Properties](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
* [It's Time To Start Using CSS Custom Properties](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)
