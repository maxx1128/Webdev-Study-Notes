# Fundamentals

## Scopes

Scope refers to the specific area a code of JavaScript has "access" to. If two sections of JS code are in the same scope, then they can access each other - different scope means they can't.

There's several types of scopes to know:

* **Global Scope** - Global scope refers to code can be accessed anywhere else, even separate functions. Global scope should be avoided as much as possible, since it greatly increases the risk of code "leaking out" to unexpected areas with unexpected (and often bad) results.
* **Function Scope** - Function scope refers to code that can only be accessed in a specific function. Variables declared in a function can only be accessed from within that function. Trying to call these variables from the global scope will result in an `undefined` error.
* **Block Scope** - Block scope was formally introduced with ES6, and refers to code only in certain operation "blocks," like `if` statements or for loops. Block scope variables must be declared with `let` or `const`.

This is generally easy to understand, but can get confusing when you use `var`, which isn't block-scoped. Declaring a variable in the global scope, and declaring another with the same name in a block, will override the global variable since there's no block scope.

```
var myName = "Earl";

if (2 === 2) {
  var myName = "Crystal Soul-Eater";
}

console.log(myName); // "Crystal Soul-Eater"
```

If we used `let` instead of `var`, the second declaration would be block-scoped and not overwrite the global one. The `console.log` would then return `"Earl"`.

## Call Stack

The call ctack is the basic data structure JavaScript uses to execute, or call, a code's functions. Whenever JavaScript code is executed (or called), the call stack controls the method and order behind this execution. That's why understanding the call stack is essential to see how JavaScript runs, since not understanding it can lead to unexpected errors or code called in the wrong order.

Some key traits of the call stack:

* **The call stack is synchronous.** Functions are called one at a time, from the start to the end, simple as that. JavaScript allows for asynchronous programming, but only by borrowing this functionality from elsewhere (the Browser API). JavaScript itself is synchronous and can only borrow asynchronous functionality from elsewhere.
* **The call stack is Last In, First Out.** Function calls are added to the top of a "pile," and whatever's on top of the pile is always called before what's below it can be called next. It's similar to stacking dishes - the last one you put on the pile is the first one you use later on.
* **A stack overflow is when the call stack limit is exceeded.** Recursive functions (functions that call themselves) can trigger a stack overflow when there's no end coded into it. Whatever's running this code will ultimately crash.

## Closure

Closure relates to when variables are declared within certain scopes. When calling a function, any variables it has are created, do their business, and are destroyed afterwards. If you call the function again, it recreates the variables in its scope all over again - all changes and operations from before are forgotten, they're redone, and then destroyed again.

Closure comes into play when calling a function being stored into a variable. If that function has any variables in its local scope, those values aren't destroyed once the function is done - they're saved and remembered for later. Calling this function instance that was saved executes the same operations, but it carries over the remembered values too.

```
function iWillSaveValues() {
  let number = 0;
  let increaseNumber = () => n++;
  return increaseNumber;
}

let closureExample = iWillSaveValues();
```

`closureExample` has created a closure of this function. The `number` variable is set at zero, but changes to this variable will be remembered. You can see this if you call this function a few times:

```
closureExample(); // 1
closureExample(); // 2
closureExample(); // 3
```

Every time it's called, it remembers the increased value of `number` from before and increases it. A non-closure example of this function would start over at `0` each time and always return `1`. A way to remember this is if a bubble _closed around_ these variables and protected them from destruction in this variable so they can keep changing as you keep using it.

Understanding closure, like many things on this page, is important for avoiding accidental bugs and taking advantage of what JavaScript can do. Closure lets you keep track of if your functions can be used for longer, more complex operations without losing track of what they'll actually do.

## Recursion

Recursions are functions that call themselves. They can be helpful since they can keep code dry, since you only write code once but can execute it as many times as needed. However recursive functions that have no end will cause a stack overflow (see Call Stack), so be sure they're used properly.

Take this example function that finds a number's factorial. This multiplies a number by every number lower than it until it returns the total product. So the factorial of `5` would be `5 * 4 * 3 * 2 * 1`.

```
const factorial = (n) => (n < 2) ? 1 : n * factorial(n - 1);
```

Running `factorial(5)` leads to the following recursive function calls:

```
factorial(5) = 5 * factorial(4)
factorial(5) = 5 * 4 * factorial(3)
factorial(5) = 5 * 4 * 3 * factorial(2)
factorial(5) = 5 * 4 * 3 * 2 * factorial(1)
factorial(5) = 5 * 4 * 3 * 2 * 1
factorial(5) = 120
```

The part of the function with `(n < 2) ? 1` is crucial, since it's what stops the function from returning itself. Once the number gets down to `1`, it simply returns that without calling itself, stopping the loop. Without it, the function would simply look like this:

```
const factorial = (n) => n * factorial(n - 1);
```

And would be played out this way instead:

```
factorial(5) = 5 * factorial(4)
factorial(5) = 5 * 4 * factorial(3)
factorial(5) = 5 * 4 * 3 * factorial(2)
factorial(5) = 5 * 4 * 3 * 2 * factorial(1)
factorial(5) = 5 * 4 * 3 * 2 * 1 * factorial(0)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * factorial(-1)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * -1 * factorial(-2)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * -1 * -2 * factorial(-3)
// Adding more negative numbers into infinity
```

Even though the result would have to be `0` since the result is being multipled by zero, the important thing is nothing's telling this function to stop calling itself. It will keep doing so until something in the code tells it through, and since nothing will, it simply goes into it creates a stack overflow.


## Variable Hoisting

`var` declarations and value assignments can be placed anywhere on a page. However, the variable declarations are "hoisted" automatically to the top of the page. This means that any `var` doesn't necessarily need to be declared, since it will be declared when it's hoisted. A computer reading this:

```
y = 5;
```

This will change to this once it gets hoisted:

```
var y;
y = 5;
```

This is why the first code sample, although it looks invalid, actually becomes valid when it becomes the second version. This isn't necessarily a good thing, since it can create unexpected complexity or bugs in the code.

Avoiding this is easier with ES6, since the new variable declarations `let` and `const` **are not hoisted.**

## Double vs Triple Equal Signs

`===` comparisons looks for **strict equality,** meaning it looks for matching "type" and "value".

* `55 === 55` returns `true`
* `55 === '55'` returns `false` (Same values, different types)

`==` comparisons look for **loose equality,** meaning it only looks for matching value. It can perform "type coercion" if needed, which converts the both values to the same type before comparing values.

* `55 == 55` returns `true`
* `55 == '55'` returns `true` (Different types, but it converts both values to the same type before comparing them, which makes it true)

This distinction is important since loose equality can lead to unexpected bugs related to conditions returning true when they may need to be false. It's better practice to always use `===` for comparisons.

## Primitive Types

## Expression VS Statement

## Immediately-Invoked Function Expressions

## Value and Reference Types

## this

## Resources

* [JavaScript — Double Equals vs. Triple Equals]((https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
* [JS Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
* [Understanding the JavaScript call stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
* [I Never Understood JavaScript Closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
* [The battle between function scope and block scope](http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)
