# Collections

Ruby collections refer to arrays or hashes, two ways to store "collections" of data. Arrays are simple lists, and hashes are lists of key-value pairings.

## Making Quick Collections

There's several syntaxes for quickly making collections without getting bogged down in detail.

```ruby
# For string arrays
array = %w{ I am a bunch of strings! }
# -> ["I", "am", "a", "bunch", "of", "strings!"]

# For hashes with any possible keys or values, use the "hash rocket"
test_var = "foo"
hash = { "one" => 1, "two" => 2, "three" => test_var, 777 => false }
# -> {"one"=>1, "two"=>2, "three"=>"foo", 777=>false}

# For hashes with symbol keys
another_hash = {name: "Maxwell", editor: "Visual Studio Code", lucky_number: 33}
```

## Collections and Methods

Class methods can easily add or remove collection items. This is made easier using **a parameter with a star in front of it.** This is similar to a JavaScript spread operator, in that it takes all the different values and collects them into an array.

```ruby
class TestClass
  def initialize
    @array = []
  end

  def add_items(*items)
    items.each { |item| @array.push(item) }
  end

  def show_items
    print @array
  end
end

instance = TestClass.new()
instance.add_items('foo', 'bar') # Don't need to pass an array, just the values
instance.show_items
# ["foo", "bar"]
instance.add_items('baz')
instance.show_items
# ["foo", "bar", "baz"]
```

This makes it simpler to add anything to an array as needed. It also gives you more control over creating, managing, and deleting from arrays, since they can all be linked to different methods with parameters as needed.

There's also a good shortcut for using hashes as method arguments. If a hash is the method's last argument, you don't need to wrap the hash in braces. You can go right to the hash rocket syntax.

```ruby
class Pizza
  def initialize
    @oven = {}
  end

  def prepare_oven(oven)
    @oven = oven
  end

  def check_oven
    print @oven
  end
end

anchovy_pizza = Pizza.new()
anchovy_pizza.prepare_oven(:temperature => 300, :time => 20, :instructions => 'cook until ready')
anchovy_pizza.check_oven
# {:temperature=>300, :time=>20, :instructions=>"cook until ready"}
```

## Looping Through Collections

Use `each` instead of `for`, since `for` basically calls the `each` method itself, creating an avoidable inefficiency.

```ruby
list = ["item one", "item two", "item three"]

# One line each loop for simpler code for item
list.each { |item| puts item }

# Block each loop for more complex code per item
list.each do |item|
  puts item
end

# Each puts the same thing, one list item at a time
```

You can do the same thing for hashes, and by default each result is a two-item array. The first item is the key or symbol, and the second is the value. You can also explicitely name the pairs to destructure them.

```ruby
hash = { fizz: 'buzz', foo: 'bar' }

# Each item is a small array
hash.each { |item| print item }
# [:fizz, "buzz"][:foo, "bar"]

# The key value pairs are destructured
hash.each { |key, value| puts "#{key}: #{value}" }
# fizz: buzz
# foo: bar
```

## Useful Collection Methods

### sort

`sort` rearranges an array based on item values. It takes the value of numbers, and uses the length of a string for those values, and arranges them in ascending order. You can add `reverse` onto these to quickly go into descending order.

To sort by different measures, you can use `sort_by` which takes a block. This block can compute a different numerical value in any way, and the array will be sorted on those returned values

```ruby
array = [4, 2, 7, 32, 9, 3, 4, 14]
print array.sort
# [2, 3, 4, 4, 7, 9, 14, 32]

print array.sort.reverse
# [32, 14, 9, 7, 4, 4, 3, 2]

fruits = %w{grape pineapple orange}
print fruits.sort_by { |fruit| fruit.length }
# ["pineapple", "orange", "grape"]
```

### index

Loops through an array, and returns the index of the first object that it's true for. Can either directly look for a value, or take a block statement for more complex checking.

```ruby
array = [1, 44, "number", "pasta"]

puts array.index("number") # 2

puts array.index { |item| item > 33 } # 1
```

You can use `rindex` for the same check, but starting from the end of the array instead.

### sample

Sample gets one or more random items from an array.

With no argument, it gets one item.

With an integer argument, it returns an array of that length with that number of random items. It does not get multiples and cannot return an array longer than the original.

```ruby
numbers = [1, 2, 3, 4, 5]
random_number = numbers.sample
random_numbers = numbers.sample(3)

puts random_number
# 5
puts random_numbers
# [2, 4, 3]
```

### map

Similar to JavaScript, `map` takes an array, performs a function or operation on each item, and returns a new array.

```ruby
numbers = [2, 4, 6, 8]
big_numbers = numbers.map { |number| number * 2 }

print big_numbers
# [4, 8, 12, 16]
```

### inject

`inject` is like a normal array, but with a few differences:

* The loop takes two variable declaration.
  1. The first is a value that's carried over from the previous iteration, which I call the "carried variable." Each one can be used in the loop's code.
  2. The second the current item in the loop.
* The return value replaces the carried variable in each iteration
* It also takes an argument when called, which is the initial value of the carried variable. If you don't include this, it instead does:
  * Takes the first array value as the initial value.
  * Skips the first iteration and continues as normal from the second onward.

A common example of this is finding the sum of an array of numbers.

```ruby
numbers = [2, 4, 6, 8]

# Each iteration returns the total with the next value added
# Not including the initial value of '0' gives the same result
total = numbers.inject(0) { |total, number| number + total }
puts total
# 20
```

## Mutating Collections

The following methods change the array they're called on in some way. Note these change the variable themselves, instead of limiting the change to a new variable. Use them with caution!

### delete

`delete` deletes any items from an array that matches the given value (can be multiple). If it finds no match, it returns `nil`. It can also take a block, which will run instead if there's no match.

### pop, shift

`pop` removes the last element of an array, and returns the removed element. It can take a numerical argument, such as `pop(2)`, to remove multiple items at an array's end. The removed value can be saved to a variable and used for future actions. You can also add it back to the end of the array with `push` to undo this if needed.

`shift` does the same thing but instead starts from the start of the array.

### push, unshift

`push` adds an item to the end of an array, and returns the changed array (with added elements). It can take multiple arguments, each of which are added in that order.

`unshift` does the same thing but instead adds to the start of the array.

### Bang Operators

The above mutation methods (and likely several others) natively can change the same variable they call. Other methods, such as `sort` or `reverse`, don't ever change the actual array they're called on. Use them on an array and call it again, and it will be the same. These values are meant to be saved to new variables.

```ruby
numbers = [2, 4, 6, 8]
numbers.reverse

print numbers
# [2, 4, 6, 8]
```

Use the bang operator, however, and the array itself will change. So be cautious with the bang!

```ruby
numbers = [2, 4, 6, 8]
numbers.reverse!

print numbers
# [8, 6, 4, 2]
```

## Resources

* [Eloquent Ruby](https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104)
