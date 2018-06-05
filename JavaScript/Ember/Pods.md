# Pods

Pods are more encapsulated sections of Ember code that have their own controllers, routes, and even nested pods. This makes it easy to encapsulate different sections separate from the main application and reference them.

## Creating Pods

You'll need to add the directory for your pods in the `config/environment.js` file. It's set with the `podModulePrefix` property, and is set to match with the `modulePrefix`, like so:

```
let ENV = {
  modulePrefix: 'pods-practice',
  podModulePrefix: 'pods-practice/pods',

  ...
}
```

You can then add a basic pod by using the basic `ember generate` command with the `--pod` argument. For example, use `ember g <route|controller> test-pod --pod` to create a pod. You can add or remove the pieces, like routes/templates/controllers, and they'll function properly because Ember.

## Referencing Pods

Pods can be referenced in two main ways: templates and routes.

Let's say we have a pod in `pods/slide-1`, which has a template and controller. You can have it shown directly through the router like so:

```
Router.map(function() {
  this.route('slide-1');
});
```

Then just head to `localhost:4200/slide-1` and you'll see it. You can reference it with a `link-to` helper with the same string.

You can also embed a pod directly in another pod or different template, in this case with `{{slide-1}}`. Nested pods would be `{{slide-1/subslide-1}}`. Just know that the controllers or route being carried won't translate as smoothly and may need to have different versions of properties or actions in the controller of the template importing it. So this is best used for pods only carrying different templates.
