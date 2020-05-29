# Practical Object-Oriented Design in Ruby

Object-Oriented Design (OOD) means one has modeled the world as a series of messages passing between objects. It lets programmers manage dependencies in a way to build objects that better handle change. Objects that can't handle change know too much about each other, and changing one creates a ripple effect of changes and breaks in surrounding objects.

**This design perspective is important since it helps programs adjust more easily change, and things always change.** Applications that are easy to change are enjoyable to improve upon and extend, and brittle applications are expensive and time-consuming to make changes (if it's possible at all). This is especially important for larger applications that need to scale well. So code must be written both for changes made today and to reduce the costs of future changes.

There are many principles and patterns to follow for OOD, but these are just tools and won't automatically lead to well-designed software. Programmers with good intentions may overdesign software and apply them when they're not needed. The result is boxing themselves in limited the kinds of changes they can make by their code's excessive design rules. It can also fail when people try to isolate design from development - it's an iterative, uncertain process that shouldn't simply be handed off from one group to another, with no definite endpoint.

OOD is usually executed with object-oriented programming (OOP) languages like Ruby. It brings data (attributes) and behavior (methods) together into objects. There are no data types, just objects with different methods attached that are invoked send communicate data, and trigger actions. Many objects are built of the same methods with different data, so it uses classes as blueprints to make new objects. It comes with many classes built-in for common uses, like strings. The ultimate result is an OOP language like Ruby being very open-ended and becomes tailored to different problems.

**Design theories should be applied appropriately at the right time and place, and one can only learn this through practice and experience.** This book looks at practical OOD approaches with Ruby.

All notes in this section have [Practical Object-Oriented Design in Ruby](https://www.amazon.com/Practical-Object-Oriented-Design-Ruby-Addison-Wesley/dp/0321721330) as a resource.
