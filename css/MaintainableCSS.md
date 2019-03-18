# Maintainable CSS

### Intro

* Maintainable - Can edit one module without affecting others
* Scalable - Increasing a CSS codebase doesn't make maintainence harder
* Modular - Made up of independent units to be mixed and matched

#### Semantics

* Semantic class and ID names make it clear what the HTML represents
* Makes them easier to find, maintain, and update
* Styles won't affect unintended elements as much

### Reuse

* **Don't reuse styles**
* Creates class bloat on HTML, which hurts speed and debugging
* With responsive design, creates even MORE bloat as more breakpoints means more classes
* Utility classes can be too vaguely named, not good for semantics
    * *I only disagree here when it comes to padding and margins. These are fiddly and change often, so it's often more efficient to use specific utility classes for them instead of editing the CSS. Best if generated in a way for easily editing the spacing units.*
* Careful with reusing with mixins: more complexity and parameters means more risk. If needed, keep them simple

### IDs

* Don't use IDs, as classes can't override their styles
* Use for behavior like links, not styling

### Conventions

* Use a consistent naming convention, such as BEM

### Modules

* All major site elements can be considered a module
* Modules are made up of components (copy, images, links, other modules, etc)
* The more conditional logic in a module, the harder maintainence is
* For similar modules or different versions, duplicating and editing the code is often preferred

### States

* Generic *.is-active* state classes are too generic for consistent use. Prefix them with the component name.

### Versioning

* For new component versions, duplication is preferred for more maintainence and unique naming

## Resources

* [Maintainable CSS](http://maintainablecss.com/)
