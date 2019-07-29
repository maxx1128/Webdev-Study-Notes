# Basic Program Structure

**Expression:** A fragment of code that makes a value. Can be nested inside each other, or just be literal values.

**Bindings:** Values need to be _bound_ to something or they will be lost. This is done be assigning them to variables. An example is `let variable = 10 + 10`.
  * Bindings grasp values, and the values they grasp can usually be changed or reassigned. Giving it nothing to grasp makes it equal `undefined`.
  * Use `const` for bindings that _will not change._ Otherwise, use _let_.
  * Binding names can include letters, numbers, `$`, and `_` but no other punctuation or special characters. Also can't be certain keywords used elsewhere, like `const`.

**Environment:** Collection of all bindings available at any given time. Includes defaults used even in empty programs.

**Functions:** Pieces of a program wrapped in a value.
    * Run the code in a function by _invoking_ it, usually with parenthesis after the value name. Example: `example_function()`.
    * Functions can use different values when run, which are _arguments_ and put in the parenthesis.
    * Some functions have _side effects_, or direct effects on other code. Others instead simply _return_ values that are used elsewhere.

**Control Flow:** Problems with many lines execute each line one after the other, like a story.
    * Sometimes there's _conditional execution_, where code takes a certain path depending on some parameters. This can be done with an `if` statement that executes or skips a section of code if an expression is true or false.
    * One way to manage control flow is the `isNaN` function included in JS. If the given argument isn't a number, such as `isNaN(44)`, then it skips the code. If it works, such as with `isNaN("string")`, it runs the code.

Block syntax for `if` statement:

```javascript
if (isNaN("string")) {
    console.log("Not a number!")
    console.log("How dare you.")
}
```

Statement syntax for `if` statement (only if one statement returned):

```javascript
if (isNaN("string")) console.log("Not a number! How dare you.")
```

The `if` statement can also use `else if` and/or `else` for chaining conditions:

```javascript
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

## Resources

* [Eloquent JavaScript](http://eloquentjavascript.net/)
