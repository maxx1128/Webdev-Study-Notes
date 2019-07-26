# Regexes In Ruby

[Regexes](./../programming/Regexes.md) are complex enough on their own, but also have a few specific rules for using them in Ruby.

## Making a Regular Expression

Put it in forward slashes.

```ruby
/[0-9a-f]/
```

## Testing a Regular Expression

Use the `=-` operator to return a boolean if the string matches the expression.

```ruby
/[0-9a-f]/ =- '9'     # 0 (it matched once)
/[0-9a-f]/ =- 'ae49'  # 3 (it matched three times)
/[0-9a-f]/ =- 'g'     # nil (no matches)
```

Since matches return an integer and misses return `nil`, you can treat them as booleans if you want to.

## Make it Case Insensitive

Add `i` to the end of it.

```ruby
/[0-9a-f]/ =- 'A'   # nil
/[0-9a-f]/i =- 'A'  # 0
```

## Use it With .gsub

You can use regexes with `gsub` so any matching substrings are replaced with something else.

```ruby
noHexChars = 'abcdefghij'.gsub(/[0-9a-f]/, '*')
# "******ghij"
```

## Checking in Specific Parts of a String

* Use `\A` to only register matches at the start of a string.
  * Use `^` to include the start of all lines in multiline strings.
* Use `\z` for the same but with the end of a string.
  * Use `$` to include the end of all lines in multiline strings.

```ruby
/\A[0-9a-f]/
/^[0-9a-f]/
/[0-9a-f]\z/
/[0-9a-f]$/
```
By default, dots don't match the end of a newline character. You can include it by using `m` at the end of the regex.

```ruby
/^Once upon a time.*happily ever after\.$/m
```











```ruby
/[0-9a-f]/
```
