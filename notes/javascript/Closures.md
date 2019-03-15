---
group: javascript
layout: post

title: Closure
descr: How JavaScript saves secret variables in functions

resources:
  - title: Closures
    author: Mozilla
    link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    publisher: Mozilla
  - title: JavaScript Scopes and Closures
    author: Zell Liew
    link: https://css-tricks.com/javascript-scope-closures/
    publisher: CSS Tricks
---

Imagine you have a function which also has a function inside of it.

{% highlight javascript %}
function createMonster() {
  let name = 'Super Bear'

  function revealName() {
    console.log(name);
  }
}
{% endhighlight %}

If you call this outer function into a variable, you can then call the inner function from the variable. It will use the `name` variable declared in that outer function's scope.

{% highlight javascript %}
let myMonster = createMonster();
myMonster.revealName();
// 'Super Bear'
{% endhighlight %}

You could adjust this so this inner function is returned by default, so you don't need to specifically call it by name.

{% highlight javascript %}
function createMonster() {
  let name = 'Super Bear'

  function revealName() {
    console.log(name);
  }

  return revealName();
}

let myMonster = createMonster();
myMonster();
// 'Super Bear'
{% endhighlight %}

What's important to remember is **the inner function has access to everything in the outer function at the time it was called and stored in a variable.** Whenever that function is called, it's referencing the data it had at the time it was first called.

The difference, and implications, are clearer when you start passing data in through the outer function.

{% highlight javascript %}
function makeAdder(x) {
  function showAddValue() {
    return x;
  }

  return function(y) {
    return x + y;
  };
}
{% endhighlight %}

This function is fairly simple: the outer function takes the first value, and the inner function takes a second value. When you call the inner function, it adds them both together. But with this setup, you can use closure to save different versions of this function to variables.

So if we did this:

{% highlight javascript %}
const add10 = makeAdder(10);
{% endhighlight %}

This creates a _closure_ in the `addTen` variable. This is a bubble of everything in that environment when it was declared, and that bubble exists separate of everything else in the code. A popular metaphor is a backpack where you store a few specific values and carry along as the code keeps going.

If you call the `addTen` function like so:

{% highlight javascript %}
add10(5);
// 15
{% endhighlight %}

Due to the closure formed by the function, the variable will reach into it's memory and find the `10` we stored from when it was declared. It will take that value we passed into the outer function, and use it in the inner function we're calling now. So it will add the 10 and 5 together to create 15.

You can use this repeatedly to make lots of different adders, knowing that their closures will store the numbers and let you easily add different numbers together. This shows a practical application of closure, creating factories for functions that can be quickly customized and used when needed.

{% highlight javascript %}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
const add50 = makeAdder(50);
const add666 = makeAdder(666);

add5(25);    // 30
add10(90);   // 100
add50(25);   // 75
add666(334); // 1000

add666.showAddValue(); // 666
{% endhighlight %}

This shows the core benefit of closure functions: **limiting these different to variables keeps them out of the global scope**, making them less likely to accidentally affect other code. Their closed off environments in this limited scope essentially make "private scopes" that can only be accessed through this outer function. If you removed the `showAddValue` inner function, you'd have no way to return the `x` variables stored in that scope. It'd be completely hidden away in that closure with no way to access it.
