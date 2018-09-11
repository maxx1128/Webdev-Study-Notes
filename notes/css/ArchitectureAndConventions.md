---
group: CSS
layout: post

title: Architecture and Conventions
descr: Different large-scale ways to organize CSS and Sass
---

# SEM

SEM stands for **Scalable, Extensible, Maintainable.** It's a high-level CSS philosophy meant to inform all CSS written in a repository.

* **Scalable** - Scalable components can be used anywhere without any coding changes
  - Other styles and classes don't leak into a component, making the component's styles dependent on markup around it
  - Prevents changes in one component from affecting seemingly unrelated ones
* **Extensible** - Extensible components can have extra functionalities or styles added on without breaking the base component
  - Buttons can be extended with different styles, while keeping it in one button component and not breaking any version of it
  - Can be thought of as _modifiable_ in this sense. Many different modified versions of a component, while only maintaining one.
* **Maintainable** - Maintainble CSS can be easily understood and used, letting developers focus more on adding to the codebase without breaking it
  - Add comments where needed
  - Keep things as simple as possible
  - Give components a single source of truth
  - Set specific standards to follow, such as with a linting tool

# BEM

BEM stands for **Block, Element, Modifier.** It's a CSS naming convention that helps keep specificity low and classes easily identifiable.

{% highlight html %}
<div class="o-layout">
  <header class="o-layout__item o-layout__header">
    ...
  </header>
  <main class="o-layout__item o-layout__main">
    ...
  </main>
  <aside class="o-layout__item o-layout__item--slim o-layout__sidebar">
    ...
  </aside>
  <footer class="o-layout__item o-layout__footer">
    ...
  </footer>
</div>
{% endhighlight %}

{% highlight css %}
.o-layout { ... }
.o-layout__item { ... }
.o-layout__header { ... }
.o-layout__main { ... }
.o-layout__sidebar { ... }
.o-layout__footer { ... }
{% endhighlight %}

* `o-layout` is the block, which identifies the component as a whole and acts as a wrapper class and component namespace.
* `o-layout__item` and similarly named classes are elements, and are the basic building blocks of the component. Note how one element can have multiple elements.
* `o-layout__item--slim` is a modifier, and creates a specific alteration to one of the blocks or elements

The CSS for each class is not nested, affected by parent selectors, or influencing any child selectors. At most you'd need to nest 1-2 levels on, for rare cases. Usually things can be kept at a single class level, keeping CSS specificity low.

# ITCSS

ITCSS is **Inverted Triangle CSS,** and is a file architecture to **better organize CSS files so it's easier to scale and maintain.** It works best with a preprocessor like Sass, but can be used without it.

ITCSS requires importing or referencing all your CSS files in the following order, based on the following categories:

* **Settings** – Globally used variables and values. No CSS is output.
* **Tools** – Globally used mixins and functions. Still no CSS output yet.
* **Generic** – Global stylings, such as resets. Can also be styles to the body or html elements, such as box-sizings and global font styles.
* **Elements** – Styling for all native HTML elements, like headers and paragraphs.
* **Objects** – Non-decorative, class-based stylings. Examples are layouts for pages or modules, such as article layouts of media objects.
* **Components** – Specific, styled UI components, such as headers, buttons, article previews, etc. Component markups may use classes from Objects and Components.
* **Utilities** – Helper classes with ability to override anything else, such as classes to adjust padding or visible. Only real place to use `!important`.

Note that as you go down the reference list, CSS specificity gradually increases. This fits with the cascading nature of CSS, so specificity is easier to manage and there's less leaking styles. Classes expected to override others, like Components overriding Objects, will override predictably and help make the CSS maintainable and extensible.

# OOCSS

OOCSS is **Object Oriented CSS,** and is a methodology for structuring CSS components. It approaches components like lego blocks: **each component is built out entirely separate from each other, then combined to make larger ones.**

Buttons are a good example of this. Different button styles, such as colors, border radiuses, size, etc, should all only be changed directly on the button with modifier classes. This makes the component extensible, and it can easily be used into larger components, like forms and footers. Different versions of the component can be used anywhere, the styles won't leak or be leaked into, so it can be reliably used and changed without something breaking.

This methodology means you should:

* Have a clear idea of what each component will consist of, and _won't_ consist of
* Break down larger components into smaller parts, and built each part first and separate
* As always, **Keep CSS specificity low**
