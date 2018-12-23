---
group: ruby
layout: post

title: Style
descr: Writing code that looks like Ruby

resources:
  - title: Eloquent Ruby
    author: Russ Olsen
    link: https://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104
    publisher: Addison-Wesley Professional
---

* Ruby code is clear and self-explanatory. Aim for concise, obvious code that doesn't need lots of comments to understand.
    * For included comments, try for only ones explaining especially complex code or broad explanations of how to use the code.
* Only spaces, no tabs. Indents are two spaces.
* Use **CamelCase** for class names, and **snake_case** for everything else.
* For methods without any arguments or simple conditionals, don't use parenthesis.
* Unless something is simple enough to be just one line, don't cram multiple lines of code into a single one.
    - Only make block statements one line if it contains one line.
* The only exception to any of these rules would be to make Ruby code more **readable.**

* Methods that answer a yes/no or true/false question often end with a `?`, such as `valid?` to ask if a method or value is valid.
