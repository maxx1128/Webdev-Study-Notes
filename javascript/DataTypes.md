# Data Types

All data in computers can be reduced to bits, positive/negative charges expressed as ones and zeros.

In JavaScript, groups of bits are represented as _values._ You create them by simply invoking their name. There's several types:

* **Numbers,** which can be whole, negative, and decimal values. Their main benefit is using arithmetic operations to calculate new numbers.
    - The _remainder_ operator returns the leftover value after division. `314 % 100` returns `14`, and `100 % 10` returns `0`.
    - `NaN` is returned after any operation that doesn't return a real result. `0 / 0` will return `NaN`, as well as `Infinity - Infinity`.
* **Strings** are basic text enclosed by matching quotes.
    - Quotes or other special characters inside a string need to be _escaped_ with a backslash.
        + Quotes: `"\'It is a dangerous journey,\' the main said."`
        + New Lines: `"This is the first line\nAnd this is the second"`
        + String with backticks can include functions or operations, if they're enclosed in a `${}` wrapper.
* **Unary Operators** are symbols written as words
    - `typeof` tells you a value's type, so `typeof 4.5` returns `number`.
* **Boolean** values are simply true or false
    - You can use _comparison values_ that return boolean values, such as `3 > 2` returning `true`.
    - Logical operators such as `&&` and `||` also return boolean values.
    - The _negative_ operator flips an integer, so `- 5` returns `-5`.
    - The _not_ operator flips the boolean value on it, so `!true` returns `false`.
    - Ternary operators evaluate an expression and can return different values if it's `true` or `false`. So `true ? 1 : 2` returns `1`, but if it was false it would return `2`.
* **Empty Values** show a lack of meaningful values or info. If a value must be returned but none is produced, you get an empty value.
    - These can be either `null` or `undefined`, and they're mostly the same.

**Type Coercion** is when operators are applied to the wrong value types and quickly convert the value to what is needed, such as converting `"5"` from a string to `5` as an integer. To test for any unexpected type conversions or missing values, use the `===` and `!==` comparison operators.
