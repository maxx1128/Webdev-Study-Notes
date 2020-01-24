# Code Smells

Smells are subtle signs of bad code. On their own, they're not so terrible, but they violate rules of thumb for good code. Fix them early on to save yourself lots of time.

Each section details traits of what makes that part of the code smelly. **You should aim to avoid them at all times.**

Many of these refer to their respective other chapters of Clean Code. I recommend rereading those for more details.

## Comments

* They are about anything other about technical notes or design
* They are old, useless, or wrong
* It says something the code already says
* It has poor grammar or punctuation
* It is commented-out code that is rotting. The source code will remember it if you need it later.

## Environment

* Setting up the environment takes more than one step
* Running tests take more than one step

## Functions

* They have too many arguments. None is best and aim for three at most.
* They unexpectedly change the state of anything, or something not passed in
* It uses boolean arguments
* They are never called
* They do more than one thing
* Arguments are vague or unspecific
* There are static methods (ones that don't allow you to adjust the data being used). When in doubt, make it nonstatic.

## Names

* The names aren't descriptive, carefully chosen, or based on existing patterns and conventions
* You don't know what a variable is for, or what a function does, just based on the name
* The names don't reflect the level of abstraction they're at
* Names used for code on big scopes aren't appropriately longer
* Don't encode needed information for the code to run in the name
* They don't describe side effects
* The naming convention is inconsistent

## Tests

* There are too few tests to look at everything that could break
* There's no coverage tool to find testing gaps
* Seemingly trivial tests are skipped
* There are ambiguous tests commented out or ignored
* A code's boundary conditions, ambiguities, and imprecisions aren't thoroughly tested or removed
* Don't add exhaustive tests where bugs are likely to occur
* You don't look for patterns in test failures that expose the cause
* Untested code is ignored when other tests fail
* Tests are slow, and therefore more likely to be dropped or avoided

## Abstractions

* Conditionals aren't encapsulated into abstractions that clarify their intent
* You have duplicated code which could be replaced with abstractions, polymorphism, or design patterns
* Higher and lower-level abstractions aren't separated

## Coupling

* Unneeded coupling between code that doesn't depend on one another or serves a direct purpose
* Too much info is exposed at the interface when only the essentials should be exposed
* One class's internals are exposed to the other, unless necessary

## Modules

* Modules needlessly know the navigation map of the entire code system
* Modules that depend on each other don't make that dependency explicit
* Base classes depend on their derivative classes

## Styling

* Dead code is preserved instead of removed
* The code's expected behavior isn't obvious
* Inconsistent code styling, which can be avoided with proper linting
* Code is placed in unexpected places
* The code doesn't follow standard conventions, or it follows arbitrary ones people can easily ignore
* There's unexpressive code, which isn't worth it even if it's fewer lines

## General Programming

* There are multiple languages in a source file. Sometimes it's inevitable but minimize it as much as possible.
* You override safeties, such as turning off failing tests
* The places where variables and functions are declared should be as close to where they're used as possible, also known as a "small vertical scope"
* You don't understand the algorithms or logic doing the calculations
* Magic numbers that aren't self-describing aren't saved into named constants
* Configurable data isn't at high levels, so low-level functions have a hard time calling it when needed
* It uses negative conditionals since positive conditionals are easier to understand
