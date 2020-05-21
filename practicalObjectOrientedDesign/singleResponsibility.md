# Designing Classes with a Single Responsibility

The most visible part of how you organize Ruby objects are your classes. The first focus of any class is insisting it be simple. Try to model it based on what it must do now and make it easy to change later.

## Deciding What Belongs in a Class

However you decide to group methods in a class, know they will always need to change later. So focus more on preserving what can be changed than making it perfect. Easy to change can be defined as:

* Changes with no unexpected side effects
* Small design changes should take small code changes
* Easy to reuse
* It's easy to add more easily changeable code

It should also have the following qualities, going by the acronym TRUE:

* **Transparent** - It's easy to see the effects of a change
* **Reasonable** - The cost of change is proportional to the benefit
* **Usable** - Can be used in new and unexpected contexts
* **Exemplary** - Encourage others using the code to follow the above properties

A key aspect of classes that meet all these requirements is they have a _single, well-defined responsibility._

## Why Single Responsibility Matters

Single responsibility classes are easy to reuse. A class with too many functions and responsibilities can't share one piece without carrying over the rest. This entangles too many classes with each other, and changing one becomes more likely to change (and break) other classes. So classes that do too much have more chances to needlessly reach in and break others.

The measure of how related a class's methods are to its purpose is being "cohesive." A class with a single responsibility is highly cohesive.

### Check if a Class has One Responsibility

One way to assess if a class does too much is to pretend it's alive and interrogate it. Rephrase each method as a question and ask it to the class, seeing if it sounds reasonable for that class to know. If you have a class representing a bike gear, and you ask it what the size of a bike tire is, that sounds out of place for this class.

Another way is describing the class's responsibility in one sentence. If your description sentence is too long or uses the words "and" or "or," it most likely has too many responsibilities.

### When to Make Design Decisions

Resist the urge to prematurely fix badly designed classes. If you're the only one working on a small application, fixing it now or later (when you know what changes are needed) will cost the same and can be postponed. This includes putting off splitting one class into two small ones with clear, different purposes.

However, a badly designed class will lie to future developers about what its responsibilities are. This may lead them to write some more badly designed code on top of this. This is an argument for fixing the design now.

The above two scenarios reflect the constant tension between "premature design" and "lying code." Ask yourself _what is the future cost of doing nothing today?_

## Writing Classes that Embrace Change

A class's behavior is its methods. They're better for change since methods are defined in one place, and changing them means only changing them in one place. Remember, data is referenced all over the place, while the behavior is defined once. Hiding data from yourself through behavior makes them less likely to be broken by unexpected changes.

### Instance Variables

Classes have instance variables (or data) that are passed into a specific instance of a class object. Do not reference instance variables directly in any method. Changes to those variables will need to be changed in many places. Wrapping them in [accessor methods](./../Ruby/Accessors.md) creates methods to use them through, and changes can be done in those methods.

### Data Structures

Classes shouldn't rely on complex data to have a specific structure to use them correctly. Data may be passed in as a complicated array today, but a more complicated hash tomorrow. All objects taking in that data as an array will now need to take them as a hash. Each class taking that data will need to update how it interprets it, creating a possible cascade of failures. It also obscures what the data is so its harder for other developers to understand it.

If you can control the data being passed between objects, simplifying the data structure is a better bet. But if that's not possible, one way to address this is by using a [Struct](./../Ruby/Structs.md). They let you bundle several attributes together in a kind of mini class. Structs can be used to make lightweight objects that understand a data structure, isolating the code within a class relying on the data structure into a single, more understandable place. Accessible parts of a data structure become the same as calling methods on another object. Structs also make it possible to isolate and better manage the mess so it's easier to change.

## Enforce Single Responsibility Everywhere

Methods should also have a single responsibility. A method that iterates over an array and then calculates has two responsibilities. It should be split into two methods. Even if this makes it run slightly slower, early on good design should take priority over speed.

Iteration should always be separate from the applied action. Also check for calculations hidden other calculations and separate those too.

Method refactoring, when done well, brings several benefits:

* It clarifies what each method does, and clarifies the class as a whole
* Fewer comments are needed since the code better documents itself
* Encourages methods to be reused in various places, keeping code DRY and flexible
* Methods are easier to move around within or between classes

After clarifying a class's methods, you may think to create another class entirely to better separate responsibilities. That may be the best option and you may be lucky enough to have the bandwidth to do so. But due to uncertainty or other restrictions you may have to postpone that decision. This is fine as long as you preserve your ability to make a decision later by isolating the offending class code within specific methods or Structs. Make it easy to move them and preserve your ability to decide later.
