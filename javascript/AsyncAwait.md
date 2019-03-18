# Async Await

Async/Await functions are simple, effective methods for asynchronous JavaScript. They're essentially functions that will do two additional things things:

* Know when to pause when waiting for data outside of JavaScript's single-threaded system
* Will return a promise that resolves when the function is complete

An async/await function has a basic structure like this:

```
async function myAsyncFunction() {
  let value = await promise;
  return value;
}

const asyncValue = myAsyncFunction;

asyncValue.then( function(value) {
  console.log(value)
})
```

This function will do the following:

1. It will immediately run, but pause and wait at the `await` line while the promise resolves
2. Once the promise resolves, it will continue until the function completes or there's another `await`.
3. When the function is assigned to `asyncValue`, the variable's value will be an unresolved promise.
4. When the variable's promise resolves, you can treat it like any other resolved promise. In this case, it uses `.then` to take the returned value when completed and log it.
