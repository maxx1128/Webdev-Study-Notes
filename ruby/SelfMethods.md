# Self Methods

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

### Class Instances

```ruby
GetFruitCount.new.mangoes   # right
GetFruitCount.new.types     # wrong
```

### Classes

```ruby
GetFruitCount.mangoes   # wrong
GetFruitCount.types     # right
```
