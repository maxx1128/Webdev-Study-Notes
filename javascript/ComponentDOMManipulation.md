# Component DOM Manipulation

Javascript is often needed to add interaction and other logic to web components, and it's best to avoid using jQuery for this. This page details a basic pattern for achieving and managing this.

## Setting Up Without the Global Namespace

The first step is making sure the webpage will run the function properly. A rule of thumb is avoiding the global namespace. One trick is adding a namespaced variable to the global `window` variable so it doesn't leak.

```javascript
(function() {
  const Component = window.Component || {};

  Component.activate = () => {

  };

  window.Component = Component;
})();

```

This setup automatically creates `Component` on the global `window` object when it runs on the browser. All functions being run should be built off of `Component`, like the way `activate` is in the example.

## Activate The Component When the Page is Ready

In most cases, you'll want your JavaScript functionality to attach to this component once the page loads. There it can run initial operations and attach event listeners as needed. You can do this by adding the following code to `activate`.

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  // initializers and event listeners run here!
});
```

This all relies on you including the script tag in the webpage and running the needed function, like so.

```html
<script src="path/to/file.js"></script>

<script>
  window.Component.activate();
</script>
```

There's one last thing to take care of, and that's making sure your JS is attached to the right component. Or even many instances of the same component.

## Add Events to All Component Instances

For the sake of the example, let's say there's potentially multiple instances of your component on a webpage. We want our JS to attach to all instances without overlap. There's a few steps needed to achieve this.

First, we need to use `querySelectorAll` to get an array of all the instances it finds on the DOM.

```javascript
const components = querySelectorAll('.component-class');
```

Second, we can write a function that can quickly apply a function to all component instances. This can be combined with the preview selected variable to keep the scope in check.

```javascript
const addComponentEvent = (event) => {
  const components = querySelectorAll('.component-class');
  components.forEach(c => event(c));
}
```

We can now use this function to quickly add event listeners to all instances of our component! As a basic test, let's use it in our basic `activate` function to console.log when the component is clicked. Here we'll define the event listener first, then apply it to the elements.

```javascript
const addComponentEvent = (event) => {
  const components = querySelectorAll('.component-class');
  components.forEach(c => event(c));
}

Component.activate = () => {
  const clickListener = (c) => c.addEventListener('click', () => console.log('You clicked the component!'));
  addComponentEvent(clickListener);
};
```

With this setup, all your components have the right click events attached! Each will trigger separately from the other.

Adding initializing functions that need to run right away can be run with similar functions. Just don't include the event listener.

```javascript
Component.activate = () => {
  const componentInit = (c) => console.log('You clicked the component!');
  addComponentEvent(componentInit);
};
```

You may want to change `addComponentEvent` to something more generic, or even make separate functions for event listeners or code that runs right away. But the same principle of using a function that loops through all instances in the DOM for you still applies.
