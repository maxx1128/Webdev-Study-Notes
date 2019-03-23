# Expressions and Statements

Expressions and statements are used in virtually all parts of JavaScript code, so understanding the differences and what they do helps greatly in avoiding common mistakes. In simplest terms:

* **Expressions** return values
* **Statements** perform actions

A JavaScript file could have dozens of expressions that create different values, but won't actually do anything without statements to use them in. Expressions will give you different numbers, statements will add them together and return the solution at the end.

## Types of Expressions

### Arithmetic

These return integer values. These can be integers on their own, or calculations that return the result of them in the end.

```javascript
20       // 20
20 * 5   // 100
```

### String

These return strings. They can be strings on their own or concatenated strings.

### Logical

Logical expressions compare two values in some way, and the result of this comparison returns a boolean.

```javascript
100 === 100             // true
100 < 100               // false
true && false           // false
true || false           // true
(10 === 10) && (9 > 8)  // true
```

### Primary

These are simple standalone values, also known as literal values. Just using `15` or `'I am a string'` are both primary expressions.

### Assignment

These use the `=` operator to assign values to variables. This doesn't include `var`, `let`, or `const` if they're being used, and would only be somelike like `total = 123`. Even with `const total = 123`, only `total = 123` would be the assignment expression.

## Types of Statements

### Declaration

These create variables and functions, respectively.

```javascript
const number;

function logSeven() {
  console.log(7);
}
```

### Expression

These are statements that have expressions substituted inside them. Expression statements will resolve their expressions, and then carry out the statement accordingly.

```javascript
const number = (5 + 5);
// The resolved expression in this expression statement translates to the below statement
const number = 10;
```

These are useful for statements that rely on changing or more volative values, by writing the expression in a flexible way.

### Conditional

These run statements based on different expressions. If the expression resolves to a truthy value, the statement is executed. For an `if..else` statement, another statement will be run even if the expression is falsey.

```javascript
if (true && true) {
  // Statement here is run since above expression is true
}

if (true && false) {
  // Statement here isn't run since above expression is false
} else {
  // Statement here runs instead
}
```

### Loops and Jumps

Loop statements are statements run in different `for` or `while` javascript loops, and are therefore run multiple times which may or may not change with each iteration (based on index or a common variable).

Jump statements, meanwhile, are statements used in syntaxes like `switch` statements which jump to a specific statement(s) on a certain condition. This separates them from conditional statements, which instead go down a list of conditions and stop at the first matching one.

## Resources

* [JavaScript Expressions and Statements](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
