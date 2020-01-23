# Emergence

Following four simple rules can help bring forward good designs as you code.

The first rule applies to when the code is first being written, and the remaining three apply to refactoring.

## 1. Run all the Tests

Tests are the simplest way to confirm the system works as intended in a verifiable way. Writing code that's testable pushes code design that:

* Follows the Single Responsibility Principle
* Is loosely coupled
* Is highly cohesive

## 2. Has No Duplication

Duplication takes the form of identical code, code that can be modified to look the same, or duplicate implementation.

Remove duplication even in little ways helps. Know how to find reuse in little bits of code, with patterns like Templates, or smaller tricks like subclasses and shared methods.

## 3. Express Intent

You understand the code when it's written, but others won't have this innate understanding later. Code should clearly express the intent to save others time when understanding it. Some ways to do this are:

1. Use good names that immediately show what it does
2. Keep functions and classes small
3. Use standard nomenclature, such as using `Command` at the end of a class using the command design pattern
4. Write good tests, since they document the code's purpose by example
5. Actually _try_ to make it expressive. Remember other people are going to read your code.

## 4. Minimize Number of Classes and Methods

Too much code isn't easy to read, even if it's clean. We should get so caught up making methods and classes small that that we make too many. However this rule is the lowest priority, so don't minimize the number if it sacrifices the above three rules.
