* Title: [Eloquent JavaScript](http://eloquentjavascript.net/)
* Author: Marijn Haverbeke

> A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands.


### Values, Types, and Operators

All data in computers can be reduced to bits, positive/negative charges expressed as ones and zeros.

In JavaScript, groups of bits are represented as _values._ You create them by simply invoking their name. There's several types:

* **Numbers,** which can be whole, negative, and decimal values. Their main benefit is using arithmetic operations to calculate new numbers.
    - The _remainder_ operator returns the leftover value after division. `314 % 100` returns `14`, and `100 % 10` returns `0`.
    - `NaN` is returned after any operation that doesn't return a real result. `0 / 0` will return `NaN`, as well as `Infinity - Infinity`.
* **Strings** are basic text enclosed by matching quotes.
    - Quotes or other special characters inside a string need to be _escaped_ with a backslash.
        + Quotes: `"\'It is a dangerous journey,\' the main said."`
        + New Lines: `"This is the first line\nAnd this is the second"`
        + String with backticks can include functions or operations, if they're enclosed in a `${}` wrapper.
* **Unary Operators** are symbols written as words
    - `typeof` tells you a value's type, so `typeof 4.5` returns `number`.
* **Boolean** values are simply true or false
    - You can use _comparison values_ that return boolean values, such as `3 > 2` returning `true`.
    - Logical operators such as `&&` and `||` also return boolean values.
    - The _negative_ operator flips an integer, so `- 5` returns `-5`.
    - The _not_ operator flips the boolean value on it, so `!true` returns `false`.
    - Ternary operators evaluate an expression and can return different values if it's `true` or `false`. So `true ? 1 : 2` returns `1`, but if it was false it would return `2`.
* **Empty Values** show a lack of meaningful values or info. If a value must be returned but none is produced, you get an empty value.
    - These can be either `null` or `undefined`, and they're mostly the same.

**Type Coercion** is when operators are applied to the wrong value types and quickly convert the value to what is needed, such as converting `"5"` from a string to `5` as an integer. To test for any unexpected type conversions or missing values, use the `===` and `!==` comparison operators.

### Program Structure

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
```
if (isNaN("string")) {
    console.log("Not a number!")
    console.log("How dare you.")
}
```

Statement syntax for `if` statement (only if one statement returned):
```
if (isNaN("string")) console.log("Not a number! How dare you.")
```

The `if` statement can also use `else if` and/or `else` for chaining conditions:
```
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

#### While/Do Loops

Sometimes code must be repeated so often that the above approach won't work. **While loops** make this easier, as they constantly repeat code under a certain condition. Logging all number in a certain range (between 10 and 100) works this way:

```
let number = 10;

while (number <= 100) {
  console.log(number);
  number = number + 2;
}
```

Notice how this demonstrates how binding can control the execution of a code.

**Do loops** are the same, but are set up so they execute their code at least once. In the below example, even if `number` is set `100`, it will still run at least once.

```
let number = 100;

do {
  console.log(number);
  number = number + 2;
} while (number <= 100)
```

> Make sure the conditions in a While/Do loop resolve! If they continue infinitely they will crash your program.

#### For Loops

For Loops do the same basic functions as While/Do loops, but give you more control over the iterations. You must set:

* The variable being counted and its initial value
* The condition for stopping the loop
* The expression to run after each iteration

The example below using the loop variable in all three areas, but note that anything else could be used if wanted.

```
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

Loop increments can be simplified in two ways:

* `counter += 2` to add any integer
* `counter++` to increment by 1
* Both of the above can subtract by replacing `+` with `-`

There are two ways to adjust control of a loop:

* A **break** statement immediately pulls you out of the current iteration, and exits the loop entirely. Even if it would have normally kept iterating.
* A **continue** statement immediately pulls you out of the current iteration, but resumes the loop again from the start of a new iteration. Even if it would have normally stopped iterating.

#### Switch Statements

Large amounts of conditionals can often be awkward for `if` statements. The `switch` statement will often work better

```
switch (variable_here) {
    case (10):
        console.log("It's ten!");
        break;
    case (5):
        console.log("It's five!");
    case (2):
        console.log("It's two!");
    default:
        console.log("What is this number...?");
        break;
}
```

Note that you don't need to include `break` in every case, which executes the code but then keeps going.

#### Comments

Code should aim to be self-explanatory, but that's not always possible. Comments can help give extra context when needed. They can either one line or multiple lines.

```
// One line comment!

/*
    Multiple line comment!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque, laboriosam architecto culpa aliquid distinctio maxime dicta vel mollitia expedita! Et nisi debitis nam earum facere beatae eius doloremque suscipit.
*/
```

### Exercise: FizzBuzz

An exercise the book mentions is one that is often used in coding interviews, so is useful to solve:

> Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
> 
> When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

Here's my own solution to this problem:

```
let number = 1;

while (number <= 100) {
  let result = '';
  
  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';
  
  console.log((result === '') ? number : result)
  number++;
}
```

### Functions

Functions are the core of Javascript, allowing coders to wrap larger functionalities inside different values. This reduces repetition and makes it easier to manage complexity.

Functions begin with the keyword `function`, followed by any `parameters` (may have multiple or none) and then the `body` with the statements the function executes. The traditional syntax always requires curly braces around the body (ES6 rules have exceptions). Two examples of different functions the book gives are below, showing some variety in parameters and complexity. Note that the first doesn't return a value (would give `undefined`) while the second does (using `return`).

```
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```

* **Parameters** are used in the body like regular values, but are only supplied when the function is called.
* Each function has its own local **scope** when called. Variables declared inside a function can only be referenced inside the function, and not after. It's basically its own little world, where it can reference global values if needed (not recommended) but nothing outside the function can reference it.

