# Creating A Living Style Guide, A Case Study

### Intro
* Living style guides keep designers and developers in sync, especially with complex elements and patterns.
* They're important to remove inconsistencies and unneeded complexities when build a large site or collection of sites, e.g. lots of unneeded color shades.

### Colors
* In the study, a selection of primary and accent colors were chosen and designers could lighten and darken them by set percentages. This was meant to unify brand colors consistently.
* However, lightened or darkened colors weren't generated automatically for some elements since it didn't guarantee contrast or aesthetics.

### Architecture
* The style guide used Brad Frost's Atomic Design methodology for building elements, but renamed the category names so people using the style guide could more easily navigate it.
* Preprocessor variables and functions were also documented in a "Helpers" category.
* They decided on a set of rules to determine how patterns are classified:
    *  **Elements (atoms)** were elements tag name selectors or single classes on one element
    *  **Modules (molecules)** were patterns that needed more than one HTML element
    *  **Components (organisms)** were patterns that could also be an HTML5 sectioning element, such as <header>, <footer>, or <article>.
* Names were hard to decide on, but once they were chosen they stuck.
* CSS was written with the BEM naming convention.

### Mistakes to Avoid
* **Don't release too early.** Take the time to look at every page and run needed tests.
* **Be careful of CSS-Breaking Changes.** These were any change that would require a class-name change, which would effect all working instances of it.
* **Organize your Style Guide based on what works for your team.** Organizing the elements based on Atomic Design principles confused the team in the study. Go with what makes elements easier to find.

### Desirable Style Guide functions
* Completely control the structure and template.
    * If not this, then at least output a JSON object for making a custom template.
* Separate code output and example output.
* Create a sortable section hierarchy.
* Parse comments in Markdown.
* Put examples in the comments, if desired.
* If generated from custom tags, define custom tags for certain elements like colors.
    * If not this, then parse any key/value pair.
* Bonus: written in JavaScript for ability to hack it if needed.

> The group behind the study created [LivingCSS](https://github.com/straker/livingcss) as a style guide generator that met all these requirements.
