---
group: ruby
layout: post

title: Modules
descr: Breaking groups of methods apart into smaller groups

resources:
  - title: Ruby for Beginners
    author: Ruby Monstas
    link: http://ruby-for-beginners.rubymonstas.org/advanced/modules.html
    publisher: Ruby Monstas
---

Modules' main use is having a place separate from classes to store methods or variables. This is useful for:

* Using several methods between classes without needing to rewrite them
* Make methods more configurable so you can make wide-ranging updates in one area for things like encryption or organizing
* Declutter classes by easily separating groups of methods and variables

A basic module looks very similar to a class, like so:

{% highlight ruby %}
module ExampleModule
  def true(item)
    item ? "It's true!" : "It's false!"
  end
end
{% endhighlight %}

The module can then be included in a class, and all its methods and whatever shall be included.

{% highlight ruby %}
class ExampleClass
  def is_true?(var)
    true(var)
  end
end
{% endhighlight %}
