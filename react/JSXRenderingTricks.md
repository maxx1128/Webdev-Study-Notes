# JSX Rendering Tricks

Useful ways to control how React templates or components are rendered

## Using .map()

`map` is one of the most common and useful ways to generate a list of elements in a component. The logic can be embedded in the JSX with an arrow function.

```javascript
return (
  <ul>
    {users.map(user => <li>{user.name}</li>)}
  </ul>
);
```

This can even be stacked with other methods, like `filter` and [many other JS array methods](./../ArrayMethods.md).

```javascript
return (
  <ul>
    {users
      .filter(user => user.isDeveloper)
      .map(user => <li>{user.name}</li>)
    }
  </ul>
);
```

## Returning Null

If part of, or the entirety of, a component is conditional, you can cancel the rending just be returning `null` at any point.

* Returning `null` before any JSX is returned cancels the entire component. It should be in a conditional, such as returning `null` is an array to be looped through is empty.
* Returning `null` inside the returned JSX cancels out all the JSX in the contained bit of JS where it's called.

```javascript
return (
  <div>
    {
      isAdmin ? (
        <ul>
          {accounts.map(account => <li>{account.name}</li>)}
        </ul>
      ) : (
        null   // Could also be fallback html, such as <p>You're not an admin!</p>
      )
    }
  </div>
);
```

If it's only a one-way conditional, you can adjust the operator like this so it's simpler.

```javascript
return (
  <div>
    {
      isAdmin && (
        <ul>
          {accounts.map(account => <li>{account.name}</li>)}
        </ul>
      )
    }
  </div>
);
```
