# Recursion

Recursions are functions that call themselves. They can be helpful since they can keep code dry, since you only write code once but can execute it as many times as needed. However recursive functions that have no end will cause a stack overflow (see Call Stack), so be sure they're used properly.

Take this example function that finds a number's factorial. This multiplies a number by every number lower than it until it returns the total product. So the factorial of `5` would be `5 * 4 * 3 * 2 * 1`.

```javascript
const factorial = (n) => (n < 2) ? 1 : n * factorial(n - 1);
```

Running `factorial(5)` leads to the following recursive function calls:

```javascript
factorial(5) = 5 * factorial(4)
factorial(5) = 5 * 4 * factorial(3)
factorial(5) = 5 * 4 * 3 * factorial(2)
factorial(5) = 5 * 4 * 3 * 2 * factorial(1)
factorial(5) = 5 * 4 * 3 * 2 * 1
factorial(5) = 120
```

The part of the function with `(n < 2) ? 1` is crucial, since it's what stops the function from returning itself. Once the number gets down to `1`, it simply returns that without calling itself, stopping the loop. Without it, the function would simply look like this:

```javascript
const factorial = (n) => n * factorial(n - 1);
```

And would be played out this way instead:

```javascript
factorial(5) = 5 * factorial(4)
factorial(5) = 5 * 4 * factorial(3)
factorial(5) = 5 * 4 * 3 * factorial(2)
factorial(5) = 5 * 4 * 3 * 2 * factorial(1)
factorial(5) = 5 * 4 * 3 * 2 * 1 * factorial(0)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * factorial(-1)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * -1 * factorial(-2)
factorial(5) = 5 * 4 * 3 * 2 * 1 * 0 * -1 * -2 * factorial(-3)
// Adding more negative numbers into infinity
```

Even though the result would have to be `0` since the result is being multipled by zero, the important thing is nothing's telling this function to stop calling itself. It will keep doing so until something in the code tells it through, and since nothing will, it simply goes into it creates a stack overflow.
