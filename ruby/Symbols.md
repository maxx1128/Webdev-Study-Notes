# Symbols

Symbols are similar to strings, but are different since instead of containing text data, they simply stand in for another value. They're a fast way to tell is one value is different from another, and make Ruby programs much faster overall.

Remembering this difference is essential for symbols, since getting them mixed up with strings is a very common mistake.

* There can only be one instance of a given symbol
* Symbols are immutable
* Great for hash keys
* You can convert a string to a symbol with the `to_sym` method

```ruby
variable = {
  :name => 'Max'
}

variable[:name]
# 'Max'
```
