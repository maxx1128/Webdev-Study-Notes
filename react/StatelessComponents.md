# Stateless Components

Stateless (or functional) React components are simpler than typical ones. They have no state or lifecycle hooks and are therefore much simpler.

Stateless is create for components that have little to no interactions.

```javascript
const StatelessComponent = () => (
  <div>
    <h2>I'm just plain markup!</h2>
  </div>
);
```

You can still pass them properties, and it's helpful to destructure them in the start for easier reference. These can be basic data types like strings or functions.

```javascript
const StatelessComponent = ({title, action}) => (
  <div onClick={this.action}>
    <h2>{title}</h2>
  </div>
);
```

You can still use JavaScript for extra logic or variables in the component, just nothing relying on state or lifecycle hooks. Just don't forget the extra brackets and the explicit return needed.

```javascript
const StatelessComponent = ({number}) => {

  const newNumber = number * 2;

  return (
    <div onClick={this.action}>
      <h2>{`Your old number was ${number}, and your new number is ${newNumber}`}</h2>
    </div>
  )
};
```
