# Methods

Ruby methods are much like functions, taking repeated chunks of code and saving them to be used in other places.

## Where Methods are Used

Methods are defined in classes, and are usually used inside their class (such as in other methods) or in instances of the class. Below are examples of both with where `super_method` is called.

```ruby
class SomeClass
  def super_method
    puts "I'm a super method"
  end

  def who_cares_method
    puts "No one cares about me"
    super_method
  end
end

class_instance = SomeClass.new()
class_instance.super_method
# "I'm a super method"

class_instance.who_cares_method
# "No one cares about me"
# "I'm a super method"
```

An exception to this is private methods, which can only be used in that class. Methods handling sensitive data or simply have no use outside their class are best put in this group. Simply write `private` on one line in a class, and every method below it is private.

```ruby
class SomeClass
  def who_cares_method
    puts "No one cares about me"
    super_method
    # Can only be directly used in other class methods
  end

  private

  def super_method
    puts "I'm a super method"
  end
end

class_instance = SomeClass.new()
class_instance.super_method
# Doesn't Work! Can't be called in a class instance

class_instance.who_cares_method
# "No one cares about me"
# "I'm a super method"
```

## Method Arguments

Like functions, methods also take different arguments to use in their code. At their most basic they require all arguments to be supplied and look like this.

```ruby
def super_method(name, age)
  puts "#{name} is #{age} years old"
end

super_method("John", 21)
```

### Optional Arguments

You can make arguments optional by giving them a default value.

```ruby
def super_method(name, age = 21)
  puts "#{name} is #{age} years old"
end

super_method("John")
```

### Keyword Arguments

Even if they're not optional, you can still use keyword arguments that explicitely say which value is for which argument.

```ruby
super_method(name: "John", age: 21)
```

For arguments that look similar or ambigious (like several numbers), you can require keyword arguments.

```ruby
def super_method(name: , age: )
  puts "#{name} is #{age} years old"
end

super_method(name: "John", age: 21)
```

### Variable Arguments

If you want an argument to take an array of values, variable arguments let you give them as regular arguments but interpret them as an array. Include a "splat" before the argument name, written as `*`

```ruby
def super_method(*numbers)
  puts numbers
end

super_method(1, 2, 3, 4, 5)
# [1, 2, 3, 4, 5]
```

These can also be included with other argument types. Be sure you remember the argument order and placement.

```ruby
def super_method(name, *numbers)
  puts name
  puts numbers
end

super_method("John", 1, 2, 3, 4, 5)
# "John"
# [1, 2, 3, 4, 5]
```

You can also include a keyword variable argument using `**`, or the "double splat". It works the same as the single splat but it takes multiple hash values and returns a hash instead of an array.

```ruby
def super_method(name, *numbers, **extra)
  puts name
  puts numbers
  puts extra
end

super_method("John", 1, 2, 3, birth_place: "New York", school: "Public")
# "John"
# [1, 2, 3]
# {:birth_place => "New York", :school => "Public"}
```

These are lots of different argument types functions will handle. Remember to list them in the correct order when defining them.

1. Required
2. Optional
3. Variable
4. Keyword

## Passing Blocks

Methods can be passed blocks of code for even more customization. There's two basic syntaxes for passing blocks. Both place the blocks in place of where `yield` is placed. You can even place multiple `yield`s which will run the block each time it's placed.

```ruby
def super_method
  yield
end

super_method { puts "hello there" }

super_method do
  puts "hello there"
  puts "hey yourself"
end
```

`yield` can also take parameters which are used in the block. You can set them explicitely in `yield` or pass them from the method.

```ruby
def super_method(name)
  yield(name)

  # yield("Freddy")
  # Could also use the above for the same value passed in each time
end

super_method { |name| puts "hello there #{name}" }
```

Sometimes a block may or may not be used. `block_given?` can check beforehand and execute other code if there's no block.

```ruby
def super_method
  if block_given?
    yield
  else
    puts "No block given"
  end
end

super_method
# "No block given
```

## Self Methods

Ruby classes allow you to define methods as `self`, such as `self.method`. These are methods that can be called from the class directly, not on different instances of the class.

It's best practice to place the class methods at the top of the class above the others.

```ruby
class GetFruitCount
  def self.types
    "Apples, mangoes, and blueberries are the different fruits."
  end

  def mangoes
    "There are 5 mangoes!"
  end

  def show_the_types(speaker)
  "#{speaker} says #{GetFruitContent.types}"
  end
end
```

```ruby
# Classes
GetFruitCount.mangoes   # wrong
GetFruitCount.types     # right

# Class Instances
GetFruitCount.new.mangoes   # right
GetFruitCount.new.types     # wrong
```

## Resources

* [Ruby API, `block_given?` method](https://apidock.com/ruby/Kernel/block_given%3F)
* [Yielding to Blocks](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/18-blocks/lessons/54-yield)
* [Ruby Method Arguments](https://www.rubyguides.com/2018/06/rubys-method-arguments/)
* [Ruby keyword arguments, the double splat, and **_](https://flushentitypacket.github.io/ruby/2015/03/31/ruby-keyword-arguments-the-double-splat-and-starsnake.html)
