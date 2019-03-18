# Spread Operator

The spread operator is represented by three dots, such as `...`. Its basic use is to read over lists of values or properties, such as for objects and arrays. This translates into two basic uses:

## Copying and Overwriting Array/Object Values

If you have an array or object, you can use a spread operator to quickly copy all the values over to another variable. This lets you selectively overwrite different properties and values for objects.

{% highlight javascript %}
// For Arrays
const array = [1, 2, 3, 4];
const newArray = [...array, 5, 6, 7]; // [1, 2, 3, 4, 5, 6, 7];

// For Objects
const profile = {
  name: Chris Sandwich,
  age: 25,
  occupation: Falsetto Marauder,
  dead: true
};

// This copies over 'profile', and optionally changes/adds on this new object's properties
const newProfile = {
  ...profile,
  name: Activia Barleyfoot,
  dead: false
}
{% endhighlight %}

## Taking Multiple Arguments

When defining a function, you can set a spread operator as a parameter to define a list of values of unspecified length.

{% highlight javascript %}
function example(...arguments) { ... }

example(1, 2, 3);
example(1, 2, 3, 4, 5); // In both examples, 'arguments' is an array of these values
{% endhighlight %}

You can then treat `arguments` as an array with things like `.filter` or `.reduce`. You can also place other paramters before it that aren't spread operators.

{% highlight javascript %}
function example(first, second, ...arguments) { ... }

example(1, 2); // arguments is undefined
example(1, 2, 3, 4); // arguments is [3, 4]
{% endhighlight %}

This is great if you need an unspecified number of optional values for a function, while including some regular named arguments first.
