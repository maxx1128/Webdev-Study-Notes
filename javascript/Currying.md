# Currying

Most JavaScript functions operate in a predictable manner: put in one or more arguments, run some calculations, and return a value. A basic ES6 function to multiply two values would look like this:

```javascript
const multiply = (x, y) => x * y;

multiply(5, 10);
// 50
```

But suppose we needed lots of functions that were similar but not the same. Let's say we needed to multiply lots of different pairs of numbers together, but many of these pairs have a number in common.

```javascript
multiply(3, 6);
multiply(3, 8);
multiply(3, 22);

multiply(5, 2);
multiply(5, 9);
multiply(5, 34);

multiply(7, 4);
multiply(7, 12);
multiply(7, 999);
```

All this works, but it's repetitive and not too elegant. If the function being called was more complex, maintenance could quickly get out of hand.

This is where currying helps.

## What is Currying

Currying is basically having this discussion with JavaScript:

* **Coder:** Normally I give you all the arguments at once. But instead I want you to save some arguments in a function, so when I call you I can just use the argument that's different. So when I call `multiply`, I want you to remember I want one of the numbers to be 3. I'll just tell you what the different number is.
* **JavaScript:** Oh that's a good idea! So you could rewrite the function to this, right?

```javascript
const multiply = x => x * 3;
```

* **Coder:** Technically that would work, but I also want you to remember functions for the other common multipliers, like 5 and 7.
* **JavaScript:** That's easy enough, just write those functions out too! You just need to give them different names.

```javascript
const multiplyBy3 = x => x * 3;
const multiplyBy5 = x => x * 5;
const multiplyBy7 = x => x * 7;
```

* **Coder:** That's the end result I want, but rewriting that multiplication logic three times feels wasteful. I want to generate different versions of that function without rewriting it so much.
* **JavaScript:** Hey you're the programmer, not me. You're supposed to figure this stuff out.
* **Coder:** What if I wrote a function that would return another function? The first function is where I pass in the number I always want to multiply by, and that gives me another function that can multiply by another number?
* **JavaScript:** Sure I can do that! That'll look like this:

```javascript
const multiplyCurrier = y => x => x * y;

const multiplyBy3 = multiplyCurrier(3);
multiplyBy3(5);
// 15

const multiplyBy5 = multiplyCurrier(5);
multiplyBy5(5);
// 25

const multiplyBy7 = multiplyCurrier(7);
multiplyBy7(5);
// 35
```

* **JavaScript:** Don't forget that in this language we have _first class functions._ You can use functions as arguments, and you can have functions as return values. That's basically what currying does: it's breaking a function down into a series of functions that each take a single argument. You can pass in each argument to construct lots of different functions with less work.
* **Coder:** Hooray!

## Call Multiple Arguments at Once

If you have a curried function with multiple arguments like this, which lets you create functions to grab substrings:

```javascript
const curriedSubstring = start => length => string =>
  str.substr(start, length);
```

You can pass multiple arguments at once, to avoid making an unneeded function along the way. Simply add extra pairs of parenthesis with arguments onto the function call.

```javascript
const getFirstChar = string => curriedSubstring(0)(1);

getFirstChar('potatoes');
// 'p'
```

## Use a Composer for Easier Function Creation

A more understandable syntax for making curried functions can be done with a `compose` function like this:

```javascript
const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));
```
With this, you first pass in the currier function and then all the arguments you want to give it. So to make the `getFirstChar` function above, you could do this:

```javascript
const getFirstChar = compose(curriedSubstring, 0 , 1);

getFirstChar('carrots');
// 'c'
```

## Uses for Currying

As shown above, currying lets you make different variations of functions with less repetition. This comes in handy for functions that have three or more arguments to customize. Any times you see multiple functions with any kind of foundational logic, there may be a chance to use currying for a more elegant, less repetitive version.

It's especially useful for functional JavaScript, since it's great for quickly composing different pure functions with a precise syntax. Coders can use both the completed curried functions and the smaller, modular functions making them up if desired, keeping the code efficient if also harder to read for those unfamilar.

## Resources

*[JavaScript ES6 curry functions with practical examples](https://medium.com/front-end-weekly/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1)
*[A Beginner’s Guide to Currying in Functional JavaScript](https://www.sitepoint.com/currying-in-functional-javascript/)
