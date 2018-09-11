---
group: ruby
layout: post

title: Eloquent Ruby
descr: Writing ruby the right way

resources:
  - title: Eloquent Ruby
    author: Russ Olsen
    link: https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104
    publisher: Addison-Wesley Professional
---

## 1) Write Code that Looks Like Ruby

* Ruby code is clear and self-explanatory. Aim for concise, obvious code that doesn't need lots of comments to understand.
    * For included comments, try for only ones explaining especially complex code or broad explanations of how to use the code.
* Only spaces, no tabs. Indents are two spaces.
* Use **CamelCase** for class names, and **snake_case** for everything else.
* For methods without any arguments or simple conditionals, don't use parenthesis.
* Unless something is simple enough to be just one line, don't cram multiple lines of code into a single one.
    - Only make block statements one line if it contains one line.
* The only exception to any of these rules would be to make Ruby code more **readable.**

* Methods that answer a yes/no or true/false question often end with a `?`, such as `valid?` to ask if a method or value is valid.

## 2) Choose the Right Control Structure

* The `if` statement works as you'd expect, looking for a value it'll see as `true`. If you need the opposite effect, use the `unless` statement instead. Shorter and easier to understand.
    - The `while` statement has a similar counterpoint with the `until` statement.
* Simple logic statements, such as those assigning variables, can be collapsed into a single line. This saves space and is easier to understand.

{% highlight ruby %}
unless @read_only
  @title = new_title
end

# This is the same as...

@title = new_title unless @read_only
@title = new_title if @writable        # You can use other logic statements too
{% endhighlight %}

If you need a simple "if, else" statement for something, use the ternary operator like so:

{% highlight ruby %}
greeting = name ? "Hello #{name}" : "What's your name?"
{% endhighlight %}

Use `each` instead of `for`, since `for` basically calls the `each` method itself, creating an avoidable inefficiency.

{% highlight ruby %}
list = ["item one", "item two", "item three"]

list.each do |item|
    puts item
end
{% endhighlight %}

Case statements are also good for more complex code reliant on, or assigning, a range of different values. These lines can also be collap

{% highlight ruby %}
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
{% endhighlight %}

* In Ruby boolean logic, only `false` and `nil` are considered false values. Two things are false, everything else is true. So when testing for truth, **don't test for something to equal a specific value.**

* If you want to define a value to a variable but aren't sure if it already has one, use this trick. **If `@name` is nil or false**, it'll use the following string.

{% highlight ruby %}
  @name ||= 'Default name!'
{% endhighlight %}

## 3) Take Advantage of Ruby's Smart Collections
