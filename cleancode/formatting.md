# Formatting

Good formatting keeps the code neat, consistent, and maintainable. Having a set of formatting rules to always apply is important, especially when part of a team. Today there are many tools to do this automatically, so there's little excuse not to.

The biggest perk of formatting is it helps communicate your code's purpose to others. Bad formatting means it could be misunderstood down the road, leading to bugs or wrongful deletions. It matters a lot in the long-term.

## Vertical Formatting

The first vertical formatting metric is the size. Some large files are unavoidable, but as a whole, you should aim for smaller files as they're easier to understand.

### Newspaper Metaphor

Structure a file the same way a journalist would structure a news article.

* The name/headline should be simple but explanatory
* The top has the high-level concepts and algorithms, which are usually most important to the file or module
* The code should focus more on details and low-level functions as you move down

### Openness Between Concepts

Each piece of code focused on a different thought should be separated by a blank line. This makes it easier to differentiate and identify each one.

On the flipside, tightly related code should not have spaces between it and look vertically dense.

### Distance

Closely related modules or concepts in a file should by vertically close to each other. How close or far apart they are is a measure of how important they are to each other. Don't make readers hop around the code to figure it out.

* Make variable declarations as close to their usage as possible. Preferably at the top of any module or function, they're used in.
* For classes, instance variables should be declared at the top.
* Conceptually similar functions, like those directly dependent on one or another, those doing similar operations or tasks, or with a common naming scheme.

### Ordering

The most important functions should go first in a file. With functions calling other functions, the caller (one making the call) should be above the callee (one being called). This creates a strong, downward flow when reading it.

## Horizontal Formatting

The first metric of horizontal formatting is line length. Aim to keep lines short, with a maximum of 100-120 characters. Don't adjust this just because you have a wide monitor.

### Openness and Density

Like with vertical white space, horizontal white space creates associations with the characters around it. More white space creates weaker associations and vice versa.

This is why space is added to both sides of an assignment operator, to better tell apart the variable and the value being assigned. It also helps in lines with many mathematical operators: those without spaces between them and the characters are high precedence and those without having low precedence.

### Alignment

In multiple lines of variable declarations, many formatters line them up so each part begins on the same part of the line.

```javascript
const something = 'yo',
 else = 'hi there',
 longVariableName = 'a longer string'
```

However, this emphasizes the variable names and types over what matters most, the actual values being assigned. Making this code less confusing isn't about the formatting, it's the length of the list. It should be refactored or split instead.

### Indentation

Lines should be indented in proportion to their position in the hierarchy. The further code is inside another method or function, the further it should be indented. This makes it easy to see the code's structure and containment by scanning it.

It's tempting to break this rule with short `if` statements by moving them to one line. Don't do this. Just don't.

## Team Rules

Agreeing on formatting rules as a team is vital and should always take priority over personal preferences. The program's consistency matters more than each coder's. Whenever possible, encode these rules into your IDE so they automatically get applied on save.
