---
group: frontend
layout: post

title: Front-end Architecture for Design Systems
descr: A broad overview of organizing and maintaining a system's front-end code

resources:
  - title: Front-end Architecture for Design Systems
    author: Micah Godbolt
    link: http://www.amazon.com/Frontend-Architecture-Design-Systems-Sustainable/dp/1491926783
    publisher: O'Reilly

---

## The Four Pillars of Front-end Architecture

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
* Tool: **Twig** templating language? How does it differ from something like Nunjucks?
* Standard deliverables in a design system:
    * JSON Schema - Describes component attributes/variables and which are needed
    * Template File - Accepts JSON data to produce pages
    * Sass Partials - Sass to convert to CSS
    * Visual Regression Tests - Width and browser tests to run before merging components
    * Testing Data - for Unit Testing and others to get more functionaliy test coverage
    * Documentation - Visual list of components with an editor and important info using a tool called **Hologram**
    * Documentation Data - Starting data to make the initial view of the doc page
* Schema-Driven Design - JSON data describes the data structure for a component that focuses first on content and UI. Related to specific templating like Twig?

### Testing
* Important for architects to maintain large projects without it falling apart
* Tests should be written before or while code is being written, not after
* Tests are included in the repo
* All tests must pass before new code is merged
* The master branch should always pass

* **Unit testing** - breaking functions into smallest possible component parts and automatically, repeatedly testing it. "Do one thing and do it well."
    * Improves maintainence since it doesn't get much harder as scale increases
    * Write the test before writing the function

* **Performance Testing** - Measures key metrics related to use experience, like page weight, requests, delays, etc.
    * A Performance Budget means sticking to preset limits for all key metrics
    * Aim for metrics at least better than most competing sites
    * Current measurer: [WhatDoesMySiteCost.com](https://whatdoesmysitecost.com/)
Raw metrics to measure:
* Page Weight
    * Images - optimize them, use <picture> with srcset for responsive image
    * Custom fonts - Limit fonts and their variations, aim for locally hosted fonts instead of web fonts
    * Frameworks and plugins - try to avoid jQuery plugins, JS frameworks, CSS frameworks, and even jQuery if possible
    * Use minification and compression
* Number of HTTP Requests
    * Concatenate JS and CSS files, and images into sprite maps
    * Lazyload images below the fold
    * If using a CDN, aim for different servers
* Timing Metrics
    * Time for browser to receive the first byte
    * Time to start rendering
    * Time to finish rendering
* PageSpeed - Chrome extension for analyzing speed and usability of a website. Can be included in Grunt and Gulp build processes.

* **Visual Regression Testing** - Comparing the visuals of the correct, baseline site and the new versions to be merged or deployed.
    * Page-based diffing (*Wraith*)
    * Component-based diffing (*BackstopJS*)
    * CSS Unit Testing - look at unit values, not the visuals (*Quixote*)
    * PhantomCSS - Allows for complex, component-based VR tests
        * PhantomJS - Headless browser to quickly render and screenshot pages
        * CasperJS - Lets you interact with PhantomJS pages
        * ResembleJS - Comparison engine for images to find pixel differences
    * For accepted changes, be sure to update the baseline images
    * Aim to run each component's set of tests one-by-one for more efficiency
        * Break tests into multiple different files, if possible, for modularity


### Documentation
* Documentation is the blueprint that lets new and old developers better understand our code for more efficient problem-solving
    * **Hologram** - General documentation tool for HTML, CSS, and JS files. Can be inline all code so it's easily editable and viewable
    * **SassDoc** - Hugo Giraudel's doc generation tool specifically for Sass, good for very complex Sass code
    *  **Pattern Lab** - A static-site generator coders develop design systems in an Atomic Design style
        *  If used inside your project workflow, can share the generated assets with the project to ensure consistency

* For large projects, consider splitting the Style Guide (docs) from the Pattern Library

* Always supply a README for dealing with:
    * Workflow setup, requirements, and commands.
    * The project's who, what, where, when, why, how
    * **How to use** the code
* 5-10 lines of code = one line of comments to explain it
    * For JS and CSS code
    * Keep comments clean, focused, and explain what and where the code works


#### Conclusion
* Know that front-end architecture will take lots of iterations to get right, and these will often change from project to project
* Know the specific strengths and weaknesses of a current project and build out the iterations from there
