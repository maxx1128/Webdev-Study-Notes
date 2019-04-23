# Reduce

Reduce is a very versatile and powerful tool for controlling data structures. The general structure of one [as explained here](https://emberigniter.com/transform-any-data-structure-with-javascript-reduce/) is:

```javascript
array.reduce(function(acc, value, index, array) {
  // ...
  return acc; // Can also return other values based on the array
}, initialValue);
```

Reduce runs through each item in the array and lets you control what happens in the iteration. The available arguments to use are:

* `acc` is the "accumulated value," or the one that carries over from each item in the array. It's starting value is set in `initialValue`, and it can be used as a reference point or changed in different ways throughout the reduce.
* `value` is the value of the current item in the iteration.
* `index` is the current item's index
* `array` is the array being reduced

A simple example the article also lists is using it to get the sum of an array

```javascript
[1, 2, 3].reduce(function(acc, value) {
  return acc + value;
}, 0);

// Pointer arrow version of same function
[1, 2, 3].reduce((acc, value) => acc + value);
```

Here, the `0` is the default starting value for `acc`. It can be any number, value, or object. If you're iterating to add key/value pairs, for instance, you can set it to `{}`.

You can also use it to return an array based on if items are even or not

```javascript
const AreTheNumbersEven = [1, 2, 3, 4, 5].reduce(function(acc, value){
    (value % 2 === 0) ? acc.push(true) : acc.push(false);
    return acc; // Ensures that the new array is passed on and can be added to
}, []);

console.log(AreTheNumbersEven) // returns [ false, true, false, true, false ]
```

The above example, although possible with `reduce`, is better managed with `map`. So **remember `reduce` is best used when combining arrays into different values in more complex ways.**

```javascript
const AreTheNumbersEven = [1, 2, 3, 4, 5].map(value => value % 2 === 0);

console.log(AreTheNumbersEven) // returns [ false, true, false, true, false ]
```
