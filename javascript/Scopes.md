# Scopes

Scope refers to the specific area a code of JavaScript has "access" to. If two sections of JS code are in the same scope, then they can access each other - different scope means they can't.

There's several types of scopes to know:

* **Global Scope** - Global scope refers to code can be accessed anywhere else, even separate functions. Global scope should be avoided as much as possible, since it greatly increases the risk of code "leaking out" to unexpected areas with unexpected (and often bad) results.
* **Function Scope** - Function scope refers to code that can only be accessed in a specific function. Variables declared in a function can only be accessed from within that function. Trying to call these variables from the global scope will result in an `undefined` error.
* **Block Scope** - Block scope was formally introduced with ES6, and refers to code only in certain operation "blocks," like `if` statements or for loops. Block scope variables must be declared with `let` or `const`.

This is generally easy to understand, but can get confusing when you use `var`, which isn't block-scoped. Declaring a variable in the global scope, and declaring another with the same name in a block, will override the global variable since there's no block scope.

```javascript
var myName = "Earl";

if (2 === 2) {
  var myName = "Crystal Soul-Eater";
}

console.log(myName); // "Crystal Soul-Eater"
```

If we used `let` instead of `var`, the second declaration would be block-scoped and not overwrite the global one. The `console.log` would then return `"Earl"`.

## Resources

* [JavaScript Scopes and Closures](https://css-tricks.com/javascript-scope-closures/)
* [The battle between function scope and block scope](http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)
