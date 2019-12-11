# Rules of Thumb

Some principles should always be kept in one when developing accessible interfaces.

## Keep JavaScript Small and Optional (when possible)

JavaScript isn't always available, so when you can, make it a progressive enhancement instead of a requirement. Some components _need_ JavaScript though, as long as you're 100% sure that's the case.

When it is used, keep it small and light. Avoid jQuery and other third-party scripts if you can and code it out yourself. Most times what you need is simpler than you'd think, and it's not too tough to write it yourself. Third-party JavaScript also takes control and privacy away from your users, which goes against the principles of accessibility.

## Rely on Browser Features Whenever Possible

Browsers already have built-in functionality for things like assistive tech and progressive enhancement. It's often more reliable (and easier) than trying to subvert it with custom functionality, so know when to go with that instead of overthinking it.

## Simpler is Often Better

When choosing between making something work and making it perfect, make it work first. A simpler, working accessible solution is better than a perfect one that's more complex than needed.

People may argue they need it to be perfect for reasons like consistent branding or having a neat feature. My response to that is most users care about it working more. If it's imperfect but works, users can do what they need and are happy. If it's perfect but more fragile, it'll break for users and they'll be furious regardless of what else was added. Durable solutions make for happier users, even if you have to sacrifice some fanciness.

If you're unsure if users can understand something, remember this mantra: **when in doubt, spell it out.** Adding some explanatory text is the simplest, and one of the most accessible, ways to provide extra context and info.
