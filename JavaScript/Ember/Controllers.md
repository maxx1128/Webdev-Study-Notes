# Controllers

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

## transitionToRoute

This is a controller tool to move to different routes after an action. For example, you could have this activate on an "edit" screen to go back to the related "show" screen. Don't forget to pass any needed parameters!

Another good use case: after deleting an item, go to the page with the list of remaining items.

```
this.transitionToRoute('fighters.fighter', this.get('model.id'));
```

## toggleProperty

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

## Using Properties and Actions from other Controllers

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
