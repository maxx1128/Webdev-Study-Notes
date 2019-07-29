# 'this'

The `this` keyword is basically a shortcut reference to the object where it is being called. This is determined entirely on the call-site, which is simply the object `this` is being used in.

There's three basic bindings that will determine exactly what object `this` gets bound to.

## Global Binding

By default, `this` is bound to the program's global object. For browsers and Node environments, this will basically be the window object. This should usually be avoided.

## Implicit Binding

Calling `this` in any sort of object means it will refer to that instead, since that's the call site.

```javascript
const hulk = {
  name: 'Hulk',
  attack: 'Smash',

  scream: function() {
    console.log(`${this.name} ${this.attack}!!!`)
  }
}

hulk.scream(); // Hulk Smash!!!
```

Calling `this.name` in the call-site is basically the same as calling `hulk.name` outside of it. This lets you reference code inside the call-site, letting `this` easily adjust to any data dependent on context or closure data. Just know that `this` can only be used in functions or other code definined _within_ the call site.

Note that `this` won't be bound the same way with arrow functions, since they can never be bound to `this`. They'll default to the lexical scope. This variable is at the root of the file, so using an arrow function like the one below would be `undefined`.

```javascript
const hulk = {
  name: 'Hulk',
  attack: 'Smash',

  scream: () => console.log(`${this.name} ${this.attack}!!!`)
}
```

## Explicit Binding

If there's no implicit object for `this` to reference, one can be assigned with a few potential function calls.

### .call() and .apply()

You can use either of these two on a function that uses `this` while passing in the object it'll use as the call-site. You can also pass in other arguments the function may need afterwards as a variable spread (`.call`) or in an array (`.apply`).

```javascript
function saySomething(message) {
  console.log( `${this.name} says "${message}"` );
}

const person = {
  name: 'Maxwell'
};

const announcement = "Watch Big Hero 6!";

saySomething.call(person, announcement);
saySomething.apply(person, [announcement]);
// Both return the following:
// Maxwell says "Watch Big Hero 6!"
```

### .bind()

Bind operates similarly to the previous two methods, but differs in how it is called. This creates a new function with the passed object saved for `this`, and you then call that function afterwards.

```javascript
function say(message) {
  console.log( `${this.name} says "${message}"` );
}

const person = {
  name: 'Maxwell'
};

const MaxwellSays = say.bind(person);
// MaxwellSays is the 'say' function with
// 'person' bound to 'this'

const announcement = "Watch Big Hero 6!"; // Pass in needed args
MaxwellSays(announcement);
// Returns 'Maxwell says "Watch Big Hero 6!"'
```

## Resources

* [Understanding JavaScript: This Keyword](https://hackernoon.com/understanding-javascript-the-this-keyword-4de325d77f68)
* [Understanding the “this” Keyword in JavaScript](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
* [What is `this`? The Inner Workings of JavaScript Objects](https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a?pix=9_0_0)
