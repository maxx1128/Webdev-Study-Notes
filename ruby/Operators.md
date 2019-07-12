# Operators

## If, Else, While

* The `if` statement works as you'd expect, looking for a value it'll see as `true`. If you need the opposite effect, use the `unless` statement instead. Shorter and easier to understand.
    - The `while` statement has a similar counterpoint with the `until` statement.
* Simple logic statements, such as those assigning variables, can be collapsed into a single line. This saves space and is easier to understand.

```ruby
unless @read_only
  @title = new_title
end

# This is the same as...

@title = new_title unless @read_only
@title = new_title if @writable        # You can use other logic statements too
```

If you need a simple "if, else" statement for something, use the ternary operator like so:

```ruby
greeting = name ? "Hello #{name}" : "What's your name?"
```

## Case Statements

Case statements are good for more complex code reliant on, or assigning, a range of different values. These lines can also be collap

```ruby
case attack
when 'punch'
    puts 'Not the face!'
when 'kick' puts then 'My leg!' # Same as above, works since code is simple
else
    puts 'Ha, you missed!'
end

response = case attack
           when 'punch' then 'Not the face!'
           when 'kick' then 'My leg!'
           else 'Ha, you missed!'
           end
```

* In Ruby boolean logic, only `false` and `nil` are considered false values. Two things are false, everything else is true. So when testing for truth, **don't test for something to equal a specific value.**

* If you want to define a value to a variable but aren't sure if it already has one, use this trick. **If `@name` is nil or false**, it'll use the following string.

```ruby
  @name ||= 'Default name!'
```

## Resources

* [Eloquent Ruby](https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104)
