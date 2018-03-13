# Ember Conference 2018
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

### Accessibility in Ember


### Ember Community


### Say More, Testing and Test Helpers


### Mastering the Art of Forms


### Training and Hiring New Devs


### Living Animation