# Classes

Classes are templates for creating objects in object-oriented programming. They appear frequently in back-end programming and lately in the front-end too.

## Organization

Classes should start with a list of variables, and be ordered as such:

* **Public static constants** (other classes can access them)
* **Private static variables** (other classes can't access them)
* **Private instance variables** (private variables created when a class forms an object, and will usually vary from object to object)

## Encapsulation

Variables and functions should be private unless they're the functionality other parts of the program need, or they're needed for a test.

## Make Them Small

Classes should be small, and the best measure is not by physical lines but by responsibilities.

* If you can't make a short, concise name for the class, it's doing too much. It shouldn't include broad words, or words like "if," "and," or "or" that stretch it too far.
* You should be able to describe it in 25 words or less.
* Avoid deeply indented structures, lots of oddly-named variables, and being tightly-coupled to other classes.

### Single Responsibility

Go by the **Single Responsibility Principle (SRP),** where a class or module should only have _one responsibility or reason to change._ Any extra responsibilities should be abstracted to other classes or modules.

Remember to follow this concept after you first get code working. The first working version often has too many responsibilities, so even though it works it needs to be refactored to adhere to the SRP.

If you worry lots of small classes are tougher to understand than a large one, you're wrong. The former may take up more lines but has just as many moving parts. It also:

* Has improved organization
* Is easier to tell what each piece is supposed to do
* More descriptive variable names
* Adds more code commentary without comments
* Better whitespace and formatting
* Is easier to test, since each smaller piece only needs to test a few specific things

### Cohesion

Aim for classes to have a small number of instance variables, and the class methods should manipulate one or more of these variables. **The more instance variables a method manipulates, the more cohesive it is.** Perfect cohesion is impossible, but high cohesion keeps methods and instance variables co-dependent and working as a logical whole.

If some instance variables are only changed by a subset of methods, it's a sign it should be another class. Following cohesion also encourages smaller classes.

## Organizing for Change

Most code systems need continuous change, and each change brings risk it'll break. Classes should be written to reduce the risk of changes breaking them.

When making changes, note the difference between adjustments to specific functionality and opening up the entire class. The more widespread the change is, the more you should consider refactoring the class as you change it. When classes are already broken in small, logical units, you're less likely to need these refactors.

In an ideal system of change, **classes are open for extension (like via subclassing) but closed for modification.**

### Isolating from Change

Some classes rely on concrete details, like hardcoded URLs or keys. These concrete details should be abstracted away.

* They're easier to stub and update
* It lowers the risk of not updating them all correctly (from one spot instead of several)
* Promotes more reuse
* Promotes the **Dependency Inversion Principle (DIP),** which says to depend on abstractions over concrete details
