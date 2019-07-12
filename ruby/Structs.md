# Structs

Structs are functionally the same as classes, but have lots of default functionality built in to save time. They're useful if you need objects for storing and managing variables, without the full range of class features.

Structs can be used to just store parameters, but can also use methods with these parameters too.

```ruby
ExampleStruct = Struct.new(:param1, :param2)

ExampleStruct2 = Struct.new(:integer1, :integer2) do
  def sum
    integer1 + integer2
  end
end

struct_1 = ExampleStruct.new("string1", "string2")
struct_2 = ExampleStruct2.new(1, 2)

struct_1.param1  # "string1"
struct_2.sum     # 3
```

Structs are also great for organizing data within classes themselves. This is my version of the example from [this Struct explaination](https://www.leighhalliday.com/ruby-struct), using a struct to organize address info in a class for people. Notice the syntax for using variables and methods from the class itself and the struct inside it. This is a simple and more accessible syntax than hashes, so structs are useful for this reason too.

```ruby
class Person
  Address = Struct.new(:street_1, :street_2, :city, :province, :country, :postal_code) do
    def full_address
      "#{street_1} #{city} #{country} #{postal_code}"
    end
  end

  attr_accessor :name, :address

  def initialize(name, opts)
    @name = name
    @address = Address.new(opts[:street_1], opts[:street_2], opts[:city], opts[:province], opts[:country], opts[:postal_code])
  end

  def about
    "#{@name}\'s address is #{@address.full_address}"
  end
end

leigh = Person.new("Leigh Halliday", {
  street_1: "123 Road",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  postal_code: "M5E 0A3"
})

puts leigh.name           # Leigh Halliday
puts leigh.address.city   # Toronto
puts leigh.about          # Leigh Halliday's address is 123 Road Toronto Canada M5E 0A3
```
