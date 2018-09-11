---
group: javascript
layout: post

title: Import and Export
descr: The new ES6 way to share JavaScript code among different modules

resources:
  - title: MDN Import syntax
    author: Mozilla
    link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    publisher: Mozilla
  - title: MDN Export syntax
    author: Mozilla
    link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
    publisher: Mozilla
---

## What Import and Export Do

ES6 introduced a standard syntax for sharing JS functionalities between files in a controlled, manageable way (such as avoiding variables leaking into global scope).

* `import` is how you decide what other code is included in a file
* `export` is how you decide what code can be shared with others

## The Basics

Exporting is usually defined at the end of a file, using the final written functions or classes. A simple example exporting variable values could look like this:

{% highlight javascript %}
const profile = {
  name: 'Max Antonucci',
  job: 'coder'
};

const numbers = 34234234;

export { profile, numbers }
{% endhighlight %}

You can then reference this file (with vanilla JS it usually takes a relative path) and import some or all of what was exported.

{% highlight javascript %}
import { profile, numbers } from './file.js';

// Importing only some values
import { numbers } from './file.js';

console.log(numbers);
// 34234234
{% endhighlight %}

## Import All

You can quickly import all exported items into an object.

{% highlight javascript %}
import * as data from './file.js';

console.log(data.numbers);
{% endhighlight %}

## Export Default

Exports let you set a default item to be exported, which can be more easily referenced and used when imported.

{% highlight javascript %}
const numbers = 12345,
      name    = 'Max Antonucci',
      job     = 'coder';

const data = {
  name,
  job,
  numbers
};

export {
  name,
  job,
  numbers,
};

export default data;
{% endhighlight %}

The default export is the object with all these values. You can import that, or import specific ones from the other export, with this setup.

{% highlight javascript %}
import info from './file.js';   // All 'data' values are assigned to 'info'. You can call methods like 'info.name'.

import { name, job } from './file.js';   // You only have these values, and can call them directly from 'name' and 'job.'
{% endhighlight %}

## Import with Destructuring

A common way to handle export/import reliably is the following:

1. Export an object as the default
2. Use JS Destructuring to import specific pieces as needed, or all of them into one variable

{% highlight javascript %}
export default {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
}

import { prop1 } from './file.js';
import { prop1, prop2 } from './file.js';

import * as props from './file.js';   // props.prop1, props.prop2, etc

import { prop1, prop2 as secondProp } from './file.js';    // prop1 as normal, prop2 is assigned to secondProp
{% endhighlight %}
