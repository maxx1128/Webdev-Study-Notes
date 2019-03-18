---
group: ember
layout: post

title: Custom Events
descr: Writing Ember events outside of the framework's built-in functions
---

Several times an app may require custom JavaScript outside of Ember's typical API. Thankfully, there's a way to implement these in vanilla JS in Ember controllers (and possibly others).

Let's walk through the basic steps with a common example: then you click outside of a dropdown menu, it should close.

### 1) Create Functions to Handle the Events

These functions should take an "event" parameters, and with that you can carry out a mix vanilla and Ember JS.

{% highlight javascript %}{% raw %}
closeDropdownOnOutsideClick(event) {
  const clickedDropdownButton = event.path.some(element => (element.classList) ? (element.classList.contains('dropdown-button')) : false);

  if (clickedDropdownButton) { return; }

  if (!this.get('isDestroyed') || !this.get('isDestroying')) { this.set('expandedMenu', false); }
}
{% endraw %}{% endhighlight %}

This function does a few things:

1. It checks if you've clicked the dropdown button, or any element within the dropdown button.
2. If you did click the button, it gives an empty `return` statement and nothing happens.
3. If you clicked outside the button, it checks to make sure the component/controller hasn't been destroyed (this can cause failing tests)
4. If nothing's been destroyed, it sets the controller property to 'false' that will shrink the menu.

Notice that the code handling the event object devoid of any Ember code, but Ember code can still be used elsewhere in the function such as with `this.set`. Keep this in mind so you don't use vanilla JS where other Ember code could make things easier.

### 2) Bind the Functions the Component Loads

You have the functions, now in our case they must be bound to the controller. These can usually be put in the `didInsertElement` hook so they're only added once the element is indeed in the DOM.

{% highlight javascript %}{% raw %}
didInsertElement() {
  this.set('boundCloseDropdownOnOutsideClick', bind(this, this.closeDropdownOnOutsideClick));
}
{% endraw %}{% endhighlight %}

This assumes you're on the most recent version of Ember as of this writing, 3.3, and are importing the `bind` method.

{% highlight javascript %}{% raw %}
import { bind } from '@ember/runloop';
{% endraw %}{% endhighlight %}

### 3) Create (and Delete) Event Listeners

With the function bound to the controller, we're free to easily set it with a basic event listener. This event listener will usually be placed in the `didInsertElement` hook too, and it could for this.

{% highlight javascript %}{% raw %}
didInsertElement() {
  this.set('boundCloseDropdownOnOutsideClick', bind(this, this.closeDropdownOnOutsideClick));
  window.addEventListener('click', this.boundCloseDropdownOnOutsideClick);
}

{% endraw %}{% endhighlight %}

Viola, the function closing our dropdown is now called on all click events in the window.

For this, we could try something different. If there's a likely action to toggle the dropdown's visibility, we can create the event listener after it's opened. We only need to wait for these kinds of events when the menu is open. after all.

{% highlight javascript %}{% raw %}
actions: {
  toggleMenu() {
    this.toggleProperty('expandedMenu');

    if (this.expandedMenu) {
      window.addEventListener('click', this.boundCloseDropdownOnOutsideClick);
    }
  }
}
{% endraw %}{% endhighlight %}

However, a caveat to all this is that our event listeners will persist even after we go to new pages without a dropdown. We need to remember to delete them. In this case, we could delete them whenever our menu is toggled closed, on the other side of the above conditional.

{% highlight javascript %}{% raw %}
actions: {
  toggleMenu() {
    this.toggleProperty('expandedMenu');

    if (this.expandedMenu) {
      window.addEventListener('click', this.boundCloseDropdownOnOutsideClick);
    } else {
      window.removeEventListener('click', this.boundCloseDropdownOnOutsideClick);
    }
  }
}
{% endraw %}{% endhighlight %}

Otherwise, and also as a general failsafe, they should be added to the `willDestroyElement` hook too,

{% highlight javascript %}{% raw %}
willDestroyElement() {
  window.removeEventListener('click', this.boundCloseDropdownOnOutsideClick);
}
{% endraw %}{% endhighlight %}
