---
group: javascript
layout: post

title: Eloquent JavaScript
descr: Notes or exercises specific to the Eloquent JavaScript book

resources:
  - title: Eloquent JavaScript
    author: Marijn Haverbeke
    link: http://eloquentjavascript.net/
    publisher: No Starch Press
---

> A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands.

### Exercise: FizzBuzz

An exercise the book mentions is one that is often used in coding interviews, so is useful to solve:

> Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
>
> When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

Here's my own solution to this problem:

{% highlight javascript %}
let number = 1;

while (number <= 100) {
  let result = '';

  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';

  console.log((result === '') ? number : result)
  number++;
}
{% endhighlight %}
