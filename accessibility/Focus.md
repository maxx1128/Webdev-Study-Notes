# Focus

Websites should always make the current page focus clear. This helps anyone using keyboards, those with short attention spans, and likely others.

The default focus state is a dotted outline around the element, and most interactive elements (like buttons and hyperlinks) already have them. **Don't remove them just because you don't like them!** You can change the style if you want, but removing them is bad practice and breaks the WCAG 2.1 guidelines. This is like taking a mouse-user's mouse away entirely.

## Customizing Focus

The browser defaults of dotted outlines usually work well for their contrast, but they can be customized for better, more stylized effect. All you need is the `:focus` selector.

```css

a {
  border-width: 0px;

  transition: border-width 0.5s;
}

a:focus {
  background-color: gray;
  border-width: 3px;

  transition: border-width 0.5s;
}
```

Yes, they can include transitions. Accessibility can have style too!

## Resources

* [Indicating focus to improve accessibility ](https://hiddedevries.nl/en/blog/2019-06-06-indicating-focus-to-improve-accessibility)
