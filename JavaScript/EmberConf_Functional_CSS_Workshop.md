# Ember Conf 2018
## Writing Functional CSS for Ember Applications


#### Functional CSS - Utility-first CSS

CSS built entirely on helper classes, similar to bootstrap ones that adjust simple, straightforward properties.

```
<div class="max-w-sm mx-auto leading-normal">

  <p class='mb-4 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

  <p class='mb-4 text-red'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  <p class='mb-4 text-blue font-bold'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
```

> Examples Functional CSS libraries: **Tailwind**, Tachyons

Benefit of utility classes - removes the abstraction of overly-semantic class names. `font-thin text-center` classes is clearer than `homepage__title`, and is easier to visualize.

For Tailwind, `p-4` and `mt-1` are examples that adjust padding and margin, and can usually be understood at a glance.

**Issue:** Components that use the same group of classes are harder to change. It requires changing the same group of classes in many places, which is extra work and leaves space for human error and inconsistencies.
    - Response: Abstract these items into reusable components, which brings the classes to a single source of truth while reusing them in different locations.

**Issue:** It breaks the rule of firmly separating the HTML from the CSS, since they semantic markup is closely linked to the styles.
    - Response: HTML and CSS are already coupled together and this is undeniable. It's better to have a CSS architecture in place that embraces this, as it'll be more effective.

**Benefit:** Never need to open a CSS file, makes it much faster to build components and interfaces without editing existing CSS.
    - Response: Functional frameworks will normally get you 95% of the way with large apps. So some new CSS will likely still need to be written for more complexly styled components that aren't covered. But all the basic styles can still be covered by Functional CSS.

**Benefit:** Easy to adjust component classes and styles through a browser inspector, and adjust styles in real time. Quickly find the classes needed to achieve a desired look, then just copy the classes over.

You can use `ember-cli-tailwind` to configure Tailwind's default and settings in the `app/styles/tailwind` folder. You can also go to `http://localhost:4200/tailwind` to see a styleguide for the current utility styles.

### Ember Components to Avoid the Issue of Reuse

Ember components let you set the classes for a component in their controller. This lets you create reusable components while abstracting their utility classes into a single source of truth.

However, make sure your components don't require directly passing different classes to components in order to change styles. This mixes the component abstraction with the functional CSS abstraction, which makes managing and updating the CSS tougher.

```
// Bad
{{#ui-title class="bg-blue"}}
    Title here!
{{/ui-title}}

// Good, with the classes handled in the controller (computed property, etc)
{{#ui-title color="blue"}}
    Title here!
{{/ui-title}}
```

It's easier to start with the raw output with Functional CSs, and then abstract that into different components. This helps ensure consistency and lower repetition.

However, one issue is that it can lead to excessive component rendering, which drags down performance. The answer lies in **build-time components,** which only ships the compiled version of a component at build time to avoid the performance cost.

A useful add-on for managing different styles and classes is the `ember-cli-ui-components` add-on (still experimental, not yet open-source), which has a future of creating different groups of classes to use and reference on components.

```
import { Styled, group } from 'ember-cli-ui-components';

export default Component.extend(Styled, {

    tagName: 'button',

    styles: {
        base: ''

        defaultStyle: 'blue',

        colors: group({
            blue: '',
            red: '',
            green: ''
        }),

        sizes: group({
            small: '',
            medium: '',
            large: ''
        })
    }

});

// In the template

{{#ui-button}}
{{#ui-button style="blue"}}
{{#ui-button style="small red"}}
```

This component also uses these to generate a styleguide you can reference all the different groups of styles and how they look.