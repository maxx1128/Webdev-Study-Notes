Title: [Front-end Architecture for Design Systems](http://www.amazon.com/Frontend-Architecture-Design-Systems-Sustainable/dp/1491926783)
Author: Micah Godbolt
Publisher: O'Reilly

# The Four Pillars of Front-end Architecture

### Code
* Modular - easy to pick up and drop elsewhere, project to project
    * Don't apply any width, float, outside padding, or outside margins to the element
    * Never rely on external elements or variables for key styles
    * Each element uses unique, scoped classes
    * Never use layouts to apply padding or other styles to smaller elements
    * Use the **BEM** naming convention
* Bind JS to data-* attributes, never classes. Better separation of concerns
    * Also use custom data-attributes for more specific modifiers, such as themes?
* Use semantic HTML wherever possible!
* Avoid dependency bloat. Unless a dependency is absolutely needed, look for another solution.
* Code common layouts into quick references to save time and space?
    * Also, layouts should never impose padding or other styles on its children
    * Never apply margins to elements? Components should touch all four sides of its container by default
    * Can use [Synapse](https://github.com/maxx1128/Synapse-Grid) to create custom Expressive layout classes?
    * Link major code to the layout element's parent class, so changing a four-column to five-column grid is as simple as changing one class?
* Apply the "single responsibility principle" to classes - each one does one thing only and does it well.

### Process
* Covers all steps in the workflow, when code goes from the developer's brain to the user's browser.
* The new development workflow covers three core areas:
    1. **Requirements** - Gather as much info about the users and their needs. UX, Design, and development all working together. Make as many key decisions as early as possible.
    2. **Prototype** - Building and testing new ideas so they can be polished or discarded, is a cheap and flexible process. Continue until is at a point of acceptance.
    3. **Development** - Final front-end and back-end development work. Mainly finishing touches.
* Don't underestimate how long it takes to set up the local version of code. Setting up all dependencies and coordinating them can become a nightmare. Fully document this in the README file.
* For edit requests, be as specific and component-focused as possible.
* If working with other devs, make sure the coding practices are well-documented.
    * Consider a linter to enforce basic rules.
    * Use feature branches for code review and feedback on mistakes in new code
* A Continuous Integration Server, such as Jenkins of Travis CI, ensures the build process stays functional with each update. It can also compile assets uniformly every time that get pushed to a client's server.
* Tag releases for major marks in production or releases.
* Consider package managers like NPM and Bower for efficiently distributing client code.

// Stopped on page 85

### Testing
* Unit testing for Javascript


### Documentation
* Always supply a README for dealing with:
    * Workflow setup, requirements, and commands.
    * The project's who, what, where, when, why, how
    * **How to use** the code
* Five lines of code = one line of comments to explain it
    * For JS and CSS code
    * Keep comments clean, focused, and explain what and where the code works
