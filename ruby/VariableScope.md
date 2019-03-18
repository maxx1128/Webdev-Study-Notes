# Variable Scope

The different Ruby scopes and how to access them, mostly to control what's in the global scope.

Global variables, available everywhere. Can be defined in classes and still be global, but must have `$` prepended

{% highlight ruby %}
puts global

class NewClass
  $global = "global"
end

puts $global
{% endhighlight %}

## Instance

Instance variables (`@`), only available to instances of specific classes

{% highlight ruby %}
Object = Class.new('string')   # would be initialized as "@string" in the class
puts Object.string
{% endhighlight %}

## Class

Class variables (`@@`), can be called from the class (not instances of it). These can be changed or incremented between any instance of a class, such as through the `initialize` method.

{% highlight ruby %}
class NewClass
  @@class_var = "hello!"

  def self.show_class_var
    @@class_var
  end
end

puts NewClass.show_class_var
{% endhighlight %}
