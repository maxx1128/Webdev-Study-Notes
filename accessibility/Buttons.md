# Buttons

Buttons are a common and important element for user interaction. Keeping them accessible is vital so users can properly use your app.

## Use `button`, not `role='button'`

Buttons have lots of accessible functionality built in from the start with semantic meaning (screan readers know it's a button) and being usable by keyboards (with the `enter` and `space` keys). Many will put `role="button"` on a `div` or `span` thinking it is now a button. Don't do this. It has the same semantics but a button's native functionality must be remade with custom JavaScript. This is brittle and unneeded since a regular button element already has it.

Write the few lines of CSS needed to change the button's style if needed, but never think a `role` attribute is the same as a real button.

## Icon Buttons

Icon buttons are buttons with an icon image, with or without visible text. The icon can complicate how screen readers (SRs) read the button, so there's a few tricks to keeping it accessible.

### Use the Icon and Text

Simplest solution that also removes the risk of someone not understanding the icon on its own. Not always possible, but worth trying at least.

### Hide the Text

Still put the text in the button, but visually hide it so only SRs see it. Then you can use `aria-hidden` to hide the icon from SRs completely.

```html
<button>
  <svg aria-hidden="true" focusable="false">
      <!-- svg content -->
  </svg>
  <span class="screen-reader-only">Menu</span>
</button>
```

The screen reader class should have styles similar to this that visually hide it.

```css
.screen-reader-only {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

### Use `aria-labelledby`

This property looks for the label specifically for SRs reading the button. With it doing this, you can use the regular `hidden` attribute to hide it completely without losing this effect. No custom CSS needed.

```html
<button aria-labelledby="button-label">
  <svg aria-hidden="true" focusable="false">
      <!-- svg content -->
  </svg>

  <span id="button-label" hidden>Menu</span>
</button>
```

### Use `aria-label`

This property gives SRs a string to read in the button element itself, no separate label needed. As long as your label is a basic string and consistent with the rest of the button, it'll work.

```html
<button aria-label="Menu">
  <svg focusable="false">
      <!-- svg content -->
  </svg>
</button>
```

Alternatively, you could use this on the icon.

```html
<button>
  <svg aria-label="Menu" focusable="false">
      <!-- svg content -->
  </svg>
</button>
```

Note that in both of these, we're not using `aria` to hide the icon.

## Resources

* [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
