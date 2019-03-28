# Spread Operator

The spread operator is represented by three dots, such as `...`. Its basic use is to read over lists of values or properties, such as for objects and arrays. This translates into two basic uses:

## Copying and Overwriting Array/Object Values

If you have an array or object, you can use a spread operator to quickly copy all the values over to another variable. This lets you selectively overwrite different properties and values for objects.

```javascript
// For Arrays
const array = [1, 2, 3, 4];
const newArray = [...array, 5, 6, 7];
// [1, 2, 3, 4, 5, 6, 7]

// Combining two arrays
const hugeArray = [...array, ...newArray];
// [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7];

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
```

## Taking Multiple Arguments

When defining a function, you can set a spread operator as a parameter to define a list of values of unspecified length.

```javascript
function example(...arguments) { ... }

example(1, 2, 3);
example(1, 2, 3, 4, 5); // In both examples, 'arguments' is an array of these values
```

You can then treat `arguments` as an array with things like `.filter` or `.reduce`. You can also place other paramters before it that aren't spread operators.

```javascript
function example(first, second, ...arguments) { ... }

example(1, 2); // arguments is undefined
example(1, 2, 3, 4); // arguments is [3, 4]
```

This is great if you need an unspecified number of optional values for a function, while including some regular named arguments first.

## Removing Properties

You can use destructuring with the rest operator to remove object properties. You can assign it to a new variable this way:

```javascript
const activia = {
  name: 'Activia Barleyfoot',
  age: 25,
  occupation: 'Falsetto Marauder',
  dead: true
};

const { dead, ...aliveActivia } = activia;
console.log(aliveActivia);
```

It can also be done with a function.

```javascript
const notDead = ({ dead, ...character }) => character;
const activia = {
  name: 'Activia Barleyfoot',
  age: 25,
  occupation: 'Falsetto Marauder',
  dead: true
};

notDead(activia);
```

You can even use a currier function and dynamic destructuring to generate functions to remove different properties.

```javascript
const activia = {
  name: 'Activia Barleyfoot',
  age: 25,
  occupation: 'Falsetto Marauder',
  dead: true
};

const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
const bringToLife = removeProperty('dead');

bringToLife(activia);
```

## Resources

* [7 Tricks with Resting and Spreading JavaScript Objects](https://blog.bitsrc.io/6-tricks-with-resting-and-spreading-javascript-objects-68d585bdc83)
* [JavaScript: Removing a property from an object immutably by destructuring it](https://www.bram.us/2018/01/10/javascript-removing-a-property-from-an-object-immutably-by-destructuring-it/)
