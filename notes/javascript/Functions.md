---
group: javascript
layout: post

title: Functions
descr: Using functions, the core of JavaScript code

resources:
  - title: Eloquent JavaScript
    author: Marijn Haverbeke
    link: http://eloquentjavascript.net/
    publisher: No Starch Press
  - title: JavaScript Fundamentals before learning React
    author: Robin Wieruch
    link: https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#react-javascript
    publisher: robinwieruch.de
---

Functions are the core of Javascript, allowing coders to wrap larger functionalities inside different values. This reduces repetition and makes it easier to manage complexity.

Functions begin with the keyword `function`, followed by any `parameters` (may have multiple or none) and then the `body` with the statements the function executes. The traditional syntax always requires curly braces around the body (ES6 rules have exceptions). Two examples of different functions the book gives are below, showing some variety in parameters and complexity. Note that the first doesn't return a value (would give `undefined`) while the second does (using `return`).

{% highlight javascript %}
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
{% endhighlight %}

* **Parameters** are used in the body like regular values, but are only supplied when the function is called.
* Each function has its own local **scope** when called. Variables declared inside a function can only be referenced inside the function, and not after. It's basically its own little world, where it can reference global values if needed (not recommended) but nothing outside the function can reference it.

## Arrow Functions

Arrow functions are the new ES6 syntax for JavaScript functions. They're great for keeping your JS concise, especially for simpler functions. The big difference is they don't need the `function` keyword to set them up, instead using an `=>` icon.

### Arrow Function With Body

These are more similar to ES5 functions, since it gives you multiple lines and must implicitly return a value.

{% highlight javascript %}
const arrowFunction = () => {
  return 'This is a string being returned!';
}
{% endhighlight %}

### Arrow Function Without Body

Without the body, arrow functions are limited to one line and implicitly return what's there. Great for simpler code so it's easier to read.

{% highlight javascript %}
// Parenthesis are either blank or hold parameters
const arrowFunction = () => 'This is a string being returned!';
const doubleNumber = (n) => n * 2;

// Can break the line for neater syntax
const arrowFunction = () =>
  'This is a string being returned!';
{% endhighlight %}
