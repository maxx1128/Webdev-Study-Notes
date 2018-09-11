---
group: vue
layout: post

title: Vue For Codepens
descr: Using Vue for smaller CodePen projects for extra JavaScript joy
---

Many of my Codepens require a JS framework for handling more complex interactions and functions. Vue is a lighter, more easily configured one that fits well. These are notes on setting up Vue specifically for Pens.

## Setup

1. Add `https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js` to the JS imports
2. Use the following boilerplate for Vue:

{% highlight javascript %}
new Vue({
  el: '#elName',
  date: {}, // App data, such as state and results
  computed: {}, // Data calculated through functions or other means
  methods: {} // Functions to call in the JS and HTML
})
{% endhighlight %}

3. Wrap the body in a div with the same id as `el`.

#### Example

{% highlight javascript %}
new Vue({
  el: '#vuePen',

  data: {
    place: "Planet"
  },

  computed: {
    intro: function() { return this.add_hello(this.place) }
  },

  methods: {
    add_hello: function(string) { return `Hello ${string}!` }
  }
});
{% endhighlight %}

### Notes

* When referencing or changing `data` values, use `this`.
  * If `data` contains `number: 44`, then methods should find it with `this.number`.

## Templates

### Referencing Data Values

Use double brackets, such as `{{number}}`.

### Looping

Use `v-for` for standard for loops on an HTML template. The HTML element will be repeated for each item from `data`.

{% highlight html %}
<div v-for="(door) in doors"></div>

<div v-for="(door, index) in doors"></div>
<!-- Can optionally include the index of the for loop if needed for reference -->
{% endhighlight %}

### Class Bindings

Use `v-bind:class` to bind one or more classes based on other values or calculations

{% highlight html %}
<div v-bind:class="{ active: isActive }"></div>
<!-- If isActive is true, the 'active' class is added. First class, then value! -->

<div class="door" v-bind:class="{ 'door-revealed' : revealed_door === index || finished }"></div>
<!-- You can use more complex logic to determine if a class is added, or save this logic to data or methods and reference that -->

<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
<!-- You can separate multiple class bindings with a comma -->
{% endhighlight %}

### Conditional Rendering

Use `v-if` on an HTML template to render it only if the included JavaScript evaluates to true.

{% highlight html %}
<h2 v-if="finished === false">
  The Monty Hall Dilemma
</h2>
<!-- Only see this header if finished is false -->

<template v-if="this.finished === false"></template>
<!-- Use template to render elements inside the container without the template wrapper included -->

<template v-if="this.finished === false"></template>
<template v-else></template>
<!-- You can render something in the element/templates place if desired -->

<template v-if="selected_door !== false && finished === false"></template>
<!-- Can use more complex JS if needed, including defined methods -->
{% endhighlight %}

### Calling Methods

Methods can be attached to HTML objects, and then linked to certain events. A basic one shown below is the click event on a button.

{% highlight html %}
<button class="btn btn-success" href="javascript:void(0)" role="button" v-on:click="reset()">
  Reset the game!
</button>
<!-- This calls the "reset" method from the JS -->

<button class="btn btn-success" href="javascript:void(0)" role="button" v-on:click="reset('full')">
  Reset the game totally!
</button>
<!-- You can also pass arguments into methods this way, with straight values or ones in data variables -->
{% endhighlight %}
