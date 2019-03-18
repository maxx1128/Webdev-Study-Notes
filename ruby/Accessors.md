# Accessors

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

Here's a quick reference to the different accessors and what they do.

| Shortcut             | Effect                             |
|----------------------|------------------------------------|
| attr_reader :v       | def v; @v; end                     |
| attr_writer :v       | def v=(value); @v=value; end       |
| attr_accessor :v     | attr_reader :v; attr_writer :v     |
| attr_accessor :v, :w | attr_accessor :v; attr_accessor :w |

<br />

Small note: I get the context of using `write` here wrong quite often. Here it is for clarity:

{% highlight ruby %}
class ExampleClass
  attr_writer :name

  def initializer
    @name = 'Jeff'
  end
end

person = ExampleClass.new()

person.name('Carl')    # Wrong!
person.name 'Carl'     # Wrong!
person.name = 'Carl'   # Correct!
{% endhighlight %}
