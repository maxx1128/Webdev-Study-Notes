# Variable Hoisting

## Hoisting with ES5

`var` declarations and value assignments can be placed anywhere on a page. However, the variable declarations are "hoisted" automatically to the top of the page.

When you do a typical `var` declaration and assignment like this:

```javascript
console.log('Foo bar!');
var y = 5;
```

The code will move the actual declaration to the top, which is the "hoist."

```javascript
var y;
console.log('Foo bar!');
y = 5;
```

Because of this, you could technically call on the variable before it's declared when you wrote. So this:

```javascript
console.log(y);
var y = 5;
```

Translates to this, which will put `undefined` in the console instead of a code error.

```javascript
var y;
console.log(y);
y = 5;
```

Hoisting also means `var` doesn't necessarily need to be declared when assigning a value, since it will be declared when it's hoisted. A computer reading this:

```javascript
y = 5;
```

This will change to this once it gets hoisted:

```javascript
var y;
y = 5;
```

This is why the first code sample, although it looks invalid, actually becomes valid when it becomes the second version. This isn't necessarily a good thing, since it can create unexpected complexity or bugs in the code.

This adds up to hoisting often causing bugs, or making bugs harder to find. Make it a habit of always declaring variables before use to avoid hoisting causing any unintended bugs.

## Hoisting in ES6

Avoiding this is easier with ES6, since the new variable declarations `let` and `const` are hoisted differently. Technically hoisting still takes place, but instead of returning `undefined` they return a reference error. Therefore even though they support hoisting, using them before their declaration causes more errors and therefore avoiding this is better enforced in the code.

## Hoisting Scope

ES5 variables are only hoisted up based on, and limited to, global and function scope. ES6 variables also hoist within block scope, which is another good reason to use them.

## Resources

* [JS Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
