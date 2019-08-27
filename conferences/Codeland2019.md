# Codeland 2019

## Opening

* Be curious (duh)
* Be bold with meeting others
* Be playful with ideas
* Absurd dance? Also, how does slowly waving your arms back equate to being on top of a train?

## Laughter as a Serious Weapon

* "Equitable" app, using "affirmative fractions"
* Laughter to help break down negative pushback to social justice. Done throughout the entire process of the app.
* We have the info and lived experiences already to start making this kind of change.

## John Crepezei. Hardware Hacking

* Intersection of MikeHaven and code?
* Code executing actions for real objects
* Raspberry Pi, coding timing for music
  * L298N connected to Rasp Pi
  * Different add-ons to extend it

## Fighting Hurricanes with Code

* Coding drones to scan areas for SOS calls that pass on to first responders.
* Could also scan for drawings
* Log all entries on a map
* Necessity drives this innovation
* Purpose larger than oneself

## Vuejs Workshop

Framework perk is not making as many repetitive, unneeded decisions like "where to put crop." Vue is simpler, no build process, scalable

### Perks

* Two-way binding between DOM and JS
* HTML with template rendering / declarative rendering / logic and variables.
* Can do either the CLI setup or paste the script tag in the file.
* Vue can limit itself to parts of the DOM, controls scale and limits scope.
* Less barrier between HTML and JS. Logical rendering in the template, more flexible than other frameworks.
* `v-model` for two-way bindings, form inputs automatically change them.
* Events defined in "methods," many event shortcuts to use in the HTML.
  * v:on-click or @click, check syntax options!
* Bind specific values to attributes, classes or otherwise. Good for disabling inputs.

### Lifecycle Events

* Different points in creating and destroying the DOM. for examples geting Aft when created hook is called.
* filters are value formatters, passed through in a pipe in the template. Also can be done in the JS side or with arguments.

### Components

* Reusable functionality and templates.
* Store the usual Vue properties along with a template
* Define props and needed logic
* Can take in parent data
* listen for events
* Slots for passing blocks as variables, and exposes data for use in the blocks.

### Page enhancements VS apps

* For apps, use Code Sandbox. Lays out and adds files for you.
* Single-file components!
  * You can serve one component instead of the whole app.
* The CLI does not add `vue-router` for you. Has programmatic options too, like checking logic to block certain paths.

### State management

* Many components with one data set gets tough.
* Vuex is seperate, which acts as a "store." which keeps all the data. Changes to it notify all areas using them.
* Can be one or more store instances
* Mutations and Actions are how data is changed. Big difference is Actions are async, good for APIs.
* Devtools extension for using store and other Vue features

### Resources

* Check Drasner's Vue articles on CSS Tricks
* Vue docs cookbook for building examples
* Ray Camden's blog's, look for the Vue tag
* Check out Unit tests, also integration tests
* Custom directives?

## You Should Write that Blog Post

* Writing for past, present, and future self. Selfish at its core but that's okay.
* Present self to fuel learning new things
* Future self to establish one's career


## Building a Gendered Dictionary

* Gendered language with built-in meaning slanted to a gender. Has a gender as part of the definition
* Using regex to precisely look for gendered words in a data collection of definitions.
* Had to filter data to only include human-based words too.
* The language we use potentially reinforces stereotypes and inequalities.

## Art Meets Algorithms

Pixels in an image are basically a graph,trying to solve the route shortest between them all.

1. Convert image to pixels
2. select a subset of all the pixels at random
3. Randomness to create a randomized pixel selection (1 from each 3×3 grid)
4. Apply "nearest neighbors algorithm" to create line art. But doesn't work since it has several long jumps, too simple
5. Remove long lines with "2- opt" algorithm. Remove all line pairs that cross and replace them with non-crossers

Also check out fractal art and voronoi diagrams.
