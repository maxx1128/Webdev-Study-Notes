---
group: ember
layout: post

incomplete: true
title: Templates
descr: Using templates to show and organize an app's actual pages
---

## Inputs

The most basic way to bind an input to a variable is like so:

{% highlight javascript %}{% raw %}
{{input value=var}}
{% endraw %}{% endhighlight %}

This will then bind the input's text to the `var` variable.
