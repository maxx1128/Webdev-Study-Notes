# Components

The controllers have a few common, helpful properties.

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}

Like controllers, you can also define other calculated properties, such as ones with variables specific to the component.

### Class Name Bindings

Normal class name bindings can link a class to a parameter. If you want to link multiple classes to a state in this way, you'll need to use it with a computed property.

{% highlight javascript %}{% raw %}
export default Component.extend({
  tagName: 'div',
  classNames: 'element',
  classNameBindings: ['huge'],

  huge: computed('isHuge', function(){
    return (this.get('isHuge') ? 'element--huge element--dark' : '');

    // If the `isHuge` attribute is set, those classes will be added. If not, no classes are added.
    // The second string can have classes so they're added by default if the attirbute is ignored.
  });
});
{% endraw %}{% endhighlight %}

## Adding Positional Parameters

When using components that have params, they normally need to be explicitly named to add values to them:

{% highlight javascript %}{% raw %}
{{svg-icon src=model.src size="medium"}}
{% endraw %}{% endhighlight %}

However, if one or more parameters is self-explanatory/needed enough that it doesn't need to do this, one can adjust the class so the paramters can be added without them. Add `reopenClass` to the component controller like this:

{% highlight javascript %}{% raw %}
import Component from '@ember/component';

export default Component.extend({
  // Normal functions here
}).reopenClass({
  positionalParams: ['src', 'size'] // Must be an array, with the param names as strings in the right order
});
{% endraw %}{% endhighlight %}

Now the same component can be used like the below example. Optional params could still be added to this but not be included.

{% highlight javascript %}{% raw %}
{% raw %}
  {{svg-icon model.src "medium"}}

  {{svg-icon model.src}} // If 'size' is optional
{% endraw %}{% endhighlight %}

## Block Components

Block components allow components to accept lines of text as a large argument for the component. They're written with two tags, like so:

{% highlight javascript %}{% raw %}
{{#my-component data=model.item class="class class-two"}}
  <h3>
    Header in the block!
  </h3>

  <p>
    I am text that also goes in the component's block.
  </p>
{{/my-component}}
{% endraw %}{% endhighlight %}

In the component template, everything in the block will appear where the `yield` statement is used.

{% highlight javascript %}{% raw %}
<h2>
  I am text part of every instance of this component.
</h2>

{{yield}}
{% endraw %}{% endhighlight %}

If the block is an optional argument, there's a conditional for if one is used or not. This can be if a component will use a regular argument (as part of) text if a block isn't used, similar to the `{{link-to}}` helper.

{% highlight javascript %}{% raw %}
<h2>
  I am text part of every instance of this component.
</h2>

{{#if hasBlock}}
  {{yield}}
{{else}}
  <p>
    Some default component text with a little dynamic info, like {{data.name}}.
  </p>
{{/if}}
{% endraw %}{% endhighlight %}

## Using Component Variables and Actions in Blocks

You can also take values defined in the component and pass them into a block component. That way you can use them in your block HTML for display or logic. First the values being passed must be set in the `{{yield}}` text.

{% highlight javascript %}{% raw %}
{{yield 'static string' variable}}
{% endraw %}{% endhighlight %}

Then the values will be referenced, in order, in the block statement for the component.

{% highlight javascript %}{% raw %}
{{#my-component src=model.src as |string var| }}
  <p>
    After passing in other arguments the component needs above, block arguments are referenced in the pipes like so.
  </p>

  <p>
    Now I can use {{string}} to show that static string, and also use {{var}} to show that dynamic variable (which could be different depending on what is in the 'src' value).
  </p>
{{/my-component}}
{% endraw %}{% endhighlight %}

You can also pass in actions from the component into the block, although it's not as simple. First define said action:

{% highlight javascript %}{% raw %}
import Component from '@ember/component';

export default Component.extend({
  available: true,

  actions: {
    toggleAvailability(){
      this.toggleProperty('available');
    }
  }
});
{% endraw %}{% endhighlight %}

The component will then need to yield the component itself, using `this`, in addition to anything else being yielded. This example yields a component variable and then the action.

{% highlight javascript %}{% raw %}
{{yield available this}}
{% endraw %}{% endhighlight %}

These can then be referenced as arguments for the component block, and used in the block itself. The `action` helper will need the `target` argument to specify the action is in the component controller. Otherwise it will, by default, look for it in the current template's controller.

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}

## Component Extending

You can make a base component and then extend other components off it. If you have a group of components that need to have several functions in common, this lets you have a single source of truth for them all.

{% highlight javascript %}{% raw %}
// my-base-component.js
export default Ember.Component.extend({
   classNames: "my-base-component"
});
{% endraw %}{% endhighlight %}

You can then import it and use it as the base for another.

{% highlight javascript %}{% raw %}
import MyBaseComponent from 'app/components/my-base-component'; // <- import base component

// my-other-component.js
export default MyBaseComponent.extend({ // <- extend your base component
});
{% endraw %}{% endhighlight %}

When you load up the other component, the `classNames` will be defined by default from the base component. You can override it if needed.
