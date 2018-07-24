## While/Do Loops

Sometimes code must be repeated so often that the above approach won't work. **While loops** make this easier, as they constantly repeat code under a certain condition. Logging all number in a certain range (between 10 and 100) works this way:

```
let number = 10;

while (number <= 100) {
  console.log(number);
  number = number + 2;
}
```

Notice how this demonstrates how binding can control the execution of a code.

**Do loops** are the same, but are set up so they execute their code at least once. In the below example, even if `number` is set `100`, it will still run at least once.

```
let number = 100;

do {
  console.log(number);
  number = number + 2;
} while (number <= 100)
```

> Make sure the conditions in a While/Do loop resolve! If they continue infinitely they will crash your program.

#### For Loops

For Loops do the same basic functions as While/Do loops, but give you more control over the iterations. You must set:

* The variable being counted and its initial value
* The condition for stopping the loop
* The expression to run after each iteration

The example below using the loop variable in all three areas, but note that anything else could be used if wanted.

```
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

Loop increments can be simplified in two ways:

* `counter += 2` to add any integer
* `counter++` to increment by 1
* Both of the above can subtract by replacing `+` with `-`

There are two ways to adjust control of a loop:

* A **break** statement immediately pulls you out of the current iteration, and exits the loop entirely. Even if it would have normally kept iterating.
* A **continue** statement immediately pulls you out of the current iteration, but resumes the loop again from the start of a new iteration. Even if it would have normally stopped iterating.

-----
### Resources

* [Eloquent JavaScript](http://eloquentjavascript.net/)
