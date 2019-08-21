# Lambdas

Lambdas are essentially annonymous Ruby functions that take in blocks. Among other things, they let you define and execute blocks of code.

## Making a Lambda

There's two basic syntaxes for making a lambda, the standard and shorthand. Both are ultimately the same.

```ruby
lambda = lambda {}  # Standard
lambda = -> {}      # Shorthand
```

You can also include arguments for the lambda. If you don't use it with the right number of arguments, it throws an error.

```ruby
lambda = -> x, y { x + y }
```

As with most Ruby code, if there's multiple lines, the last line is implicitly returned.

```ruby
lambda = -> x, y {
  doubled_x = x * 2
  doubled_x + y
}
```

If you use a lambda, know you have to use `.call` on it.

```ruby
# With above example
lambda.call(2, 4)
# 8
```

## Lambdas Vs Procs

Lambdas are technically different versions of `Proc` objects, so they're extremely similar. There are a few subtle differences to remember though.

### Declaration

Simply replace `lambda` or `->` with `Proc.new` and adjust the curly brackets a little around any arguments.

```ruby
lambda_1 = -> { 2 + 2 }
lambda_2 = -> x, y { x + y }


proc_1 = Proc.new { x + y }
proc_2 = Proc.new { |x, y| x + y }
```

### Arguments

Lambdas throw errors if you don't include the exact number of arguments. Procfiles skip over them and, if possible, complete and run the block anyway.

### Explicit Returns

Using an explicit return for a Proc pulls you entirely out of a method it may be being used in. Lambdas keep going.

```ruby
def call_proc
  puts "Before proc"
  my_proc = Proc.new { return 2 }
  my_proc.call
  puts "After proc"
end

p call_proc
# Prints "Before proc" but not "After proc"
```

## Resources

* [The Ultimate Guide to Blocks, Procs & Lambdas](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)
* [Ruby Lambdas](https://gist.github.com/Integralist/9994331)
* [What are Lambdas in Ruby?](https://culttt.com/2015/05/13/what-are-lambdas-in-ruby/)
