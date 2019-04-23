# Array Methods

## .filter()

`.filter()` takes an array and tests if each item passes a condition. It produces a new array with each one that passes. Any item that returns false is skipped over.

The test is usually in the form of a function. Like many methods here that involve tests, this can be done with:

* An anonymous function inside the method
* A pointer function inside the method
* Referencing an external function defined elsewhere

Examples of all three below:

```javascript
let all_ages = [12, 16, 25, 22, 19, 21, 6, 30, 20];

// Anonymous function
let voting_ages = all_ages.filter(function(age){
  return age >= 21;
});

// Pointer function
let voting_ages = all_ages.filter( age => (age >= 21) )

// External function
function check_if_voting_age(age) { return age >= 21 };

let voting_ages = all_ages.filter(check_if_voting_age);
```

In each case, `voting_ages` returns `[25, 22, 21, 30]`.

It will be noted if other methods can accept these three ways of taking a function. But for brevity's sake, I'll use pointer functions for the example.

## .map()

This takes all values in an array and manipulates them in some way. The changed data is then put into a new array.

```javascript
let numbers = [2, 4, 6, 8, 10];

let squared_numbers = numbers.map(number => (number * number));
// [4, 16, 36, 64, 100];
```

## .forEach()

`.forEach()` applies a function to each item in an array. Unlike `.map()`, this doesn't take the result and apply them to a new array. It's better for taking action on array values that don't need a modified version.

```javascript
let numbers = [2, 4, 6, 8, 10];

numbers.forEach(number => (console.log(number * 5)));
// The console will output each product
```

## .some()

Checks if any item in an array passes a condition or test. If at least one value passes, it returns true; otherwise it returns false.

```javascript
let usernames = ['name_1', 'name_2', 'name_3'];

let first_user_mentioned = usernames.some(user => (user === 'name_1'));
// true

let alpha_user_mentioned = usernames.some(user => (user === 'name_alpha'));
// false
```

## .find()

Checks if any item in an array passes a condition or test. It returns the first one that satisfies it, not searching anymore and returning the entire object. Very similar to `.filter`, but this one works best when looking for a unique element.

```javascript
let numbers = [4, 12, 8, 6, 1, 66];

let large_number = numbers.find(num => num > 10);
// 12

let small_number = numbers.find(num => num < 10);
// 4
```

Another function, `findIndex()` works the exact same way but returns the index of the item, not the item itself.

## .every()

Same as `.some()` but only returns true if _all_ array items pass the condition.

```javascript
let numbers = [2, 4, 6, 8, 10];

let all_even_numbers = numbers.every(number => ((number % 2) === 0));
// true

let numbers_over_5 = numbers.every(number => (number > 5));
// false
```

## .includes()

Checks if an array includes one specific value. Different from `.some()` since it's not checking a condition. Our uses of `.some()` before could therefore be replaced with `.includes()` for something more elegant.

```javascript
let usernames = ['name_1', 'name_2', 'name_3'];

let first_user_mentioned = usernames.includes('name_1');
// true

let alpha_user_mentioned = usernames.includes('name_alpha');
// false
```

## .concat()

Combines two or more arrays into a single array.

```javascript
const someArray = [1, 2, 3].concat([4, 5, 6]);
console.log(someArray); // [1, 2, 3, 4, 5, 6]
```

## .indexOf()

Returns the index of the given item in an array. If it's not there, it returns `-1`.

```javascript
[1, 2, 3, 4].indexOf(3); // 2
[1, 2, 3, 4].indexOf(5); // -1
```

## .slice()

Returns a shallow copy of a portion of an array. Takes two arguments, the start and end index of items in the array. Those items and everything in between are brought to the copy. Using no arguments copies the entire thing.

> Shallow Copy: makes a reference for any reference data types (arrays objects, functions). This means changing the original will also change the reference, so be cautious!

```javascript
[0, 1, 2, 3, 4, 5, 6].slice(1, 3); // [1, 2, 3]
```

## .flat()

Takes all sub-arrays within an array and bring the elements up to the level of the original array. Takes an argument which is the number of levels down you wish to flatten.

```javascript
[[1, 2, 3], [4, 5, 6]].flat(); // [0, 1, 2, 3, 4, 5, 6]
[[1, 2, 3], [4, 5, 6, [7, 8]]].flat(); // [0, 1, 2, 3, 4, 5, 6, [7, 8]]
[[1, 2, 3], [4, 5, 6, [7, 8]]].flat(2); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## .flatMap()

This function does two basic things:

1. Carries out a .map() function on the array
2. Calls .flat() on whatever the result is

This is useful if you're breaking up each array item into their own arrays. Instead of giving an array of arrays, you get a simpler array of all the results.

```javascript
const sentences = [
  'This is a sentence',
  'This is another sentence',
  "I can't find any original phrases",
]

const allWords = sentences.flatMap(sentence => sentence.split(' '))
console.log(allWords) // ["This", "is", "a", "sentence", "This", "is", "another", "sentence", "I", "can't", "find", "any", "original", "phrases"]
```

## .join()

If you have an array of strings, this function joins them all together via a string you specify.

```javascript
['This', 'is', 'a', 'sentence'].join(' '); // 'This is a sentence'
```

## References

* [What you should know about JavaScript arrays](http://pop.frontendweekly.co/B9pths)
