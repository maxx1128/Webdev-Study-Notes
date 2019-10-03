# Regexes

Regexes (or regular expressions) are used to find different patterns within strings. They can range from simple to complex.

## Basics

At their most basic, strings will match with other strings in a case-sensitive manner.

```
x = x
aaa = aaa
aAa != aaa
```

A period matches for any possible character. You can turn off this special meaning for it and other characters by putting a backslash in front of it. You can match multiple possible characters with multiple periods.

```
. = anything!
A. = Aa, AA, Ah, A1, etc
...J = erwJ, JJJJ, 426J, H..J, etc

\. != anything!
\. = .
3\.14 = 3.14

.r\. Smith = Dr. Smith, Mr. Smith, etc
```

## Sets Match A Bunch of Characters

Put a bunch of characters in brackets, and a regex will match it with any singular character in those brackets

```
[aeiou] = a, e, i, o, u
[aeiou] != aa, ee, ii, oo, uu

[Mm]ax = Max, max
[aApP][mM] = AM, am, Am, PM, pm, Pm, etc
```

These scale better with ranges, which match any characters falling in that range. They can be mixed together if desired.

```
[0-3] = 0, 1, 2, 3
[a-e] = a, b, c, d, e
[0-9a-f] = 0, a, 1, 4, etc
[0-9a-f][0-9a-f] = 00, ae, 1e, 4f, etc
[a-e_] = a_, b_, c_, d_, e_
```

There are several shortcuts for ranges.

* `\d` = any digit
* `\w` = any letter, number, or the underscore
* `\s` = any space character

## Alternatives Match Specific Possibilities

Divide alternatives with `|` and they'll match with any possible item. Can be two or more. Optionally surround them with parenthesis to separate them from a larger pattern.

```
A|B = A, B
Jess|Frank = Jess, Frank

(You|We) are here = You are here, We are here

\d\d:\d\d (AM|PM) = 03:24 AM, 12:12 PM, etc
```

## Stars Match 0+ What's Before It

Whenever a star is used, look at the character before it. If that character appears any number of times, from zero to infinity, the star will match with it.

It can be used anywhere in the expression, and combined with other tools like sets or a period.

```
AB* = AB, ABBB, A, etc

[aeiou]* = a, ee, aeio, ouie, eeeeiouaioueooiouoe, etc
[0-9]* = 1, 66, 0, 214, 1248719823, etc

.* = any number of any character

Frank .* = Frank Smith, Frank Williams, Frank Snapdragon McFisticuffs, etc
```

## Question Marks Match 0-1 What's Before It

Use a question mark if a single instance of a character may or may not appear in a string.

```
00? = 0, 00
```

You can also use it to include optional ranges of characters

```
\d  = optional digit
\w  = optional letter, number, or the underscore
\s? = optional space
```

You can also use a question mark with the `.*` selector. It will match the string if nothing or anything all appears between them.

```
value-(.*?)-more = value-some-more, value-any-more, value-3847wef-more, value--more
```
