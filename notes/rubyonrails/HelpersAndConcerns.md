---
group: rubyonrails
layout: post

incomplete: true
title: Helpers and Concerns
descr: How Helpers and Concerns help modularize complex logic
---

Helpers and Concerns are both ways Rails lets coders bring logic into modules that can be used in multiple places.

### Helpers

Helpers are defined in the `helpers/` folder, and are usually named according to the files that need them most. For example, a `posts_controller.rb` file could also have a `posts_helper.rb` file.

Helper methods can be accessed globally in all views (and in other classes if needed), so they're great for abstracting complex view logic and not letting them clutter up the HTML. However their global scope is also a downside, since namespacing and method overlapping can become an issue with larger apps.

If managing helpers gets too difficult for complex presentation logic, a better option may be creating Decorator or Presenter classes, which can give a more organized and scoped way of organizing data for the view. However these aren't built into the Rails framework.

### Concerns

Concerns are modules that also abstract complex or repeated logic, but their purpose is to be used in different classes instead of views. Most major folders within `app/`, such as controllers or models, will have a `concerns/` folder for different modules. As such their use should be limited to their parent folder - so modules in `app/controllers/concerns/` should only be used in `app/controllers`.

Despite aiming to be limited in scope, concerns should still not be coupled tightly with other files or be too dependent on each other. Concern methods should ideally also only be methods used in more than one place, or there's little reason to not put it in the one class using it.
