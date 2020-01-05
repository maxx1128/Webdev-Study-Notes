# Error Handling

As much as we prepare, the code will go wrong. So we need to handle errors cleanly. Good error handling doesn't obscure the code's original logic.

## Use Exceptions, Not Returns

An unclean approach is conditionally checking for each possible error, and returning different values or actions based on that. But these checks adds clutter right after the calls. They often appear as long, confusion chains of conditional "if X error" statements.

Exceptions follow a much cleaner format, generally like so with `try/catch`:

```
function something() {
 try {
 // main code here
 } catch (error) {
 log(error)
 }
}
```

This cleanly separates the function and exception logic, removing the clutter and letting them be independently understood. It's only an aesthetic change, but still an important one.

Just be sure to avoid using these patterns outside of real errors when you can. Sometimes `try/catch` for business logic can be refactored to remove it.

You can also usually add a `finally` statement at the end, which will run at the end of every run.

Just remember that code in `try` can leave that block in many different states, from "done right" to any number of wrong ways. Adding the `finally` block helps with this risk since it gives other coders a clearer idea of what to expect in all cases.

Also, make sure the tests you write force exceptions and test those responses too. These tests can be added before or after, as long as they're there to cover all the expected cases.

## Give Context with Exceptions

Give enough exception info to get the error's **source** and **location.** Add other useful info if you can, like the operation that failed, and the type of failure.

Also, make sure when errors are thrown, the type of error being thrown is always the same. This can be better managed with a separate class or wrapper that takes exceptions in, translates them, and returns them in a standard way.

## Avoid Null with Errors

Don't return or look for `null` as a way to catch errors. It requires extensive checking that will fall apart even if one is missed. Instead, try to throw an exception or return a "special case" object which handles the error separately and appropriately. Or returning easier values to work with, like empty lists for no results.

Also never pass `null` into a function. It comes with the same issue of many `null` checks and assertions. Avoid ever passing `null`, so when it does appear you'll know it's a serious problem.
