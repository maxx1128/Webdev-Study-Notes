---
group: ruby
layout: post

title: Self Methods
descr: Methods to call directly from classes, just in case
---

Ruby classes allow you to define methods as `self`, such as `self.method`. These are methods that can be called from the class directly, not on different instances of the class.

{% highlight ruby %}
class GetFruitCount

  def mangoes
    "There are 5 mangoes!"
  end

  def self.types
    "Apples, mangoes, and blueberries are the different fruits."
  end
end
{% endhighlight %}

### Class Instances

{% highlight ruby %}
GetFruitCount.new.mangoes   # right
GetFruitCount.new.types     # wrong
{% endhighlight %}

### Classes

{% highlight ruby %}
GetFruitCount.mangoes   # wrong
GetFruitCount.types     # right
{% endhighlight %}
