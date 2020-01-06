# Unit Tests

This chapter focuses on Test Driven Development, or TDD for short, and how it is vital to keeping code fresh and flexible.

## The Three Laws of TDD

There are three basic rules to follow in TDD:

1. Write tests before production code
2. Only write enough of a unit test so it fails when expected
3. Only write enough production code so the test passes as expected

These rules mean test and production code are written together, with tests just a few seconds before production.

## Why Tests Matter

Having no tests is bad, and having dirty (poorly-written) tests are at least just as bad.

Dirty tests are hard to change, time-consuming to get right, and easily get out of sync with production code. Tests will fail regardless of how good the production code is, and become a liability.

No tests mean developers can't tell if their changes work as expected. Changes could break other code without warning, bugs will increase, and developers will fear to make any change. Production code will rot and everyone suffers.

Good tests are what make code flexible, maintainable, and reusable. Developers don't fear changing code since they can find and fix bugs before it goes live. The same holds for adding and refactoring code.

## What Makes a Test Clean

Clean tests are readable above all else. This means they're clear, simple, and say a lot with as few expressions as possible.

Three reliable steps in how a test works are it builds the specified environment, it does the needed operations, and checks that the expected changes happened (or didn't happen).

Building custom functions or utilities to keep the tests themselves brisk and readable is a good investment. These can also be refactored as the code grows, and the tests' needs change with it.

### Leeway for Tests

Tests don't run in a production environment for users, so you have some leeway to make them less efficient for readability's sake. As long as it doesn't slow them down too much.

This includes not having tests where your eyes bounce between a value and how it's being checked, like `assertFalse(aReturnedValue())` written repeatedly. Using a function or mental model trades off some efficiency or accessibility with greater readability, as long as you don't do it for everything.

### One Assert Per Test

One rule of thumb says each test should have only one assert statement. This is sometimes the case, but in some cases can lead to lots of duplicate code for setting up similar tests.

A better rule is **each test should only test a single concept.** Some assertions share the same setups or measure the same functionality. Grouping them reduces duplication while keeping the tests understandable and organized.

### Tests Come F.I.R.S.T.

More general rules for tests follow this acronym.

* **First.** Tests should run fast so you more time to check them.
* **Independent.** - Tests shouldn't depend on each other, or one failure can cause a cascade of incidental failures developers need to untangle.
* **Repeatable.** Tests should run in any environment they need to. Failing due to the environment obscures real test failures.
* **Self-Validation.** Tests should have a clear "pass" or "fail" result. Otherwise parsing what's a "failure" is subjective and time-consuming.
* **Timely.** Write tests just before production code, and at no other time. Writing tests first means you'll write production code that's more testable since it'll be with the tests in mind.
