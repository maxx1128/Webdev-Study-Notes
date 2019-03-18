---
group: ember
layout: post

title: Helpers
descr: Using built-in and custom Ember helpers to save time
---

Basic `{{if}}` helper evaluates the variable/expression inside it and returns based on if it's true or false. A basic example is:

{% highlight javascript %}{% raw %}
{{if var 'TRUE STRING' 'FALSE STRING'}}
{% endraw %}{% endhighlight %}

The resulting string for if it's false is optional.

There's also a block version of this helper with the following syntax (the `else` is optional).
{% highlight javascript %}{% raw %}
{{#if var}}
  Show me if true!
{{else}}
  Show me if false!
{{/if}}
{% endraw %}{% endhighlight %}

The `action` helper is used for triggering interactivity. The first argument is a string that names the action linked to the controller. The controller has an `actions` hash, where functions with those names contain the action's functionality.

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}

The controller's function can contain arguments. These arguments are added to the helper as additional variables after the first.

## "Link-to" Helper

The `{{link-to}}` helper is an Ember tool included for linking between different pages. It works for both static and dynamic urls, lettings you include as needed parameters.

{% highlight javascript %}{% raw %}
{{link-to <text> <route path> <route parameter values>...}}

{{link-to "Homepage" home}} // Assumes an existing route called home

{{link-to character.name character.profile character.id}} // Shows the character's name for text, goes to the 'character/:profile' route, and uses the character's id as the argument for :profile

{{link-to character.name character.profile.food character.id character.food}} // Same as the above, but includes an extra argument for a specific character's food
{% endraw %}{% endhighlight %}

Links that match the route currently being visited (it goes up the path to match, so parent routes are active too) will have the "active" class on them. This can be used to denote the active link with styles, such as bolding it.

The "active" class can be changed like so:

{% highlight javascript %}{% raw %}
{{link-to "Homepage" home activeClass="custom_active_class"}}
{% endraw %}{% endhighlight %}

If you need a wrapper around a link to have the active class, use the [Ember Active Link Wrapper](https://github.com/alexspeller/ember-cli-active-link-wrapper) add-on. It can also have a custom active class, and the wrapping tag can be set too.

{% highlight javascript %}{% raw %}
{{#active-link tagName="div" activeClass="custom_active_class"}}
  Link below!
  {{link-to "some page" page.link}}
{{/active-link}}
{% endraw %}{% endhighlight %}

## Custom Helpers

Custom helpers can create different ways to evaluate JS in templates. They're very useful for custom logic that can't be put in the template, but also are a chore to put in the controller. **If the same logic must be used in a helper and a controller, abstract it to something else, like a service of a pure function.**

An example generating command and helper:

`ember g helper equals`

In the `helpers/equals.js` file, you can define how the params input into the helper will be evaluated. They can evaluate to any output a JS function can, including true/false ones to be used in conditionals.

{% highlight javascript %}{% raw %}
import { helper } from '@ember/component/helper';

export function equals(params/*, hash*/) {
  return params[0] == params[1];
}

export default helper(equals);
{% endraw %}{% endhighlight %}

This will take two arguments, check if they equal each other, and evaluate from there. A good example is using the above helper to control if a button is disabled or not. This button decreases a rating variable, and will disable the button if the rating is zero to keep it from getting any lower.

{% highlight javascript %}{% raw %}
<button {{action 'updateRating' rating -1}} disabled={{equals rating 0}}>-</button>
{% endraw %}{% endhighlight %}

Custom helpers can also be used as arguments for components, with the following syntax, using parenthesis when inside the component's double brackets (subexpressions).

{% highlight javascript %}{% raw %}
{{#complex-input
    inputShown=(equals rating 0)}}
{% endraw %}{% endhighlight %}

This also works for conditionals in `if` helpers.

{% highlight javascript %}{% raw %}
{{#if (equals total_score 100)}}
  You got a perfect score!
{{else}}
  No perfect score for you :(
{{/if}}
{% endraw %}{% endhighlight %}

Subexpressions can also be stacked.

{% highlight javascript %}{% raw %}
(equals (rounded test_score) 95) // Rounds a value, then sees if it equals 95
{% endraw %}{% endhighlight %}

## Parameters

You can better organize a helper's parameters using ES6 Destructuring, giving them names and defaults. The above one comparing values could be rewritten as this, with the second having a default.

{% highlight javascript %}{% raw %}
export function equals([value_1, value_2 = 0]) {
  return value_1 == value_2;
}
{% endraw %}{% endhighlight %}

The last parameter in the helper function can be a hash, which is great for having optional arguments. They will be added by name in the helper, and can also have defaults.
{% highlight javascript %}{% raw %}
export function equals([value_1, value_2 = 0], {item_1, item_2 = 'Lorem'}) {
  return value_1 == value_2;
}

// Example
// equals(1, 2, item_1 = 'Fake info', item_2 = 777)
{% endraw %}{% endhighlight %}

## Returning HTML

Ember has a helper for returning HTML, which can be used in custom helpers like below:

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}
