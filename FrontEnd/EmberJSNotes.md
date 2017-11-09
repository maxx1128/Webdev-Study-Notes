
* Router - Controls where the URL requests are directed, and any parameters related to them.
* Routes - A route is set based on where the router sends a user based on the URL. Gets the underlying data for the page.
* Controllers - Manages and manipulates the data provided to a page by the router. Also handles different events.
* Templates - Outputs and displays the final data for a page.
* Modules of functionality and templates that can be reused across the project.
* Models - Basic models and structure for data objects.

### CLI commands

* `ember new <name>` - Create a new Ember project
* `ember build` - Builds a current project to the `dist` folder
* `ember serve` - Runs the project's development server
* `ember test` - Runs project's test
* `ember generate <"route", "controller", "model", etc> <name>` Generates an additional component, can include a file path as part of the name.
* `ember generate --help` to see all the options for what can be generated.

### Routes

The `model` function is what's used to get info from the data source and is passed onto the controller. Reference it in the controllers and templates by using the `model` variable.

Get any current parameters in the URL by referencing them in the `model()` function.

```
export default Ember.Route.extend({
  model: function(params) {

    let parameter = params.parameter_id; // Defined in the router
  }
});
```

### Controllers

`Ember.computed` gives access to different included Ember functions for presenting or manipulating info provided by the router. A simple example:

```
export default Ember.Controller.extend({
    multiplied_number: Ember.computed('model.number', function() {
        let number = this.get('model.number');
        let mult = 3;

        return number * mult;
    })
});
```

It also lets you `filter` or `map` results to narrow them down or manipulate large amounts at once.

```
english: Ember.computed.filter('model.entries', function(entry) { // Entry is each item in "model.entries"
    return entry.language == 'english'; // Only returns items that are English
}),

elements: Ember.computed.map('model.elements', function(element) {

    return `${element} is an element!`;
});
```

### Templates


### Components

The controllers have a few common, helpful properties.

```
export default Ember.Component.extend({
    tagName: 'span', // HTML tag around it
    classNames: ['class-name'], // Static class names to use
    classNameBindings: ['dynamic-class'], // Classes using dynamic info

    dynamic-class: Ember.computed('variable', function(){
        return 'class-start--' + this.get('variable');
    });
})
```

Like controllers, you can also define other calculated properties, such as ones with variables specific to the component.

