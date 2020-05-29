# Component Helpers

Most large sites will want to abstract common front-end patterns into components, which lets them be reused in needed contexts and create a single source of truth. One way to approach this is with helpers. This will walk through the basic steps to set one up.

## 1) Create an HTML template

Let's say we want to make a dropdown menu component. It'll need text for the trigger, two unique IDs, and a list of links with text to fill up the menu. It should let you set optional classes and properties the wrapper so its more flexible.

First we need the HTML. Let's use the Material Web Components HTML as an example.

```html
# app/views/components/dropdown.html.erb

<div id="demo-menu" class="mdc-menu-anchor">
  <button id="menu-button">
    Open Menu
  </button>

  <div class="mdc-menu" tabindex="-1">
    <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
      <li class="mdc-list-item" role="menuitem" tabindex="0">
        <a href="/path/to/page">
          Menu Item
        </a>
      </li>
      <li class="mdc-list-item" role="menuitem" tabindex="0">
        <a href="/another/path/to/page">
          Another Menu Item
        </a>
      </li>
    </ul>
  </div>
</div>
```

That's the easy part. But the static info here must be replaced with variables we'll want to change for each use. This can be done with normal `.erb` syntax. They can have whatever names and structures you want, but you'll need to remember them for later.

```html
<%= content_tag(:div, id: wrapper_id, class: "mdc-menu-anchor") do %>
  <% button_tag(type: button, id: button_id) do %>
    <%= button_text %>
  <% end %>

  <div class="mdc-menu" tabindex="-1">
    <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
      <% menu_items.each do |item| %>
        <li class="mdc-list-item" role="menuitem" tabindex="0">
          <%= link_to(item.text, item.href, role="menuitem", tabindex="0") %>
        </li>
      <% end %>
    </ul>
  </div>
<% end %>
```

## 2) Create a Helper to Pull the Template

We have the template, now we need some way to pull it when needed. We could reference the template directly, but using a helper lets you use more logic around constructing it so it's much easier and DRYer.

In the helper folder let's make a `components_helper.rb` file and set up the basics.

```ruby
# app/helpers/components_helper.rb

module ComponentsHelper
  def dropdown_component()
    # ...
  end
end
```

Let's focus on the `dropdown_component` method. First is to set up the render and list all the values it will need. These will be the variables we referenced in the template. These must be passed into the method as arguments, and then assigned to their respective values in the template.

```ruby
def dropdown_component(button_text, menu_items, wrapper_id, button_id)

  render(
    "components/dropdown",
    wrapper_id:  wrapper_id,
    button_id:   button_id,
    button_text: button_text,
    menu_items:  menu_items
  );
end
```

This is a straight 1-1 rendering of the variables, but using it as a helper lets us simplify it. For instance, both IDs are going to be random IDs, so we can default them to random strings by default. The method to create this random string can be defined elsewhere in the helper if you don't already have a method like this.

```ruby
def random_string
  (0...25).map { (65 + rand(26)).chr }.join
end

def dropdown_component(button_text, menu_items, wrapper_id=random_string, button_id=random_string)
  render(
    "components/dropdown",
    wrapper_id:  wrapper_id,
    button_id:   button_id,
    button_text: button_text,
    menu_items:  menu_items
  );
end
```

Now when we call the helper for the component, we only need the first two arguments. So we could call it like so.

```ruby
# Passing needed values directly
<%= dropdown_component("Menu button",
                      [ { text: "", href: ": },
                      { text: "", href: ": }]) %>

# Passing needed values as variables (preferred)
<%= dropdown_component(button_text, menu_item_array) %>
```

## 3) Adding Optional Classes and Properties

For the wrapper, we may need to add additional classes and properties based on the context. There's a few steps to getting this functionality.

### 3a) Add an Options Arguments

Obviously we need an argument to pass the options into. We'll call it `wrapper_options` and set it to `nil` by default since it's optional.

```ruby
def dropdown_component(button_text, menu_items, wrapper_id=random_string, button_id=random_string,
                       wrapper_options=nil)
  render(
    "components/dropdown",
    wrapper_id:  wrapper_id,
    button_id:   button_id,
    button_text: button_text,
    menu_items:  menu_items,
    wrapper_options
  );
end
```

### 3b) Create a Method for Preserving Default Classes

One obstacle you'll hit is that the wrapper needs a default class, `"mdc-menu-anchor"`. We want this class to always be there, and not be over-written by new classes. We can create a method that will take the classes from `wrapper_options` and merge them into a default. We'll call it `class_merge`, and include it in the helper module.

```ruby
def class_merge(options, default_classes)
  options ||= {}
  options[:class] = "#{default_classes} #{options[:class]}".strip
  options
end
```

This accepts our `wrapper_options` object and a set of default classes to preserve, and merges the `class` part of the object with the default. This way all the other properties are unaffected. Since our `wrapper_options` is nil by default, it converts it to an empty object so it doesn't error on use.

### 3c) Add the Method to the Template

```html
# Wrapper in the Template
<%= content_tag(:div, id: wrapper_id, class: "mdc-menu-anchor") do %>

# Usage
<%= dropdown_component(button_text,
                      menu_item_array,
                      wrapper_options: { class: "class_here another_class_here"
                                         data-value: 12 }) %>

# Rendered Wrapper
<div class="class_here another_class_here mdc-menu-anchor" data-value=12>
```

With that, we now have an optional way to add classes and any other needed properties to our component. This makes it easier to use in a wider range of circumstances, and avoiding the need to make multiple versions with multiple helpers.
