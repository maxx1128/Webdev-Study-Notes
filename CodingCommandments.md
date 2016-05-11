### Basic Rules for all Front-end Projects

##### All
* Always add inline comments to the top of files, style selectors, reusable code chunks, and unclear code blocks.
* Never put element tags and their content on the same line.
* Always add class names to HTML elements unless they're HTML5 template elements (header, footer) or universal components.

##### CSS/Sass
* Never apply width, float, outside padding, or outside margins to components.
* Never rely on externally defined elements or variables for key styles. Use scoped variables instead.
* Each element must use unique, scoped classes with the BEM naming convention.
* Never use layouts to apply padding or other styles to child elements
* Only nest classes, and never nest them further than two selectors down.
* Never write CSS with tabbed indents or uppercase letters in class names.
* Always use one level Sass maps for global variables, and two level maps if they have a range of values.

##### Javascript
* Always bind JS to data-* attributes, never classes.
