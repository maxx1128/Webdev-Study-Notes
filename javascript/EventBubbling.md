# Event Bubbling

Event bubbling is a relatively simple concept controlling how JS events occur on the DOM.

Let's say a user clicks a paragraph tag. This would trigger any `onclick` events on that paragraph tag. Regardless of if there are any or not, the event will then "bubble up" to all the parent elements. It would check if there's any `onclick` elements for the surrounding `article` tag, the `div` tag around that, all the way until it reaches the top of the DOM.

As the event moves up the DOM, the range of elements it looks at expands, like a bubble getting larger. Hence the name "event bubbling!"

## Why Event Bubbling?

Event bubbling occurs with JavaScript due to the nature of the DOM. If you set an `onclick` event on a wrapper element, you're rarely ever clicking on the wrapper element itself. Most likely you're clicking on elements inside the wrapper.

Event bubbling makes it so clicking on elements inside the wrapper still triggers the wrapper's own event. Clicking on a paragraph in the wrapper will do nothing, but once it bubbles up to the wrapper itself, it will see it has its own `onclick` event and set it off.

## Find the Starting Element

If you want to see the element that set off the event bubbling, use `event.target`. Every event function has an `event` object with info from the browser, and `event.target` is the element the event originated from.

This helps if you need to track what element inside that wrapper triggered the event. This context could change what you want the function to be, or if you want to run it at all.

Speaking of which...

## Stop the Bubbling!

Want to keep an event from bubbling up? The `event` object also has a function called `event.stopPropagation()` which will keep the event from moving further up the DOM.

Be careful with doing this however. Bubbling is a set convention with JavaScript and the DOM, so stopping it could lead to many unexpected effects.

## Resources

* [Bubbling and capturing](http://javascript.info/bubbling-and-capturing)
