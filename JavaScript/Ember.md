
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
* `ember generate|g <"route", "controller", "model", etc> <name>` Generates an additional component, can include a file path as part of the name.
  * To create a route with a parameter, run `ember g route <parent_name>/<parameter_name> --path=':slug'`
* `ember generate --help` to see all the options for what can be generated.

### Routes

The `model` function is what's used to get info from the data source and is passed onto the controller. Reference it in the controllers and templates by using the `model` variable.

Get any current parameters in the URL by referencing them in the `model()` function.

```
import Route from '@ember/routing/route';

export default Route.extend({
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

##### Loading Multiple Models

If you need to load multiple models as a single promise object, the `RSVP.hash` tool lets you do this. It accepts a hash, where each value is a promise. This way you can have a promise activate once all the promises are resolved, such as a loading screen being toggled off.

```
import { hash } from 'rsvp';

model(params) {
  return hash({
    character: this.store.findRecord('character', params.character),
    teams: this.store.findAll('team')
  });
}
```

### Models

Models are how Ember manages properties of data objects. These are most frequently used with data coming from an API or other third-party, and controlled using the `ember-data` add-on. The basic setup of one looks like this:

```
import DS from 'ember-data';

export default DS.Model.extend({
  name     : DS.attr('string'),
  age      : DS.attr('integer'),
  alive    : DS.attr('boolean'),
  children : DS.hasMany('child'),
  parent   : DS.belongsTo()
});
```

Models can also use computed properties in case some values must be created using others. The properties put in as arguments, whenever they change, will update the computed properties. Just **don't change any values within computed properties!**

```
import { computed } from '@ember/object';

  full_name: computed('first_name', 'last_name', function(){
    return `Hello, my name is ${this.get('first_name')} ${this.get('last_name')}`;
  })
```

### Controllers

`computed` gives access to different included Ember functions for presenting or manipulating info provided by the router. A simple example:

```
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    multiplied_number: computed('model.number', function() {
        let number = this.get('model.number');
        let mult = 3;

        return number * mult;
    })
});
```

It also lets you `filter` or `map` results to narrow them down or manipulate large amounts at once.

```
import { computed } from '@ember/object';

english: computed.filter('model.entries', function(entry) { // Entry is each item in "model.entries"
    return entry.language == 'english'; // Only returns items that are English
}),

elements: computed.map('model.elements', function(element) {

    return `${element} is an element!`;
});
```

A simpler option for filtering is the `filterBy` option, which doesn't take a function. It simply takes three properties:

1. The array to filter
2. The property of each item in the array to check for the filter
3. The value each selected property needs to be included. Otherwise it gets filtered out.

```
import { filterBy } from '@ember/object/computed';

  livingRelatives: filterBy('model', 'alive', true)
```

If you need to return a basic property of another object, you can use the `alias` macro.

```
import { alias } from '@ember/object/computed';

  members: ["Jeff", "Joe", "John", "Jim", "Jed"],
  crowd_size: alias('members.length')
```

To input an array of items from an object for a computed property, you can use `@each`.

```
import { computed } from '@ember/object';

  average_number: computed('data.@each.number', function(){
    let length = this.get('data.length');
  })
```

##### transitionToRoute

This is a controller tool to move to different routes after an action. For example, you could have this activate on an "edit" screen to go back to the related "show" screen. Don't forget to pass any needed parameters!

Another good use case: after deleting an item, go to the page with the list of remaining items.

```
this.transitionToRoute('fighters.fighter', this.get('model.id'));
```

##### toggleProperty

In controllers, you can use Ember's `toggleProperty` method to quickly change a boolean value to its opposite. It works for both controller or Ember object values, like so:

```
actions: {
  propertyName: false,

  toggleEmberObject(object) {
    object.toggleProperty('booleanProperty');
    object.save(); // If using Ember data to connect object to backend data
  },
  toggleControllerProp() {
    this.toggleProperty('propertyName'); // Just needs "this" for controller
  }
}
```

##### Using Properties and Actions from other Controllers

For child or parent controllers, you need to `inject` them into the controller. Then you access them through the namespace you select.

```
// Application controller
export default Controller.extend({
  testInteger: 1,

  actions: {
    incrementInteger() {
      this.incrementProperty('testInteger');
    }
  }
});

// Any other controller
import { inject as controller } from '@ember/service';

export default Controller.extend({
  app: controller('application'),

  // All properties can be accessed over "app," such as "app.testInteger"

  actions: {
    originalIncrementInteger() {
      this.get('app').send('incrementInteger'); // You can also access the app controllers' actions this way
    }

    anotherIncrementInteger() {
      this.incrementProperty('app.testInteger', 2); // Adds two to the parent property
    }
  }
});
```

### Templates

##### Inputs

The most basic way to bind an input to a variable is with `{{input value=var}}`, which will then bind the input's text to the `var` variable.

### Components

The controllers have a few common, helpful properties.

```
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'span', // HTML tag around it
    classNames: ['class-name'], // Static class names to use
    classNameBindings: ['dynamic-class'], // Classes using dynamic info

    dynamic-class: computed('variable', function(){
        return 'class-start--' + this.get('variable');
    });
})
```

Like controllers, you can also define other calculated properties, such as ones with variables specific to the component.

##### Adding Positional Parameters

When using components that have params, they normally need to be explicitly named to add values to them:

```
{{svg-icon src=model.src size="medium"}}
```

However, if one or more parameters is self-explanatory/needed enough that it doesn't need to do this, one can adjust the class so the paramters can be added without them. Add `reopenClass` to the component controller like this:

```
import Component from '@ember/component';

export default Component.extend({
  // Normal functions here
}).reopenClass({
  positionalParams: ['src', 'size'] // Must be an array, with the param names as strings in the right order
});
```

Now the same component can be used like the below example. Optional params could still be added to this but not be included.

```
{{svg-icon model.src "medium"}}

{{svg-icon model.src}} // If 'size' is optional
```

##### Block Components

Block components allow components to accept lines of text as a large argument for the component. They're written with two tags, like so:

```
{{#my-component data=model.item class="class class-two"}}
  <h3>
    Header in the block!
  </h3>

  <p>
    I'm text that also goes in the component's block.
  </p>
{{/my-component}}
```

In the component template, everything in the block will appear where the `yield` statement is used.

```
<h2>
  I'm text part of every instance of this component.
</h2>

{{yield}}
```

If the block is an optional argument, there's a conditional for if one is used or not. This can be if a component will use a regular argument (as part of) text if a block isn't used, similar to the `{{link-to}}` helper.

```
<h2>
  I'm text part of every instance of this component.
</h2>

{{#if hasBlock}}
  {{yield}}
{{else}}
  <p>
    Some default component text with a little dynamic info, like {{data.name}}.
  </p>
{{/if}}
```

##### Using Component Variables and Actions in Blocks

You can also take values defined in the component and pass them into a block component. That way you can use them in your block HTML for display or logic. First the values being passed must be set in the `{{yield}}` text.

```
{{yield 'static string' variable}}
```

Then the values will be referenced, in order, in the block statement for the component.

```
{{#my-component src=model.src as |string var| }}
  <p>
    After passing in other arguments the component needs above, block arguments are referenced in the pipes like so.
  </p>

  <p>
    Now I can use {{string}} to show that static string, and also use {{var}} to show that dynamic variable (which could be different depending on what's in the 'src' value).
  </p>
{{/my-component}}
```

You can also pass in actions from the component into the block, although it's not as simple. First define said action:

```
import Component from '@ember/component';

export default Component.extend({
  available: true,

  actions: {
    toggleAvailability(){
      this.toggleProperty('available');
    }
  }
});
```

The component will then need to yield the component itself, using `this`, in addition to anything else being yielded. This example yields a component variable and then the action.

```
{{yield available this}}
```

These can then be referenced as arguments for the component block, and used in the block itself. The `action` helper will need the `target` argument to specify the action is in the component controller. Otherwise it will, by default, look for it in the current template's controller.

```
{{#my-component src=model.src as |available component| }}
  <h3>
    {{if available 'Available! Hooray!' 'Sorry, not available :('}}
  </h3>

  <p>
    Want to change the availability in this block?
  </p>

  <p {{action 'toggleAvailability' target='component'}}>
    Click here!
  </p>
{{/my-component}}
```

### Pods

Pods are more encapsulated sections of Ember code that have their own controllers, routes, and even nested pods. This makes it easy to encapsulate different sections separate from the main application and reference them.

##### Creating Pods

You'll need to add the directory for your pods in the `config/environment.js` file. It's set with the `podModulePrefix` property, and is set to match with the `modulePrefix`, like so:

```
let ENV = {
  modulePrefix: 'pods-practice',
  podModulePrefix: 'pods-practice/pods',

  ...
}
```

You can then add a basic pod by using the basic `ember generate` command with the `--pod` argument. For example, use `ember g <route|controller> test-pod --pod` to create a pod. You can add or remove the pieces, like routes/templates/controllers, and they'll function properly because Ember.

##### Referencing Pods

Pods can be referenced in two main ways: templates and routes.

Let's say we have a pod in `pods/slide-1`, which has a template and controller. You can have it shown directly through the router like so:

```
Router.map(function() {
  this.route('slide-1');
});
```

Then just head to `localhost:4200/slide-1` and you'll see it. You can reference it with a `link-to` helper with the same string.

You can also embed a pod directly in another pod or different template, in this case with `{{slide-1}}`. Nested pods would be `{{slide-1/subslide-1}}`. Just know that the controllers or route being carried won't translate as smoothly and may need to have different versions of properties or actions in the controller of the template importing it. So this is best used for pods only carrying different templates.

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
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    buttonClick() {
      // action code goes here!
    }
  }
});

```

The controller's function can contain arguments. These arguments are added to the helper as additional variables after the first.

##### "Link-to" Helper

The `{{link-to}}` helper is an Ember tool included for linking between different pages. It works for both static and dynamic urls, lettings you include as needed parameters.

```
{{link-to <text> <route path> <route parameter values>...}}

{{link-to "Homepage" home}} // Assumes an existing route called home

{{link-to character.name character.profile character.id}} // Shows the character's name for text, goes to the 'character/:profile' route, and uses the character's id as the argument for :profile

{{link-to character.name character.profile.food character.id character.food}} // Same as the above, but includes an extra argument for a specific character's food
```

Links that match the route currently being visited (it goes up the path to match, so parent routes are active too) will have the "active" class on them. This can be used to denote the active link with styles, such as bolding it.

The "active" class can be changed like so:

```
{{link-to "Homepage" home activeClass="custom_active_class"}}
```

If you need a wrapper around a link to have the active class, use the [Ember Active Link Wrapper](https://github.com/alexspeller/ember-cli-active-link-wrapper) add-on. It can also have a custom active class, and the wrapping tag can be set too.

```
{{#active-link tagName="div" activeClass="custom_active_class"}}
  Link below!
  {{link-to "some page" page.link}}
{{/active-link}}
```

##### Custom Helpers

Custom helpers can create different ways to evaluate JS in templates. They're very useful for custom logic that can't be put in the template, but also are a chore to put in the controller. **If the same logic must be used in a helper and a controller, abstract it to something else, like a service of a pure function.**

An example generating command and helper:

`ember g helper equals`

In the `helpers/equals.js` file, you can define how the params input into the helper will be evaluated. They can evaluate to any output a JS function can, including true/false ones to be used in conditionals.

```
import { helper } from '@ember/component/helper';

export function equals(params/*, hash*/) {
  return params[0] == params[1];
}

export default helper(equals);
```

This will take two arguments, check if they equal each other, and evaluate from there. A good example is using the above helper to control if a button is disabled or not. This button decreases a rating variable, and will disable the button if the rating is zero to keep it from getting any lower.

```
<button {{action 'updateRating' rating -1}} disabled={{equals rating 0}}>-</button>
```

Custom helpers can also be used as arguments for components, with the following syntax, using parenthesis when inside the component's double brackets (subexpressions).

```
{{#complex-input
    inputShown=(equals rating 0)}}
```

This also works for conditionals in `if` helpers.

```
{{#if (equals total_score 100)}}
  You got a perfect score!
{{else}}
  No perfect score for you :(
{{/if}}
```

Subexpressions can also be stacked.

```
(equals (rounded test_score) 95) // Rounds a value, then sees if it equals 95
```

##### Parameters

You can better organize a helper's parameters using ES6 Destructuring, giving them names and defaults. The above one comparing values could be rewritten as this, with the second having a default.

```
export function equals([value_1, value_2 = 0]) {
  return value_1 == value_2;
}
```

The last parameter in the helper function can be a hash, which is great for having optional arguments. They will be added by name in the helper, and can also have defaults.
```
export function equals([value_1, value_2 = 0], {item_1, item_2 = 'Lorem'}) {
  return value_1 == value_2;
}

// Example
// equals(1, 2, item_1 = 'Fake info', item_2 = 777)
```

##### Returning HTML

Ember has a helper for returning HTML, which can be used in custom helpers like below:

```
import { htmlSafe } from '@ember/string';

export function heading([text, heading_size = 2], {class}) {
  return htmlSafe(`
    <h${heading_size} class='${class}'>
      ${text}
    </h${heading_size}>
  `);
}

// heading('Header Text', 3, class = "blue-text")
// heading('More Header Text', class = "red-text")
```



### Services

Ember Services are objects whose information persists throughout different pages of the application. A common use of this is saving info about if a user is currently logged in and showing this across the site. It can also include lots of [other functionalities](https://guides.emberjs.com/v2.1.0/applications/services/) that must be persisted, such as geolocation, third-party APIs, and server-backed events.

Services can be created with the Ember CLI like most other things. For user sessions, this could be done with `ember g service session`.

A simple version of this service would be:

```
import Service from '@ember/service';

export default Service.Extend({
  current_user: null
});
```

Services then need to be injected into controllers to be available in them and the views. Once injected, they can be accessed as normal.

```
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.Extend({
  session: service(),
  mySession: service('session'), // If the key has a different name than the service, it must be specified like this

  actions: {
    login(user){
      this.set('session.current_user', user); // Updating a service value
    }
  }
});
```

You can then access the service value with `{{ session.current_user }}`.

### Connecting an API

* **Adapter** - Used to translate the endpoint locations of an API
* **Serializer** - Used to translate the content of an API. The recommended default is the JSONAPI Serializer
* Serializers and Adapters can also be used differently for specific applications or models
* Make sure the resources being exposed to Ember match the models being used in Ember!
* The most preferred API format is JSON API, despite the other adapters and serializers that make using other APIs possible. If you can control the API being used, make it JSON API.

##### Using FireBase

1) Set up a FireBase account and a database
2) Manually add in data to the database
3) Install `emberfire` through the CLI, `ember install emberfire` or `ember install emberfire@<version#>`
3) Copy the config info from FireBase and add it to `config/environment`. This may vary depending on the version of Ember Data, and as a consequence what version of Ember Fire is needed.
4) Generate a model that matches the data structure of what's in FireBase
5) Use Ember Data to pull data from the database, such as with `return this.store.findAll('items')`
6) When setting different values to the data, remember to call the `save()` method:

```
import { set } from '@ember/object';

actions: {
  changeData(object) {
    set(object, 'name', newValue);  // Sets it on the browser
    object.save();                  // Saves changes to the database
  }
}
```

Data returned from FireBase will often be in a `promise`, or data that's waiting to be given to the program. This could also show up if using `console.log` on a value shows `getter` and `setter` properties. If that's the case, you'll need to use the `get` object helper to access it once the promise returns the data.

This example has an array of data (`users_who_answered`) given from FireBase. When each item is used while looping through it with `reduce`, `get` is used with the property to get the specific data property value. Note that using `get` requires these two arguments: the promise object, and the property key to return the value of.

```
import { get } from '@ember/object';

const all_users = this.get('users_who_answered').reduce(function(usernames, user) {
  usernames.push(get(user, 'user_codename'));

  return usernames;
}, []);
```

### Useful Resources Add-ons

* [Ember Observer](https://emberobserver.com/) - A categorized list of useful ember plugins

* ember-modal-dialog - Simple way to create basic modals
* ember-xselect - Ember component for basic select/dropdown items
* ember-route-action-helper - Lets components trigger actions defined by the route
* ember-truth-helpers - Many helpers for extra comparative and conditional logic operations, such as `equals` and `or`. [Other useful template helpers are here.](https://emberobserver.com/categories/template-helpers)
* active-model-adapter - Adapter designed to integrate with a Rails API
