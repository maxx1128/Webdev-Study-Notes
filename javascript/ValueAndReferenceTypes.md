# Value and Reference Types

For data stored in different variables, JavaScript stores this data in two different ways: **value and reference**.

* **Value** means the data stored is a value separate from all other ones. It has much less risk of inadvertently changing other values. Data types stored by value are the simpler ones, which include:
  * Booleans - true or false
  * Strings - groups of text characters
  * Numbers - integers
  * undefined - for vars without a value
  * null - intentional absence of any value
* **Reference** means the data stored is looking to another place in memory to find the needed values. Copying data stored by reference isn't passing on a direct copy of the data, it's passing the reference to that data. That means changing one copy will change the reference, and thereby change everything using that same reference. Data types stored by reference are:
  * Objects
  * Arrays
  * Functions

Data types with values are also called **Primitive Data Types.** Data types with references are technically all **Objects**, although they're still often referred by their specific names. They're basically the same thing and can be called either one, but Primitives and Objects are common and simpler ways to name them.

## Changing Data

A basic example of how Primitives work is below. When assigning variables with values to other variables, you can change each independently of each other.

```javascript
let number = 42;
let anotherNumber = number;

number = 55;

console.log(number);        // 55, has changed
console.log(anotherNumber); // 42, has not changed
```

This independence doesn't hold true for Objects. They both reference the same array, so changing one array winds up changing both of them.

```javascript
let array = [1, 2, 3, 4];
let secondArray = array;

array.push(5);

console.log(array);
// [1, 2, 3, 4, 5]
// Changed, as expected

console.log(secondArray);
// [1, 2, 3, 4, 5]
// Also changed since it uses the same references
```

Note this also applies when passing Objects into functions. Using code directly on the variable passed in will affect the reference. A way around this is to assign values to a new Object, using the values from the passed object to calculate them when needed. This will create a new object with its own reference, which keeps the two objects from interfering with each other.

## Resources

* [Explaining Value vs. Reference in Javascript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
