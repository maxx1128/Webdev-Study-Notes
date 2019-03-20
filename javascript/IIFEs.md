# Immediately Invoked Function Expressions

Immediately Invoked Function Expressions (IIFEs) are simply anonymous functions that are called right after they're defined. They're written the same as regular functions but

* Are wrapped in a pair of parenthesis
* Have parenthesis added to the very end

```javascript
(function() {
  // Function fun here
});
```

IIFEs let you invoke any needed logic or actions right away without calling a named function or variable. This is helpful since it:

* Is more easily read as something to execute right away and no where else, for example as "setup" to the rest of the program.
* The function's contents are scoped to within the function, preventing additions to the global namespace and name collisions.
* Making the function anonymous also prevents global namespace pollution.

## Creating Variables

IIFEs can be useful if complex logic must be saved to a variable, since all that logic can be written into the function and be scoped.

```javascript
const birthdayStatement = (function() {
  const name = "Maxwell",
        birthYear = 2019 - 24;

  return `${name} was born in ${birthYear}`;
})();

console.log(birthdayStatement);
// "Maxwell was born in 1995
```

You can also pass arguments to IIFEs if needed. The way they're passed in is tricky though, since:

* The outside arguments are added to the final set of parenthesis.
* The IFFE's parameters must also be named in the function call, and can have a different name if needed.

```javascript
const globalPerson = {
  name: 'Maxwell',
  birthYear: 1995
};

const ageStatement = (function (person) {
    const name = person.name,
          age = 2019 - person.birthYear;

    return `${name} is ${age} years old`;
})(globalPerson);

console.log(ageStatement);
// "Maxwell is 24 years old"
```

## Resources

* [An Introduction to IIFEs - Immediately Invoked Function Expressions](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html)
* [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
