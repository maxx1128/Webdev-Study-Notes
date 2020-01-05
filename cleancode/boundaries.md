# Boundaries

Boundaries are about how we handle foreign code in our software. Keeping clean, effective boundaries keeps unwanted mistakes and errors from crossing between them.

Good boundaries help codebases manage change without wasting too much time and effort. They separate foreign code and have tests to define their expectations. This avoids tight coupling and dependency since it's unwise to depend too much on something you don't control.

## 3rd-Party Code

There's a constant tension between the 3rd-party code's desire to reach a broad audience, and our code's desire to be tailored to our needs.

### Abstraction

3rd-party code may have the functionality we don't want to make use of since it'd cause needless data errors or mutations. In other words, **it does more than we need or want.** It can also be harder to manage since outside updates mean updating it everywhere you use it.

You can get around these issues by making abstract interfaces to use 3rd-party code in. For example, a separate class or module with its methods for interacting with 3rd-party code.

* It hides direct access to foreign code from the rest of the software
* The app can only use methods you include in the class, so we don't expose unwanted functionality
* We can tailor these methods to your app's functionality
* We can rename methods, or a series of methods, under one function name for easier reading
* It's easier to update when the foreign code updates since it's only changed in one place

This doesn't need to be the case with all 3rd-party code but works best when it's passed around in many places. The fewer places foreign code is directly referred to, the better.

### Boundary Testing

3rd-Party code takes time to read and understand it. Writing some basic functionality tests for it in our app both helps with that process and ensures it does what is needed. These act as "controlled experiments" to make sure the code keeps working as expected, including for large updates. Other developers can learn it faster too since knowledge is encoded into those tests.

_Boundary tests_, therefore, have a great return on investment. They aid in learning and ensure consistent use in the app, especially for upgrades and migrations.

## Using Code that Doesn't Exist

Sometimes you'll need to write around code that isn't there. A department may be behind and you need to keep moving, so you keep your code distant from modules not yet finished or fully understood.

As you develop around this code, however, note how you decide to do so. This will tell you how you want and expect the unknown code to work. This acts as a guide and model for when it gets written or updated. If you find yourself writing a common method as a placeholder for this code, it can be added later since you know that's how you want it to function.

Writing the "unknown code you wish you had" will likely involve lots of dummy or placeholder functionality. But you can still write boundary tests to further detail how you expect it to act.
