---
group: ruby
layout: post

title: Accessors
descr: Make class variables more accessible quick
---

Accessors are ways to quickly make a class's instance variables readable or writable. Instead of having to define specific methods for seeing or editing instance variables, these make the code simpler and more readable.

For instance, this method...

{% highlight ruby %}
def variable
  @variable
end
{% endhighlight %}

...can be replaced with what's below. The effect is the same.

{% highlight ruby %}
attr_reader :variable
{% endhighlight %}

Here's a [quick reference](http://www.rubyist.net/~slagell/ruby/accessors.html) to the different accessors and what they do.

| Shortcut             | Effect                             |
|----------------------|------------------------------------|
| attr_reader :v       | def v; @v; end                     |
| attr_writer :v       | def v=(value); @v=value; end       |
| attr_accessor :v     | attr_reader :v; attr_writer :v     |
| attr_accessor :v, :w | attr_accessor :v; attr_accessor :w |
