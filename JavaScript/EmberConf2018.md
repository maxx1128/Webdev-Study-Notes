# Ember Conference 2018

[Check for slides here later?](https://github.com/nucleartide/emberconf-2018)

## Day 1

### Keynote

Ember is seven years old this April. Emphasizing the framework's built in conventions and stability, for building ambitious apps quickly. Relies greatly on the community.

> One presenter is dressed like they're presenting the Oscars. Another is dressed like they're managing the Oscar's IT systems.

Goals to 2019:

* New File Layout - group component controllers and templates, similar to `pods` now. Tools to quickly migrate them.
* Optional jQuery - its functionality is still used heavily, but adds a lot to the file size.
* Simplified Testing - make it easier to use different testing libraries, like Mocha. Clean them up for async functions. Also codemods for painless migrations.
* JS Modules - More focus on importing only parts of the modules you need (object destructuring). Simplify the list of available packages for simpler documentation and use. Migrating to this can be automated.
* Editor Integration - Catch more mistakes, suggest needed code.
* Object Model
    - Computed Properties: Remove need to use `.get` for accessing properties
    - Native Class Syntax: Will introduce `@decorators` for computed properties in these.
    - Class Fields: Easier to adopt TypeScript (but will never be mandatory)
* Fragment Components - The default wrapper around components are removed by default, simplifying the DOM. Can also just create the wrapper element manually if needed, to avoid unneeded API work.
    - Simplified, clearer tracked properties
    - Better separate data that's set in the components or passed in an argument, come from the `args` property

Plot twist - All of these currently in the stable, beta, or canary release.

Upcoming changes (in RFC):

* Switch the angle bracket syntax for components, with single-word component names
* Named blacks for passing in blocks to components, easier to pass in multiple ones.

WebAssembly - gets native-speed on all different devices and browsers. Very good progress on getting all of Ember and Glimmer integrated with WA.

### Accessibility in Ember

Accessibility - defined as making app usable by people of all abilities, disabilities, and and conditions.

Official Standard - WCAG 2.0. Has three measures: A, AA, and AAA. AA will usually cover most businesses.

* Also check for needed compliances with the **Americans With Disabilities Act.**
* Community around the #A11Y movement for improving accessibility.

There's been many advances in bringing disabled people certain senses and abilities back, and Ember should try to do something similar with accessibility solutions (aside from making #A11Y tomsters).

* Accessibility is Emotional
    - People trying to reach what is considered "normal."
    - Dealing with many businesses who don't care about excluding them.
    - Emotional for devs too, hard to deal with pressures to avoid adding accessibility by management, and ourselves to be a "dev rockstar."
    - All this makes it easy to ignore
* Accessibility is Hard
    - Specifications can be hard to get at first
    - With Ember:
        + Route transitions (difficult to track and follow content)
        + Modals (avoid using them if possible, find accessible ones such as one from "Frend" library)
        + `aria-*` support (not always supported on components)
        + Clicking all the things (too many click events are bad)
        + Passwords (can't read back entered passwords)

##### Web Standards here to save the day!

* Use semantic HTML5 tags
* Link VS Route - Use links for routes, buttons for actions
* Keyboard navigation - if your mouse can do it, your keyboard should be able to do it. Don't try to get too fancy
* Check color contrast
* Add relevant alt text to images

> Don't stop fighting. Fight about the right things, for accessibility. Don't look unaccessible apps and say "this is fine."

##### Some add-ons exist for this (but not quite enough:

* ember-a11y
* ember-a11y-testing
* ember-a11y-landmarks
* a11y-announcer
* ember-cli-template-lint
* ember-component-attributes (don't need to change existing components)

> Don't feel bad about knowing how to do this yet. Don't pretend you do.

### Ember Community

People often make (sub)cultures around tech. **Subculture:** a cultural group within a larger culture, with beliefs/interest at variance with the larger culture. Similar yet also distinct.

##### What of the Ember subculture in JavaScript?

* CLI tool is very popular, more-so than with other frameworks
* Large selections of add-ons built for almost any use case
* Higher number of contributors to main projects
* Lots of comments and inputs with RFC changes

##### Ember Subculture's Communication

* Steady decline of StackOverflow new questions
* Most active in the Slack community (#team-learning, #topic-typescript channels especially) 
 
### Say More - Testing and Test Helpers

[Slides here](https://speakerdeck.com/jgwhite/say-more)

##### A "What if?" talk about UI Testing

* What if accessibility determined access during testing?
* Use a less powerful language?
* Say more about the application?
 
### Next Generation of Testing

[Slides here](https://speakerdeck.com/turbo87/the-next-generation-of-testing-in-ember-dot-js)

* `andThen()` helper - asynchronously waiting for previous action to complete before the next one. Good for testing actions that trigger asynchronous actions, such as AJAX requests.
    - Improvement over syntax of many promise chains
    - Another good option is the `async/await` testing, which also avoids promise chains.
* `jQuery` - no longer in Ember (optional), but still used by tests
    - `click` and `find` helpers, along with getting text from elements, still need jQuery.
    - Fixed by importing `ember-native-dom-helpers`, or `@ember/text-helpers`, to use native DOM Javascript APIs to get the same results.
        + Note that `@ember/text-helpers` only works with new test aPIs
* Nested Modules - lets you nest test suites in one another (similar to Mocha). Each needs a different kind of `setup` function called in the start.
    - QUnit tests like this are basically the same syntax as Mocha. But no support for `moduleFor()` functions
        + Can still use plan QUnit tests for code unrelated to Ember
    - "Container" tests for Controllers, Routes, Services, etc. Uses `ember-qunit`
    - Rendering tests for components and helpers.
        + Needs `@ember/test-helpers`
        + `async/await` recommended
    - Application tests, to verify user stories (user workflow, etc)

* Needs `ember-cli-qunit, 4.2.0+`, so these tests may already be available.
    - Use `ember-native-dom-helpers-codemod`, `ember-qunit-codemod`, and `ember-test-helpers-codemod` to help transition to the new tests

* Custom Test Helpers, or the `registerAsyncHelper` function
    - New version just exports an `async` function, and can then `await` different lines in the test
    - Also better to use `data` attributes for test selectors, instead of classes or HTML elements. These can be stripped out of production builds.

* Readable Assertions
    - Installable as `ember-qunit-dom`
    - Can more easily check text, values, and attributes explicitly (not seeing if it equals different values).

### Ember's New Filesystem Layout

##### New filesystem (Module Unification) is still in development, but should be ready soon.

* Co-location for related files (similar to pods)
* Isolation for single-use components and helpers
* Isolation for add-on APIs
* Isolation gives opportunities for lazy-loading

##### Basics of new filesystem

* `app/` becomes `src/`
* `src/` groups related files
    - `init` for all initializer files
    - `services` in its own folder
    - `ui` for routes, components, and partials
        + Routes will have their controllers and templates with them
        + Components have their template and controller grouped together
            * "Local lookup" limits components and helpers to certain directories if placed there
            * Good for components/helpers only being used in specific routes, or private components
    - `data` with different models and transforms
    - Styles can be freely named and placed in the file system
    - Any file with `-test.js` can live anywhere in the file system 
* Namespaces for add-ons
* Overall, improved isolation for app code

Today, this can be used with the CLI Canary with a feature flag

### Mastering the Art of Forms

[Slides here](https://slides.com/danielleadams/art-of-forms-ec18)

Two main pieces: **Component Patterns** and **Data Management**

##### Component Patterns

* Design questions to ask
    - What type of field? (text type, hidden, etc)
    - Required field?
    - Dependent on other components?
    - Do they supply functionality for other components?
    - Inputs that answer the same for most/all of the above can be abstracted into components
* Standardizes API in the application's scope, and UI on app's various form elements
* Groupings are reusable without being bound to initial layout
* Remember that larger form components can `yield` to several smaller form components
* Aim for components to stack together like Tetris pieces - they work together, even if it's not clean

##### Data Management

* If it's not needed by the view, it shouldn't delay rendering
* Questions to ask:
    - Essential when user lands on the page?
    - Important to scope of the route?
    - Concern of the component?
    - If `no` to all of the above, the component can fetch data (retrieved form the `store` in the component controller)
* User can interact with the app sooner
* Relative data is in component's scope, so it's easier to use relative to other code
* Specific forms can have their own data models to match what's needed in the server-side
* Data can be validated anywhere
    - Is the validation specific to the input type, like password length?
    - Error messaging generic enough to reuse?
    - If yes to both of the above, it can be validated on the component level (`ember-cp-validations` to validate computed properties)

#####  Accessibility

* Label everything, or use ARIA
* Clearly indicate required fields (make sure it doesn't trigger beforehand, or is marked with unclear styles)
* Use logical tabbing
* Be thorough with success and error messages (bad feedback can cause button mashing)
    - Use submitted data to give specific feedback, helps reaffirm things to users

### Training and Hiring New Devs

Ember has great stability, but this makes it harder to get others excited for the framework as much as others. So how do you hire well for people to work with Ember?

* Can't just hire lots of engineers and throw them at an Ember app
* Need to ship good user experiences, not just components
* Ember's structure and opinions can be hard to adjust to, can be hard to get buy-in and consistent use. Below tips can overcome these obstacles.

##### Develop a good Ember teaching culture that lasts

* Start small - teach Ember in little steps
    - Slowly scale up their types of tasks
    - Don't just toss the documentation at them
    - Pro Ember training likely would have helped in the long run
* Scaling up the passion
    - For newbies, there's lots of good ideas to introduce, but there's a high learning curve and no other opinions to contrast with Ember's. Limit their exposure so they don't think Ember is the perfect code philosophy, and follow-up after first exposures.
    - For veterans, it's hard to match up with Ember's opinions, even though the learning is faster. Explore things faster to sell them on Ember, don't worry about follow-up as much.

##### Leveraging these things to teach Ember

* "I'm Used to React"
    - Common ideas with components
    - More structured design patterns
    - Fuck Webpack
    - More data structure with Ember Data
* "I Used Ember Five Years Ago"
    - No longer need "brute force" approaches to some problems
    - New/Deleted API methods
    - ES5/ES6 related changes

##### How it Affects Hiring

* Working with others is more important that their skillset
    - Both teachers and students
    - Positive culture impact > "Culture fit"
    - Look for: Communication, Empathy, Consistency
* Hire Diversely (background and perspectives)
    - Better representative of communities using the app

Final tip - **have a Style Guide** for constant programmatic reference. Don't just rely on Ember Docs.

### Living Animation

[Slides here](https://github.com/ef4/living-animation)

* Web Animations API
* requestAnimationFrame
* Different pure JS libraries
* Best Ember tool for this so far - Liquid Fire

##### Game-Engine Principles

* Separation between app logic and animation layers
* Set rules so the motions emerge naturally (one-way data flow with animations)

Ember Animated - A "Glimmerization" version of Ember Fire
