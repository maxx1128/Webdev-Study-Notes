## .filter()

`.filter()` takes an array and tests if each item passes a condition. It produces a new array with each one that passes.

The test is usually in the form of a function. Like many methods here that involve tests, this can be done with:

* An anonymous function inside the method
* A pointer function inside the method
* Referencing an external function defined elsewhere

Examples of all three below:

```
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

```
let numbers = [2, 4, 6, 8, 10];

let squared_numbers = numbers.map(number => (number * number));
// [4, 16, 36, 64, 100];
```

## .forEach()

`.forEach()` applies a function to each item in an array. Unlike `.map()`, this doesn't take the result and apply them to a new array. It's better for taking action on array values that don't need a modified version.

```
let numbers = [2, 4, 6, 8, 10];

numbers.forEach(number => (console.log(number * 5)));
// The console will output each product
```

## .some()

Checks if any item in an array passes a condition or test. If at least one value passes, it returns true; otherwise it returns false.

```
let usernames = ['name_1', 'name_2', 'name_3'];

let first_user_mentioned = usernames.some(user => (user === 'name_1'));
// true

let alpha_user_mentioned = usernames.some(user => (user === 'name_alpha'));
// false
```

## .every()

Same as `.some()` but only returns true if _all_ array items pass the condition.

```
let numbers = [2, 4, 6, 8, 10];

let all_even_numbers = numbers.every(number => ((number % 2) === 0));
// true

let numbers_over_5 = numbers.every(number => (number > 5));
// false
```

## .includes()

Checks if an array includes one specific value. Different from `.some()` since it's not checking a condition. Our uses of `.some()` before could therefore be replaced with `.includes()` for something more elegant.

```
let usernames = ['name_1', 'name_2', 'name_3'];

let first_user_mentioned = usernames.includes('name_1');
// true

let alpha_user_mentioned = usernames.includes('name_alpha');
// false
```

## .reduce()

`.reduce()` is a very versatile and powerful tool for controlling data structures. The general structure of one [as explained here](https://emberigniter.com/transform-any-data-structure-with-javascript-reduce/) is:

```
array.reduce(function(acc, value, index, array) {
  // ...
  return acc; // Can also return other values based on the array
}, initialValue);
```

`.reduce()` runs through each item in the array and lets you control what happens in the iteration. The available arguments to use are:

* `acc` is the "accumulated value," or the one that carries over from each item in the array. It's starting value is set in `initialValue`, and it can be used as a reference point or changed in different ways throughout the reduce.
* `value` is the value of the current item in the iteration.
* `index` is the current item's index
* `array` is the array being reduced

A simple example the article also lists is using it to get the sum of an array

```
[1, 2, 3].reduce(function(acc, value) {
  return acc + value;
}, 0);
```

Here, the `0` is the default starting value for `acc`. It can be any number, value, or object. If you're iterating to add key/value pairs, for instance, you can set it to `{}`.

You can also use it to return an array based on if items are even or not

```
const AreTheNumbersEven = [1, 2, 3, 4, 5].reduce(function(acc, value){
    (value % 2 === 0) ? acc.push(true) : acc.push(false);
    return acc; // Ensures that the new array is passed on and can be added to
}, []);

console.log(AreTheNumbersEven) // returns [ false, true, false, true, false ]
```

## Array spread

Spread operators (`...`) let you expand an array if it's in a variable. It's useful if you need each array item to be a separate argument, but the array is in a variable. Using the spread operator puts each item as a separate value or variable, not a single array.

* Useful for combining arrays
* Useful for cutting items from arrays without splicing

```
// Combining arrays

const array_1 = [1, 2, 3, 4],
      array_2 = [5, 6, 7, 8];

const merged_array = [...array_1, ...array_2];
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

```
const jnpr = ['jon', 'pyrrha', 'nora', 'ren'];
const remove_nora = [...jnpr.slice(0,2), ...jnpr.slice(3)];
```

Bonus: You can use this to write a function to remove items from arrays.

```
function remove_from_array(array, item){
  let index = array.indexOf(item),
      next_index = index + 1;

  return [...array.slice(0, index), ...array.slice(next_index)];
};

const jnpr = ['jon','nora',  'pyrrha', 'ren'];

const after_season_three = remove_from_array(jnpr, 'pyrrha');
// [ 'jon', 'nora', 'ren' ]
```

## Function Rest

You can also use the spread operator so functions can accept any number of extra arguments. Great for ones that have a flexible number of extra parameters

```
function who_said_it(name, statement, ...extra_statements) {
  console.log(`${name} said ${statement}`);

  extra_statements.forEach(function(extra_statement){
    console.log(`${name} also said ${extra_statement}`);
  });
}

who_said_it('Ruby Rose', 'Are you... robbing me?',
                         'I don't need people to help me grow up. I drink milk!',
                         'Justice will be swift! Justice will be painful! It will be...DELICIOUS!',
                         'Someone accidentally hit all the buttons on the elevator on the way up here...It wasn't me.');
/*
Ruby Rose said "Are you... robbing me?"
Ruby Rose also said "I don't need people to help me grow up. I drink milk!"
Ruby Rose also said "Justice will be swift! Justice will be painful! It will be...DELICIOUS!"
Ruby Rose also said "Someone accidentally hit all the buttons on the elevator on the way up here...It wasn't me."
*/
```
