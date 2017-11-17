
* Router - Controls where the URL requests are directed, and any parameters related to them.
* Routes - A route is set based on where the router sends a user based on the URL. Gets the underlying data for the page.
* Controllers - Manages and manipulates the data provided to a page by the router. Also handles different events.
* Templates - Outputs and displays the final data for a page.
* Modules of functionality and templates that can be reused across the project.
* Models - Basic models and structure for data objects.

### Basics

Ember was first built on **two-way data-binding,** which has the templates and controllers having two-way conversations at all times. However having them both talk to each other all the time risks making the app overly-complex, and having variables create unexpected results.

The new Ember structure for all this is **data down, actions up.** This means all data flows down from the routes to the views, and actions change the data by moving back up towards the controllers/routers, making data changes, and having those changes flow back down to the views.

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

Specific routes can be [assigned to certain paths](https://emberigniter.com/building-user-interface-around-ember-data-app/) in the main router file:

```
Router.map(function() {
  this.route('books', { path: '/' });
  this.route('author', { path: '/author/:author_id' });
});
```

Route parameters are the ones with the colon prepended. They can be accessed in the model by including the `params` argument in the function.

```
model(params) {
  return this.store.findRecord('author', params.author_id);
}
```

You can also grab values set or computed in the controller with the below method. This is great for creating router actions bound to values calculated in the controller, such as calculating if all items in a model have been displayed.

```
this.controllerFor('<controller_name>').get('<property_name>');
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

#### Inputs

The most basic way to bind an input to a variable is with `{{input value=var}}`, which will then bind the input's text to the `var` variable.

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

### Helpers

Basic `{{if}}` helper evaluates the variable/expression inside it and returns based on if it's true or false. A basic example is `{{if var 'TRUE STRING' 'FALSE STRING'}}`. The resulting string for if it's false is optional.

There's also a block version of this helper with the following syntax (the `else` is optional).
```
{{#if var}}
  Show me if true!
{{else}}
  Show me if false!
{{/if}}
```

The `action` helper is used for triggering interactivity. The first argument is a string that names the action linked to the controller. The controller has an `actions` hash, where functions with those names contain the action's functionality.

```
// Template
<button {{action 'buttonClick'}}>Click me!</button>

// Controller

export default Ember.Controller.extend({
  actions: {
    buttonClick() {
      // action code goes here!
    }
  }
});

```

The controller's function can contain arguments. These arguments are added to the helper as additional variables after the first.

### Connecting an API

* **Adapter** - Used to translate the endpoint locations of an API
* **Serializer** - Used to translate the content of an API. The recommended default is the JSONAPI Serializer
* Serializers and Adapters can also be used differently for specific applications or models
* Make sure the resources being exposed to Ember match the models being used in Ember!
* The most preferred API format is JSON API, despite the other adapters and serializers that make using other APIs possible. If you can control the API being used, make it JSON API.

#### Using FireBase

1) Set up a FireBase account and a database
2) Manually add in data to the database
3) Install `emberfire` through the CLI, `ember install emberfire` or `ember install emberfire@<version#>`
3) Copy the config info from FireBase and add it to `config/environment`. This may vary depending on the version of Ember Data, and as a consequence what version of Ember Fire is needed.
4) Generate a model that matches the data structure of what's in FireBase
5) Use Ember Data to pull data from the database, such as with `return this.store.findAll('items')`
6) When setting different values to the data, remember to call the `save()` method:

```
actions: {
  changeData(object) {
    Ember.set(object, 'name', newValue);  // Sets it on the browser
    object.save();                        // Saves changes to the database
  }
}
```

### Useful add-ons

* ember-modal-dialog - Simple way to create basic modals
* ember-route-action-helper - Lets components trigger actions defined by the route
* active-model-adapter - Adapter designed to integrate with a Rails API