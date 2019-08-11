# Functions

Functions (or methods for other languages) are vital to programs. They're reusable chunks of functionality to use throughout, and therefore should be easy to understand and organize. If not, they could have unintended effects or the wrong one could be used.

The following are all strategies to make them manageable, understandable, all while keeping them flexible and powerful.

## Make Them Small

Make the functions small, and then smaller than that. Aim for 20-30 lines long whenever possible. They should be obvious and tell a clear story.

* Blocks within `if`, `else`, and `while` statements should be one line long.
* The indent level should be no greater than one or two.

## Do One Thing

Do one thing, do it well, and do it only.

If several other things must be done in the process, they should be abstracted into other functions.

If you can abstract part of one function somewhere else, it's doing more than one thing. Abstract it away. Don't just divide them into multiple sections.

## One Level of Abstraction per Function

Functions should cover top-level parts of the code as well as nitty-gritty details like DOM manipulation. Keep it all on the same basic level of abstraction throughout so it's easier to understand.

With a list of functions, they should read like a top-down narrative. After one function, the next should descend down one level of abstraction as you go, keeping it all consistent. A skeleton example of this is:

1. To do X, we do Y.
2. To do Y, we do Z and W.
3. To do Z, we do ...
4. To do W, we do ...

## Be Careful with Switch and If/Else Statements

These types of code blocks are often unclean for many reasons:

1. They're often large and must be made larger when extra conditions are added from new data
2. Changes from other areas may make it change
3. It could change for many reasons, often from unrelated data
4. The structure is oft-repeated elsewhere

These are best handled by placing them in low-level abstractions that can be more easily referenced when needed. They should be written only once, be the basis for polymorphic objects, and be inherited or composed to other objects.

## Use Descriptive Names

Reading the name creates a certain expectation of what the function does. That expectation should match what it actually does, and it's what one expects. Long, descriptive names are better than short, vague ones.'

Use similar noun, verb, and phrase choices when selecting these names. It helps others see commonalities and the functions tell a more consistent story.

## Use Arguments With Care

Zero to two arguments are the preferred amounts, with three arguments only being used when absolutely necessary. Anything more is not allowed. This is because arguments make functions harder to understand and take more work to test.

### Monadic Functions

These take one argument. They usually:

1. Ask a question and return a boolean answer
2. Transform something into something else and return it
3. Trigger an event to change the program state in some way. This should be done very carefully and make it clear it's an event.

The name should make the distinction between these two clear.

Don't pass in flag arguments, which are booleans that signal yes or no to part of the function's code. Just don't, it makes an otherwise simple function (or two, if refactored) needlessly complicated.

### Dyadic Functions

Two arguments are appropriate when the arguments have:

1. Natural cohesion
2. Natural ordering

An example of this are changing coordinates on a point, such as `newPoint(0, 0)`. One expects two arguments (one for point X and point Y), and a natural order (X and then Y). Lacking just one of these makes a dyadic function confusing.

Dyadic functions are confusing but not forbidden, so be aware of their cost and try to refactor the arguments down whenever possible.

### Triad Functions

The same rules for Dyadic functions apply here, but the risks and cognitive costs are more than twice as much. So be willing to do more work to refactor them down when possible.

### Argument Objects

If a function needs multiple arguments, a trick to simplify them is wrapping them in a class or object of their own. Just make sure they're grouped based on a common concept that makes sense.

### Argument Lists

Some functions will take variable lists as arguments, and these count as one operator. An example is the JavaScript spread operator.

```javascript
function addNumbers(...nums) {
  // code here
}

addNumbers(1, 2, 3, 4);
```

The catch is the list argument should be the _last_ argument.

### Use Verbs and Keywords for Names

Monads should aim for a verb/noun pair, where the function name is a verb and the argument is the noun, such as `write(page)`.

For dyadic functions and more, encoding the arguments into the function name can add clarity. The books compares the dyadic functions of `assertEquals` and `assertExpectedEqualsActual` with the latter being clearer.

## No Side Effects

Functions should have no unintended effects, like mutating unintended states. They shouldn't be coupled to unrelated code, since reliance on other variables may limit when they can be called (one variable must have a certain value first).

## Output Arguments

Output arguments are variables being passed in that will be changed to some extend and/or returned, such as a function changing the variable being passed in. Coders normally expect the function arguments to help calculate a separate value being returned, which makes them input arguments.

This adds a cognitive load and in general should be avoided. OOP removes much of the need for this by changing the state of an owning object. For example, something like `page.appendFooter()` instead of `appendFooter(page)`;

## Command Query Separation

Functions should do something or answer something, not both, as this causes confusion.

## Prefer Exceptions to Error Codes

Setting up specific error codes often leads to too deeply nested structures. Using `try/catch` blocks to catch exceptions is often much simpler. However these can also be ugly, so try to abstract them into their own functions.

Moving error handling to other functions means those functions should only handle errors, nothing else.

## Don't Repeat Yourself

Repeated code is bad, even if it's only partial duplication. Either way, any changes made must be made multiple times, multiplying the chances of errors. Error by duplication is one of the biggest sources of errors in software. Functions should abstract away code so duplicated code is only written once, in that function.

## Structured Programming

A rule of structured programming is functions should only have one entry and exit point. This means it only has one `return` and no `break`, `goto`, `continue` statement.

However this only brings worthwhile benefits to large functions. Keeping functions small means multiple exits still work on occasion.

## Writing Small Functions

Writing good functions can be like writing a good article - write it badly, then edit it until it's good. A tried-and-true approach is writing huge, bad functions first and then editing them into multiple small, sharp functions. Get it working without following the rules, then make them follow the rules without breaking them.
