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
  - title: Functional JS Light
    author: Kyle Simpson
    link: https://github.com/getify/Functional-Light-JS
    publisher: LeanPub
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

### Return Functions in Functions

Functions can work with more than just straight values, they can take and return other functions too! If you're writing code that's similar in many ways but will need to call different functions at times, you can pass in functions as arguments. This can exponentially increase a function's power and flexibility.

Below is a simple example:

{% highlight javascript %}
function formatter(formatFn) {
  return function inner(str){
    return formatFn( str );
  };
}
{% endhighlight %}

There's three functions to look at here:

* `formatter` is the outermost function, and the one that'll actually need to be called. It takes `formatFn` as an argument, which will be a separate function defined later.
* `inner` is a function defined inside this one, and is automatically called. If you store `formatter` in a variable and then call it, this is the function that will actually be called. It has `str` as its parameter.
* `formatFn` is the parameter that `formatter` needs, and is called in the smallest scope of this function. It's the one the coder will need to define separate, and will be called in saved instances of the `formatter` function.

It looks convoluted, but the basic use of this function is to **take functions built on formatting text, save them, and use them in a specific way later on.**

As an example, let's say we had a function that uppercases the first letter of a string.

{% highlight javascript %}
const upperFirst = (string) => `${string[0].toUpperCase()}${string.substr( 1 ).toLowerCase()}`;
{% endhighlight %}

We could pass this function into `formatter` and then call it later. We can also adjust `formatter` to better show the control it gives us.

{% highlight javascript %}
const formatter = (formatFn) => {
  return function inner(str){
    console.log(`Your returned string is "${formatFn( str )}."`);
  };
}

const upperFirst = (string) => string[0].toUpperCase() + string.substr( 1 ).toLowerCase();

logUpperFirst = formatter(upperFirst);

logUpperFirst( "hello" );
// logs 'Your returned string is "Hello."' in the console
{% endhighlight %}

We can use `formatter` for any number of other ways to change strings - all lowercase, reversing them, working them into a paragraph, etc. We can write the function completely separate and pass it in, keeping the code decoupled and flexible.

Note that you don't need to define your functions in a variable before passing them them, you can define them in the argument itself. The end result is the same, so it's a matter of preference.

{% highlight javascript %}
const logLower = formatter( function formatting(string){
    return string.toLowerCase();
} );
{% endhighlight %}
