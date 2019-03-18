# Self Methods

Ruby classes allow you to define methods as `self`, such as `self.method`. These are methods that can be called from the class directly, not on different instances of the class.

```
class GetFruitCount

  def mangoes
    "There are 5 mangoes!"
  end

  def self.types
    "Apples, mangoes, and blueberries are the different fruits."
  end
end
```

### Class Instances

```
GetFruitCount.new.mangoes   # right
GetFruitCount.new.types     # wrong
```

### Classes

```
GetFruitCount.mangoes   # wrong
GetFruitCount.types     # right
```
