# Controllers

`computed` gives access to different included Ember functions for presenting or manipulating info provided by the router. A simple example:

{% highlight javascript %}{% raw %}
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    multiplied_number: computed('model.number', function() {
        let number = this.get('model.number');
        let mult = 3;

        return number * mult;
    })
});
{% endraw %}{% endhighlight %}

It also lets you `filter` or `map` results to narrow them down or manipulate large amounts at once.

{% highlight javascript %}{% raw %}
import { computed } from '@ember/object';

english: computed.filter('model.entries', function(entry) { // Entry is each item in "model.entries"
    return entry.language == 'english'; // Only returns items that are English
}),

elements: computed.map('model.elements', function(element) {

    return `${element} is an element!`;
});
{% endraw %}{% endhighlight %}

A simpler option for filtering is the `filterBy` option, which doesn't take a function. It simply takes three properties:

1. The array to filter
2. The property of each item in the array to check for the filter
3. The value each selected property needs to be included. Otherwise it gets filtered out.

{% highlight javascript %}{% raw %}
import { filterBy } from '@ember/object/computed';

  livingRelatives: filterBy('model', 'alive', true)
{% endraw %}{% endhighlight %}

If you need to return a basic property of another object, you can use the `alias` macro.

{% highlight javascript %}{% raw %}
import { alias } from '@ember/object/computed';

  members: ["Jeff", "Joe", "John", "Jim", "Jed"],
  crowd_size: alias('members.length')
{% endraw %}{% endhighlight %}

To input an array of items from an object for a computed property, you can use `@each`.

{% highlight javascript %}{% raw %}
import { computed } from '@ember/object';

  average_number: computed('data.@each.number', function(){
    let length = this.get('data.length');
  })
{% endraw %}{% endhighlight %}

There's several [other useful functions that can be imported from `@ember/object/computed`](https://emberjs.com/api/ember/release/modules/@ember%2Fobject) for fast, computed values in controllers.

* `and` for doing a logical "and" comparison, that returns true if both values also return true
* `bool` for returning the dependent boolean of a variable
* `collect` for returning the values of other dependent properties (ie an array of values from other computed properties)
* `empty` and `notEmpty` for if a value is null or a type of empty value, like an empty string (or the opposite with `notEmpty`)
* `gt`, `gte`, `lt`, and `lte` for doing basic greater than and less than calculations, with possible equal to's too
* `interect` for, when using 2+ arrays as args, returning an array of all values they have in common
* `max` and `min` for calculating the max or min values in an array
* `not` for checking if a boolean argument is false (if the variable is `false`, it returns `true`)
* `or` for doing a logical "or" comparison, that returns true if one value returns true
* `sort` for organizing an array in descending or ascending order based on one of the properties
* `sum` for adding up all the values in an array
* `union` and `uniq` for getting all the unique values in one or more arrays
* `uniqBy` for arrays of objects, determining uniqueness by a specific key

## transitionToRoute

This is a controller tool to move to different routes after an action. For example, you could have this activate on an "edit" screen to go back to the related "show" screen. Don't forget to pass any needed parameters!

Another good use case: after deleting an item, go to the page with the list of remaining items.

{% highlight javascript %}{% raw %}
this.transitionToRoute('fighters.fighter', this.get('model.id'));
{% endraw %}{% endhighlight %}

## toggleProperty

In controllers, you can use Ember's `toggleProperty` method to quickly change a boolean value to its opposite. It works for both controller or Ember object values, like so:

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}

## Using Properties and Actions from other Controllers

For child or parent controllers, you need to `inject` them into the controller. Then you access them through the namespace you select.

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}
