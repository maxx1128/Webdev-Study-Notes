# Modules

Modules' main use is having a place separate from classes to store methods or variables. This is useful for:

* Using several methods between classes without needing to rewrite them
* Make methods more configurable so you can make wide-ranging updates in one area for things like encryption or organizing
* Declutter classes by easily separating groups of methods and variables

A basic module looks very similar to a class, like so:

```ruby
module ExampleModule
  def true(item)
    item ? "It's true!" : "It's false!"
  end
end
```

The module can then be included in a class, and all its methods and whatever shall be included.

```ruby
class ExampleClass
  def is_true?(var)
    true(var)
  end
end
```

## Resources

* [Ruby for Beginners](http://ruby-for-beginners.rubymonstas.org/advanced/modules.html)
