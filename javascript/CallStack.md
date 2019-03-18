# Call Stack

The call ctack is the basic data structure JavaScript uses to execute, or call, a code's functions. Whenever JavaScript code is executed (or called), the call stack controls the method and order behind this execution. That's why understanding the call stack is essential to see how JavaScript runs, since not understanding it can lead to unexpected errors or code called in the wrong order.

Some key traits of the call stack:

* **The call stack is synchronous.** Functions are called one at a time, from the start to the end, simple as that. JavaScript allows for asynchronous programming, but only by borrowing this functionality from elsewhere (the Browser API). JavaScript itself is synchronous and can only borrow asynchronous functionality from elsewhere.
* **The call stack is Last In, First Out.** Function calls are added to the top of a "pile," and whatever's on top of the pile is always called before what's below it can be called next. It's similar to stacking dishes - the last one you put on the pile is the first one you use later on.
* **A stack overflow is when the call stack limit is exceeded.** Recursive functions (functions that call themselves) can trigger a stack overflow when there's no end coded into it. Whatever's running this code will ultimately crash.

## Resources

* [Understanding the JavaScript Call Stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
