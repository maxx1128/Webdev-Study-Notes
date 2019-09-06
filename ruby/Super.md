# Super

`super` is used in methods, and Ruby classes with at least one parent element. It bubbles up the parent classes until it finds a method with the same name as the method it's inside of. It then calls that method with the same name.

## How the Parent Method is Called

If this is a parent `Human` class, which has a child `Developer` class, and both have the same method.

```ruby
class Human
  def greeting
    puts "Hello there."
  end
end

def Developer < Human
  def greeting
    super
  end
end
```

With this setup, `greeting` does the exact same thing in both cases. That's because `super` looks for the same method in parent classes and runs it when it finds it.

If we wrote the method like this:

```ruby
def greeting
  super
  puts "I'm a developer."
end
```

The ultimate method output is the same as this.

```ruby
puts "Hello there."
puts "I'm a developer."
```

> You could include `super` multiple times if desired, so the first `puts` statement could be repeated as much as you wanted.

If the method `super` reaches takes arguments, you can set up the function to take those same arguments like so.

```ruby
def greeting(*)
  super
  puts "I'm a developer."
end
```

### Handling Different Arguments with Super

If the method `super` reaches takes arguments, you can take a few approaches. All of them mean using `super()` instead, and define what parameters you use inside the parenthesis.

* `super()` calls the parent method without arguments
* Include any names arguments from the parent method, which may be some or all of them.
  * They could also have different default values

## If the Method Doesn't Exist

If `super` can't find a parent method, it will try to run `method_missing`, which is a Ruby metaprogramming trick for working around your classes. It'll be run instead, letting you take direct control for handling things when a method isn't found.

This method's first argument is the name of the method being looked for, so you can fine-tune the response based on that method.

## Resources

* [How to Use The Ruby Super Keyword](https://www.rubyguides.com/2018/09/ruby-super-keyword/)
* [Ruby Metaprogramming - Method Missing](https://www.leighhalliday.com/ruby-metaprogramming-method-missing)
