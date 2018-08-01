This is a list of useful Sass/CSS code for selecting elements based on many different factors, like state and number of siblings.

## Select Empty Elements

If there's nothing in an element, you can style it differently or even hide it altogether

```
.div:empty { ... }

// You can use the inverse too
.div:not(:empty) { ... }
```

> Don't put content in here with psuedo elements! It's not accessible.

## Select All If A Certain Amount

If you want to style items differently if there's a certain amount (such as making them smaller if there's at least five), use the below mixin.

```
@mixin at-least($min) {
  &:first-child:nth-last-child(n+#{$min}),
  &:first-child:nth-last-child(n+#{$min}) ~ li {
    @content;
  }
}

// Example for changing styles after a certain number
li {
  display: block;

  @include at-least(5) {
    display: inline-block;
  }
}
```

## Select Range of Items

```
// range selector mixin
@mixin select-range($start, $end){
  &:nth-child(n+#{$start}):nth-child(-n+#{$end}){
   @content;
   }
}

// Example
li {
  @include select-range(4, 7) {
    // Styles here apply to items four to seven in the list
  }
}

```

## Select All Items Based on Number of Siblings

The `mod` query, as the article I'm referencing describes it, applies styles to all list elements if the list meets these two criteria:

1. The number of items is devisible by the `mod` value (with or without a remainder)
2. The remainder left over from the `mod` value is equal to the specified remainder

See the full mixin here:

```
// mod query mixin
@mixin mod-list($mod, $remainder){
  &:nth-last-child(#{$mod}n+#{$remainder}):first-child,
  &:nth-last-child(#{$mod}n+#{$remainder}):first-child ~ li {
    @content;
    }
}

// Examples
li {
  @include mod-list(4, 0) {
    // Select all items if the number of items is divisible by four
    // 12, 16, and 20 would work
  }

  @include mod-list(4, 1) {
    // Select all items if the number of items is divisible by four
    // with a remainder of 1.
    // 13, 17, and 21 would work
  }
}
```

Other selectors can also be used within this, to narrow down what items to select when this criteria is met.

```
li {
  @include mod-list(4, 0) {
    &:first-of-type {
      // Select the first item in a list divisible by four
    }

    &:last-of-type,
    &:nth-last-of-type(2) {
      // Select the last and second to last items
    }

    // You can use the above mixin too!
    @include select-range(2, 5) {
      // Select all items between and including two and five
    }
  }
}
```

## Child Selectors

There's lots of useful child selectors that can target different ranges of elements

* `:nth-child()` selects a specific child element
  - `:nth-child(3)` selects the third child
  - `:nth-child(n+3)` selects all children from the third onward
  - `:nth-child(-n+3)` selects only the first three children
  - `:nth-child(3n)` selects every third child
  - `:nth-child(3n+2)` selects every third child starting from the second
  - `:nth-child(odd)` selects all odd-numbered children
  - `:nth-child(even)` selects all even-numbered children
* `:nth-last-child` selects the last element
  - `:nth-last-child(3)` is the third-to-last item
  - `:nth-last-child(n+3)` is the third to last item, and all items before it
* `:nth-first-child` selects the first element
  - Same logic as the `last-child` selectors

-----

## References

* [Using CSS Mod Queries with Range Selectors](https://alistapart.com/article/using-css-mod-queries-with-range-selectors)
* [Solved with CSS! Logical Styling Based on the Number of Given Elements](https://css-tricks.com/solved-with-css-logical-styling-based-on-the-number-of-given-elements/)
* [Useful :nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/)
