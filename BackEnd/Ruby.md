General Ruby Notes

### Variable Scope

* Global variables, available everywhere. Can be defined in classes and still be global, but must have `$` prepended
    - `puts global`
    ```
    class NewClass
        $global = "global"
    end

    puts $global
    ```
* `@` - Instance variables, only available to instances of specific classes
    - `Object = Class.new('string')   # would be initialized as "@string" in the class`
    - `puts Object.string`
* `@@` - Class variables, can be called from the class (not instances of it). These can be changed or incremented between any instance of a class, such as through the `initialize` method.
    ```
    class NewClass
        @@class_var = "hello!"

        def self.show_class_var
            @@class_var
        end
    end

    puts NewClass.show_class_var
    ```

### Accessors

Accessors are ways to quickly make a class's instance variables readable or writable. Instead of having to define specific methods for seeing or editing instance variables, these make the code simpler and more readable.

For instance, this method...

```
def variable
  @variable
end
```

...can be replaced with what's below. The effect is the same.

```
attr_reader :variable
```

Here's a [quick reference](http://www.rubyist.net/~slagell/ruby/accessors.html) to the different accessors and what they do.

| Shortcut             | Effect                             |
|----------------------|------------------------------------|
| attr_reader :v       | def v; @v; end                     |
| attr_writer :v       | def v=(value); @v=value; end       |
| attr_accessor :v     | attr_reader :v; attr_writer :v     |
| attr_accessor :v, :w | attr_accessor :v; attr_accessor :w |

### Structs

Structs are functionally the same as classes, but have lots of default functionality built in to save time. They're useful if you need objects for storing and managing variables, without the full range of class features.

Structs can be used to just store parameters, but can also use methods with these parameters too.

```
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

```
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







