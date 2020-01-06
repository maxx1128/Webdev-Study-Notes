# Rules of Thumb

Some principles should always be kept in one when developing accessible interfaces.

## Use Semantic HTML Whenever Possible

Semantic HTML gives pages structure and meaning that can be conveyed across the widest number of devices and mediums possible. It is the true foundation of accessible web interfaces, so never overlook it. It's the basis for internet device content in the present and future, so it helps interfaces adapt to new technology too.

ARIA attributes are great to add extra semantics when needed, but don't change behavior or functionality. That's why they're not a substitute for semantic HTML on their own. So while some specific patterns need ARIA, all patterns always need semantic HTML too.

## Keep JavaScript Small and Optional (when possible)

JavaScript isn't always available, so when you can, **make it a progressive enhancement instead of a requirement.** Some components _need_ JavaScript though, as long as you're 100% sure that's the case. When progressively enhancing, the non-JavaScript version can be a simplified, or altogether different, UI presented to the user. As long as the same users and actions are still available to them, that's okay. Triggering different style and functionality hooks when JS is detected smoothly adds onto it when it can.

When it is used, keep it small and light. Avoid jQuery and other third-party scripts if you can and code it out yourself. Most times what you need is simpler than you'd think, and it's not too tough to write it yourself. Third-party JavaScript also takes control and privacy away from your users, which goes against the principles of accessibility.

## Rely on Browser Features Whenever Possible

Browsers already have built-in functionality for things like assistive tech and progressive enhancement. It's often more reliable (and easier) than trying to subvert it with custom functionality, so know when to go with that instead of overthinking it.

## Don't Let Design Block Accessibility

Some designs you'll see or receive don't have accessibility in mind. If you can, push to change designs when needed when accessibility needs aren't being met. Don't let design block or dictate what accessibility needs are included.

## Look Beyond Technical Needs

Checking the boxes of contrast, navigation, and screen readers isn't always enough. User experiences can still hit blocks with options presented to them, such as not having some video functionalities to more easily watch something.

## Remember Context

Link and button text may make sense to sighted users, but not to others using a medium with less context. If you can see the input elements closely above an "Edit" button, you can tell that's what it changes. But screen reader users will get to the button and only hear "Edit," and need to skip around it to find the input elements as context if they didn't get there exactly as expected. Labelling it "Exit X Inputs" or something similar fixes it, and even helps sighted users with the extra clarity.

Examples like this are why including extra context in interactive elements matters. You can't always predict user flow depending on how they navigate the page, so don't make assumptions and include extra context in advance.

This context also includes extra information and instructions in general. What seems obvious to you and one group may not be obvious to others.

## Simpler is Often Better

When choosing between making something work and making it perfect, make it work first. A simpler, working accessible solution is better than a perfect one that's more complex than needed.

People may argue they need it to be perfect for reasons like consistent branding or having a neat feature. My response to that is most users care about it working more. If it's imperfect but works, users can do what they need and are happy. If it's perfect but more fragile, it'll break for users and they'll be furious regardless of what else was added. Durable solutions make for happier users, even if you have to sacrifice some fanciness.

If you're unsure if users can understand something, remember this mantra: **when in doubt, spell it out.** Adding some explanatory text is the simplest, and one of the most accessible, ways to provide extra context and info.

## Resources

* [What a Year of Learning and Teaching Accessibility Taught Me](https://www.24a11y.com/2019/what-a-year-of-learning-and-teaching-accessibility-taught-me/)
* [The intersection of markup, content and context in accessibility](https://www.24a11y.com/2019/the-intersection-of-markup-content-and-context-in-accessibility/)
