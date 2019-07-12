# Tips And Tricks

## Balancing Static and Conditional SubStrings

Some strings, such as a group of class names, may have substrings which are always required and others that rely on a condition. A stable way to manage this is:

1. Having each string as an item in an array
2. Conditionally pushing other strings to this array
3. Merging all the strings together with a space using `join(' ')`

```javascript
const getClasses = (alert, small) => {
  let classes = ['padding-1', 'margin-2', 'blue-text'];

  if (alert) { classes.push('alert-border'); }
  if (small) { classes.push('small-text'); }

  return classes.join(' ');
}
```

This is more reliable that starting with a string, and then adding each substring to the string as needed. The latter approach means you have to make sure there's a space between each substring as needed, and the resulting spacing could still be inconsistent.

```javascript
const getClasses = (alert, small) => {
  let classes = '';

  if (alert) { classes += 'alert-border '; }
  if (small) { classes += 'small-text '; }

  return `${classes} padding-1 margin-2 blue-text`;
}
```

This technically returns the same thing, but is harder to scale and requires more work to maintain.

## Avoid Boolean Parameters

Unless the parameter specifically refers to an attribute taking a boolean, avoid using parameters that take booleans. These boolean parameters are inflexible and can start to pile up fast. A collection of booleans make the component hard to manage, and instances of it with all the booleans is harder to understand.

For example, don't use a boolean to trigger a certain element class. Instead use a parameter that takes in classes and pass the class itself.

## Avoid Object Parameters

Even if a function takes several arguments initially in one object, stick with individual parameters if there's up to four or five needed. This makes the function easier to read and more flexible.

```javascript
const hero = {
  name: 'Scott Lang',
  alias: 'Ant Man',
  power: 'Shrink to ant size'
}

const logHero = (name, alias, power) => {
  // Code here...
};

logHero(hero.name, hero.alias, hero.power);
```

If there's more than five parameters, or whatever number seems too high to really manage, passing object arguments is find if the function uses destructuring so it's still readable.

```javascript
const hero = {
  name: 'Scott Lang',
  alias: 'Ant Man',
  power: 'Shrink to ant size',
  past: 'Prison',
  crush: 'Hope',
  children: true
}

const logHero = ({name, alias, power, past, crush, children}) => {
  // Code here...
};

logHero(hero);
```

Default variables can also be used here to show examples of passed properties and which ones are optional.

```javascript
const logHero = ({
  name,
  alias,
  power,
  past: 'tragedy,
  crush: null,
  children: false
}) => {
  // Code here...
};
```

## Naming Variables

Use the following rules when naming variables to give them more consistent, understandable meaning.

* Functions: use verbs like `check` or `convert`
* Arrays: use plural nouns
* Booleans: prepend the name with `is` or `has`
* Array functions: when looping through elements, use something more descriptive instead of just `el` or `element`

## Resources

* [How to Avoid the “Boolean Trap” When Designing React Components](https://spicefactory.co/blog/2019/03/26/how-to-avoid-the-boolean-trap-when-designing-react-components/)
* [12 tips for writing clean and scalable JavaScript](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/)
