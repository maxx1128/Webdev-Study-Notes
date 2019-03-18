---
group: accessibility
layout: post

title: Accessibilty For Everyone
descr: My notes on Laura Kalbag's book on web accessibility as a whole

resources:
    - title: Accessibility for Everyone
      author: Laura Kalbag
      link: https://abookapart.com/products/accessibility-for-everyone
      publisher: A Book Apart
---

# Considering Accessibility

Web accessibility is the job of everyone on the web team, not just one developer meant to make a few changes based on it afterwards.

### Common Excuses

* **It's boring** - Shiny tools are only distractions from our site's actual concerns: why the site/product exists and who benefits from it. Boring or exciting is completely unrelated to your real goals.
* **We can't tell if anyone benefits** - accessibility isn't just for blind people or people in wheelchairs. It affects people with huge ranges of disabilities, impairments, or circumstances. More details later, but it's always more people than you assume.
* **We don't know what to do** - Lots of ways to approach, from small changes to approaches you can use from the start.
* **It's too tough** - The web is tough, yet we do it anyway. accessibility is no different than other challenges we face, so it being tough is no excuse.

### Inclusion

* _Accessibility_: Degree an environment is usable by as many people as possible
* _Web accessibility_: Same as above, but swap "environment" for "website"

Both of the above are forms of **inclusion.** There's lots of examples of this around us:

* Doorknobs with pivoting handles instead of spherical knobs
* Movies with subtitles
* Pedestrian traffic lights with tones
* Signs with simpler, shorter language (for reading difficulties)

All these make the environment more accessible without making it less usable for others. It's also good for business: **accessible products can be used by, and sold to, more people.**

**Universal Design** differs since it focuses on the needs of the widest possible diverse audience, not just disabilities. Instead of adding a ramp to a building with stairs, it'd have a ramp built in as part of the stairs. It isn't a "bolted on" solution - people can naturally use one or the other, almost without noticing.

For a website, the difference is like adding a button that makes text larger (accessible), and just making all the text larger from the start (universal).

### Empathy

**The ability to share the feelings of others.**

It's easy to solve our own problems, but this is problematic since most people in tech are similar. We forget about different people trying to solve the same issues. Understanding and caring about different needs makes our products better.

It's also part of why diversity matters in web teams, it increases empathy which makes our products better. You can't "other" the user as stupid - another way to avoid this is referring to them as "people" or "humans." Don't patronize users.

### Screen Readers and Beyond

Screen readers are much more prevalent today than years ago. Not just used by those with impairments, it may be circumstantial (listening in a car) or preference (like listening instead of reading).

There's also keyboard navigation, using only a keyboard to access a website. Also used for more use cases than expected, like those without mouses, have difficulties with a mouse (motor function issues), or programmers used to text-based consoles.

* **Up and Down** for scrolling
* **Tab** for moving between interactive elements
* **Space bar or Enter** to interactions

Other navigation hardware to remember are touchpads, touchscreens, different types of mice, or foot-operated mice. Most of these are easy to take into account.

* **Switch devices** let users interact via a switch, going through options and triggering the switch on certain ones. Macs make this easy with Switch Control, in the accessibility settings.
* **Eye trackers** track eye movements to let people navigate screens with just their eyes. Real expensive.
* **Screen magnifiers** give zooming functionality and are in most OSs. Often used by people with visual impairments.

Overall, assistive tech can only do so much work. Certain needs are only met if they're part of the core design. It can't just be left up to experts each time - it falls on everyone working on the web.

# Disabilities and Impairments

### Defining Disability

In the US, roughly 12% of the population has a disability. This covers a wide spectrum - physical, neurological, visual, etc. It could be as simple as below-average eyesight. Also just be an older person with failing eyesight and arthritis tremors.

Can be helpful to think of it as "X _has a disability_" instead of "X _is disabled._" The person comes first, and they're not defined by their disability. They're part of the whole audience, not just the "disability audience."

### 5 Types of Disability

1. **Visual:**
    * Wide spectrum, include near- and far-sightedness, and astigmatism. Some vary from day to day.
    * _Color blindness_ includes not seeing particular colors or distinguishing certain ones. Several different versions causes certain colors to look lighter, makes colors looks similar, or not seeing some colors at all.
        - Designing for these can include ensuring strong color contrast, and not using color to signify meaning.
    * _Eyesight loss_ can also make people not see everything in their field of vision. Beaten with readable text sizes, clear labels, text alternative to images and video, and high text/background contrast. They may use screen readers
2. **Auditory:**
    * _Hearing Loss,_ which could be partial or complete. Due to inner-ear blockage, nerve damage, aging
    * Affects video and audio content. Add subtitles or written transcripts!
        - I personally prefer transcripts due to preference, and not wanting to disturb others without pulling out headphones. Another example of how accessibility is good for business.
3. **Motor:**
    * Lots of possible causes to motor impairments: cerebral palsy, neural defects, muscular dystrophy, arthritis, traumatic injuries, or strain from physically demanding jobs (like repetitive strain injury).
    * Affects how people use keyboards, touchpads, mice, and mobile devices. Harder to do precise actions like clicking small areas, selecting text, doing right clicks. Can slow down reactions, bad for interfaces with timed cues or animations.
4. **Cognitive:**
    * _Memory,_ for finding tasks or seeing where you are in a site
    * _Attention,_ for processing lots of info, or info over long time periods
    * _Problem-solving,_ for processing info or unexpected content
    * _Text Processing,_ for understanding text, speech, and language
    * _Math Processing,_ for understanding math concepts (time, money, pricing)
    * _Visual Processing,_ for interpreting visual info/representations (icons)
    * People with learning disabilities can have a hard time processing info. Helpful to give extra context and info, and avoid unneeded info in whatever medium they use.
    * People may be illiterate due to limited education, learning difficulties, or living in an area with a different primary language. Helpful to give simple copy, headings in content, and multiple-choice answers over open-ended ones.
5. **Vestibular Disorders and Seizures:**
    * Caused by damage to the parts of the inner ear and brain controlling balance and spatial orientation. Can cause dizziness, vertigo, confusion, hearing/visual issues. On the web, often is motion sensitivity.
    * Affects 35% of adults aged 40+.
    * Try offering option to tune down/off motions and animations. Show the option before any animation happens. Otherwise it can cause headaches, nausea, even seizures (specific guidelines to avoid that last one).

### Environmental Factors

accessibility affects everyone, not just those with impairments, since environmental factors can affect us all, now and in the future.

#### Legacy Browsers

Many organizations (public or non-profit ones) are stuck with older browsers. Simply checking for basic performance on other browsers is a form of accessibility checking.

This can apply to anyone in a job stuck with older browsers, or temporarily working in a place with them too.

#### Devices

Devices can vary widely in size, touch gestures, browser availability, how the content is presented, or how many people view them at once. Phones, game consoles, web-enabled TVs, smart-watches, VR headsets, etc.

People don't just use mobile "on the go," people access the web at their homes all the time. Don't focus only on what info people may need when traveling for mobile devices.

There's no reliable metrics to measure these kinds of things are device width, everything else is either not widely tracked or could be misled by browsers. The only real option is building for as many sizes and devices as possible, building for the unknown. Tough, but it gives our sites a much longer lifespan.

#### Connectivity

Bad connectivity commonly stems from:

* Lots of people accessing public Internet
* Lack of access to fast broadband in rural and remote areas

These can affect anyone traveling, and consistently affect the many people with worse Internet than developers. Assuming fast connectivity is dangerous.

#### Languages

The world-wide-web is (obviously) worldwide, so support for multiple languages is important to consider. Professional or automatic translations are potential solutions, but they're respectfully expensive and unreliable.

**Good starting point: Simplify your language!** Content is naturally easier to understand, and makes translations easier too.
* Double-check character sets for letters, make sure they have characters to use for different languages. Languages can vary greatly in needed characters, not having them can render text unreadable. Do this for webfonts too.
* Remember that different languages may read the text from either the left or right side. You can change this via CSS or HTML (the `dir` attribute on the body). More specifics on this later.
* Don't forget that your environment and context greatly affects how you view a site.
    - High or low light conditions can lower readability. High contrast between text and background helps a lot.
    - Being in a public space, or any space where loud noises are discouraged, can affect audio. Captions, subtitles, and transcriptions get around this.
    - Some sites may have specific privacy or stress cases to design for. An example is a domestic abuse site, which always has a button available to hide it in case victims need to hide it from abusive partners.

There are so many factors affecting accessibility that, realistically, it's impossible to plan for them all. That's why the best option is to plan for as many as possible.

# Planning for Accessibility

Making the case for accessibility planning to everyone in the start:

* It increases its potential audience by making it easier to find, access, and use.
* It gives an edge over competitors, since people who struggled with an inaccessible experience will prefer you. This includes better translations.
* It can cut costs and resource drain otherwise spent dealing with difficulties customers may face. For example, can make more transactions without needing to talk to customer service.
* accessibility standards may be required be law for some sectors in certain countries. Not meeting them can get you sued.

### Building Your Team

Everyone whose decisions affect a site's design has a role to play in accessibility.

#### Leadership

* Helps make accessibility a company-wide practice and requirement, so it's not just a few people working on it and dealing other bad decisions from others.
* Understand and measure the specific benefits - saved costs, legal issues, operational changes. Knows which ones to prioritize.

#### Professional Development

* Outside experts can help, but there's many blog/book/research based resources to use too.
    - Can get consulting work on it specifically for your company
* Will take time from other work, and time to get used to, but the improvement itself is rapid.

### Scoping the Project

Ask these questions early on, and keep a written (not in stone) record of their answers throughout development. Helps ensure the accessibility needs aren't forgotten over time - no ambiguity and shows their importance.

* Product's purpose?
* Target audience, and their needs/restrictions?
* What does the product help people do?
* What's your product's experience?
* How can accessibility be used in production?
* What platforms, browsers, OSs, and assistive technologies should be tested on?

#### Budgeting

Ally is a practice, not a budget item. Training for it may cost more time or money initially though. Consider all possible costs.

Limited budget? Aim for the cheapest options that can reach the widest audience. Sometimes a simpler interface without complex interactions is the better choice, in this regard.

### Research

Research helps uncover motivations and habits for using your site, looking into audience needs (such as impairments). Helps make more informed decisions on ally and what to prioritize.

**Online research** is good for tight budgets, and also makes including those with disabilities as part of the test groups. However **face-to-face research** lets you see reactions with the full context of environment, needs, and behavior. More accurate reporting and easier to follow up on important topics. It also catches things users might not mention since they're "normal," like how they hold/use their mobile device.

Good to have people in a range of different roles involved with the research, can notice a wider variety of important details.

**It's harder to including people with disabilities into testing, but it's important to do it anyway.** Brings important accessibility concerns to light much faster, makes them harder to ignore. Look at people with disabilities as individuals, don't assume their experiences are all the same - treat them the same as you would anyone else. Separate **what the user needs** from **what technology is needed.**

Make sure research data is quantitative, easier to get meaningful patterns from it.

### Production and Development

Your tech stack matters. Know what accessibility benefits and drawbacks any tool or framework brings with it - make sure they had accessibility as a priority. The Content Management System (CMS) also matters a lot, since it directly affects how accessible output content is.

#### Testing on Devices

Remember that some assistive tech will be part of your budget. Most are inexpensive or even free.

### Maintenance

Watch out for the "gotchas" of last-minute changes that can't be checked for accessibility before being launched. Test before and after to avoid last-minute mistakes like this popping up.

Good way to prevent these? **Get an accessibility policy!** These should be informed by (your) research. It can be a formal document, set of standards, or casual outline of intentions. As long as it:

* Helps the company understand accessibility importance
* Standardize accessibility approach
* Prioritize user groups when needed
* Are clear and easy to understand, for multiple roles
* Hierarchy of primary, secondary, etc needs
* Testable - how to test to meet all the above (such as Web Content Accessibility Guidelines 2.0 criteria)

Making this public is optional, but can show the public your commitment and what to expect.

# Content and Design

Accessibility decisions help everyone, since all tech is assistive.

* Keyboards and mice assist us in talking with a computer
* Headphones help us hear audio without bothering others
* Phones help us in near-infinite ways today
* At all points in our lives, we vary between levels of independence and dependence

Four broad usability parameters to remember, since _good accessibility is good usability._

* **Visual** - Easy to see
* **Auditory** - Easy to hear
* **Motor** - Easy to interact with
* **Cognitive** - Easy to understand

### Affordances and Conventions

_Affordances:_ How objects suggest what interactions can be performed with them, hopefully in ways users can recognize. For example, looking for a computer's familiar power icon, as it's reliable users understand it already. Most often, designers are better relying on conventions, as deviating from them just makes for confusing experiences. Using them well lowers the learning curve for all.

Popular convention: design using visual metaphors so it's similar to real-world items, such as button elements. Again, it usually can't deviate too far from what's already expected.

These ideas should be kept in mind when creating all of your site's elements and content.

### Navigation and Wayfinding

Navigation is vital for users to know where they are and how to get where they need to.

**Navigation bars:** One of the most common, reliable navigation conventions. Can both help visitors get around the site but also give them an overview of your site's content. Best if they give a concise snapshot of your site's content, not showing too much info or links. Use terminology that'll be easy for new users to understand.

> Rule of thumb: If you think of a new navigation convention and it needs an explanation for new users, rethink it and consider using a well-established convention.

#### Navigation also tells users where they are

Users usually first check the page title to determine where they are. Also checking for an "active" state in the navigation for their current page.

Larger sites may use breadcrumbs to show the relationship between the current page and others they visited. Especially helpful for users with memory issues or other cognitive disorders, as well as helping everyone to some degree.

Clear and good navigation also helps everyone if navigating a site when highly stressed, since they'd be more likely to lose track of their place in the site and leave otherwise.

#### Links

Links started as blue text with an underline, and turned purple when clicked. Their long time in the web has solidified this convention for them. Designers can usually get away with changing the colors, and maybe removing the underline, but **the main convention is that links contrast clearly with normal text.**

Don't just make hyperlink text "Click here," as screen readers will only see that and not know any context around it when searching through links. Hyperlinks should clearly describe the actual link. It also simplifies your language.

"To get in contact with our team, *click here*" -> *Get in contact with our team*

Readers and listeners both benefit from this descriptive linking. Write links knowing they could be read without the context of regular text around them.

### Writing

Accessible writing is:

* understandable
* useful
* appropriate for the audience

#### Hierarchy and Structure

* Clear and concise headings make it easy to skim content and know what you'll find.
* Separate lists from paragraph text, to better break up the page
* Clear hierarchy and shorter sentence structure make content more approachable. Especially for users who struggle to read.
* Consistent structure between similar pages also help users know where to find certain content on similar layouts, making navigation easier.

#### Use Plain Language

Simple and concise text is accessible text. Practice trimming unneeded words from text. Avoid technical jargon and obscure acronyms whenever possible. For acronyms, spell out their entire meaning the first time. Avoid vague, stock-photo esque language.

Use the [Hemingway App](http://www.hemingwayapp.com/) to help edit down text!

### Typography

**Keep text as legible as possible.**

* **Font size:** Avoid text too small or too large. Around 16 pixels or larger is generally good, but your font family will affect this.
* **Font weight:** Thin type has gotten more popular, but its lower contrast can make it harder to read. Be cautious of fonts with lower weights.
* **Line length:** Too-short lines can get cramped, but too-long lines (generally longer than 66 characters) can lead to sore eyes or moving one's neck too much.

**Specialist typefaces** can be used for young readers/readers with difficulties. Example, Heinemann uses similar shapes and letterforms as to what people learn in school.

**Icon fonts** can have accessibility issues, since screenreaders may skip the code implementing them. Make sure an icon font you choose is accessible, and fall back on readable text if needed. If possible, pair icons with visible text so their meaning is more clear.

Also, don't disable zooming for your sites. This makes it tougher for users to see larger text if needed.

### Interaction Design

Users with learning difficulties or cognitive impairments may struggle with:

* Sudden content changes
* Following instructions
* Entering expected inputs
* Not having time to digest a page
* Not undoing or fixing an incorrect input/interaction
* Unclear changes that happen without user input

Simple tips to avoid these situations:

* **Avoid auto-advancing content** for items like carousels. Give users control on when to advance, since you don't know how long it takes them to read it.
* Avoid animations too fast or slow that they affect reading the content. If possible, let users toggle them on or off.
* **Don't time people out of forms without warning.** Try to give an option to change the time-out limit.
* Let people review inputs again before submitting them

#### Forms

Make forms as stress-free as possible!

* If possible, get inputs to auto-correct or auto-format inputs. **Input formatting should be the developer's job, not the user's.** Whether it's done during the form input or after it's submitted.
    - If not this, at least make the formatting requirements clear from the start.
* Predictive text helps with people who can't spell terms correctly

#### Alerts and Error Messages

* Alerts should tell people new content that will change the state is available, but not make the change automatically.
    - For those with screen readers, giving an action to review the changes is great. Afterwards, they can return to their last position.
* Error messages should be clear, friendly, and useful. Otherwise mistakes that drove us to them will just get more frustrating.
    - Don't just pass on text from the server!
* Clearly explain how they can fix the situation, in a "human" way.
* For input fields, don't just show there's an incorrect input. Give an explanation as to why, and how the user can fix it.

### Color

Color has lots of uses aside from decoration - they set the tone, draw attention to specific areas or situations, and they can have hugely different meanings for different cultures. Never discount color as a small thing.

#### Color Contrast

High text/background contrast affects everyone - low-sighted users, colorblind users, people using old devices, people with high/low surrounding light, etc. Also an issue with backgrounds that have images or other designs on them. Always check this contrast wherever there's text. However high contrast can look too jarring too.

Increasing size and font-weight gives you _some flexibility_ with how much contrast you need in the colors.

Test out your contrast by viewing designs in grayscale, or using contrast-checking tools discussed later.

#### Color as Information

**Never present information with only visual colors.** Use a color and a text description. This applies to everything, including the colors for errors on inputs. Visual styling is good for direction user attention and experience, but on its own it's not accessible.

### Rich Media

The most popular rich media are images, which helps those with learning disabilities and low literacy - they give more visual info and context. As long as the photos aim to increase understanding, especially if they're simple.

**Give images/graphs/infographics `alt` text!** If users can't see the image, either due to it not loading, images are disabled, or they use screen readers. No `alt` text means they'll use the file name instead, which is often a useless jumble. Make sure it's clear and understandable, not drowning in detail. If an image is unimportant or decorative, leave the `alt` attribute blank and it'll be skipped.
    * Making graphs/infographics more accessible can be either some `alt` text summary/overviews, or placing a longer overview in regular text alongside it. The latter is more accessible since it makes things clearer for everyone (such as those with cognitive disorders) and gives screen readers materials.

> Alt text is good for SEO, but stuffing alt text with key words hurts the user experience and isn't worth it.

**Don't put text in images! EVER!** Only excuse for this is for logos. Text with SVGs is the closest thing to this that'd work.

**Don't use PDFs either.** They're inconsistently accessed, not accessible, and often need extra software. Convert this content to HTML whenever possible. Use print stylesheets if you need content to be print-ready. You can also use PDF-to-HTML converters for sites with lots of existing PDF content.

#### Transcripts

One of the best ways to make audio/video content accessible is to show transcripts. Captions are good too, but transcripts are cheaper, faster, and more accessible. Transcripts are easier to skim and find good info from, and are helpful for:

* Hearing impairments
* Difficult cognitive processing
* Non-native speaker of language in the video
* Overly noisy or quiet environments
* Low bandwidth for watching videos

Transcribing videos yourself can be time-consuming, so consider getting professional transcribers if needed. Don't forget notations about action in the video, and ignoring irrelevant info. Speech-to-text software can work, but often only with one speaker.

Format should usually just be HTML. Consider adding headings for different scenes and other notably different parts of a video.

#### Subtitles and Captions

* _Subtitles_ are lines of text appearing on a video transcribing the spoken words. They appear at the same time the words do.
* _Closed captions_ are the same as subtitles, but also include other info such as music and audio clues.

Some services can do this automatically, but accuracy isn't guaranteed for audio more complex than a single, clear speaker. Making them yourself can be a chore, so again consider hiring a service to make them. They're best written in short bursts of text.

If you're writing your closed captions for a custom video player, you can use a Web video Text Track (WebVTT, `.vtt`) file. The markup for it is simple and clear, but requires writing up all the timestamps can take time.

#### Generous User Experience

Providing alternatives for user experiences can go a long way to being more inclusive. They can chose what works best for them. People with impairments aren't always just using an assistive technology, or it could just be someone with different preferences. We don't need to try to accommodate everyone, but they're easy ways to reach a much wider audience. This makes experiences great, not just good.

# Accessibility and HTML

Well-structured HTML is immediately accessible, and is the key to better web accessibility. Quickly check a page's HTML structure by stripping away all external CSS, showing how the content appears to a screen reader. This is why **HTML elements' order is important for accessibility.** It's also why screen readers benefit from headers and other structure elements (like a table of contents). It also helps SEO, since they crawl page text like screen readers do.

### Importance of Structure

#### Headings

Aim for just one `h1` element per page, and allow for multiples of others. It breaks down content so it's more approachable and skim-able, as well as helping SEO.

Lists using the `ol` and `ul` elements can help break down content further.

### Forms

Buttons and inputs allow for good interactions on their own - there's no real need to use JavaScript on `span` or `div` tabs to make this ourselves. This misses the default accessibility from buttons and inputs, and also wastes time.

Input fields have default accessibility features to tell users their content and state. Labels are needed so users know their expected content, and:

* Should clearly and concisely say what's expected
* Come before inputs in the HTML, semantically and visually

For required inputs, don't rely on just the `*` to show this, as it requires familiarity. Clearly write out `required` in the label, next to the name, to avoid confusion.

Labels and inputs should be semantically connected. An input's `id` attribute value needs to match a label's `for` attribute value. This also focuses on the correct input when clicking on the label, increasing the interactive area and making it easier to access.

#### Buttons

Buttons have default actions, like submit or reset. They can also have several states:

    * Active
    * Inactive
    * Hover
    * Focus
    * Disabled

When overriding a button's core styles, follow the set style conventions for each one (such as the disabled button being grayed out and dulled). Make sure each state is clearly identifiable from each other.

### Keyboard Navigation

This can get tough for features not built for keyboard access. Complex inputs, dropdown elements, and rich media with interactivity are especially tough.

#### Keyboard shortcuts

These are custom keyboard actions, which can really help for users who have a tough time using preset keyboard actions. It can also take common actions and make them a simple shortcut, like pressing `.` to see new tweets on Twitter's homepage.

However, they currently don't work on Windows screen readers, so don't get too excited about them.

**Don't use access keys** for keyboard shortcuts. They varied greatly among OSs and browsers, and aren't reliable.

#### Skip Links

_Skip Links_ let users jump right to specific content, usually the main content, to avoid going through complex navigation. One options is to make them one of, if not the, first focus elements on a page, and only show them when focused on. This makes them useful for anyone using keyboard navigation, and hides them from others. If a higher priority, just make them visible on the page.

_Keyboard focus_ is where on the page the keyboard's actions are interpreted by the browser. Make sure it's the same as the _visual focus_, or what you can see on the viewport. Not all browsers support changing the keyboard focus to where the visual focus is when following things like skip links, so you may think you're at the content but still focused on the nav. Be sure to test this, or else your skip links could be useless for keyboard navigators.

_Focus styles_ are styles we see when an element has keyboard focus on it, making them vital for keyboard users. Even if you change them, make sure they're there! _Hover styles_ are the same for hovering, and usually show you can interact with elements.

Don't rely only on hover styles to show interactivity, as visually-impaired or touchscreen users won't see them. Don't rely on noninteractive elements like `div` and `span` for interactions!

#### tabindex

_tabindex_ is a property that controls the order of elements when navigated by keyboard. Standard way to do this is using the same order form the source code, but `tabindex` lets you change this if you want - but due to visual inconsistencies, this isn't a good idea. It's no substitute for semantic HTML.

    * `tabindex="0"` adds elements into the flow of interactive elements. Again, not a good idea.
    * `tabindex="-1"` removes elements from the tab index. They can still be focused on though. Adding this to a skip link target will let users jump to it without disrupting the usual tab flow.

### Separating Structure and Style

Two main culprits in non-accessible HTML:

#### 1) WYSIWYG (What You See Is What You Get) Editors

WYSIWYG's output content made in a visual editing interface. The root of their issue lies in how they manipulate content's appearance, but rarely structure - for example, making larger fonts without using a semantic heading tag. They also often make unneeded elements and inline styling to clutter HTML.

#### 2) HTML elements used for CSS Styling

CSS can create a massive disconnect between the markup and visual product. Headers with less emphasis on screenreaders can look larger and more important that ones with higher priority.

__Both issues above are caused by not separating structure from style.__ This keeps HTML accessible and also HTML and CSS easier to maintain. Major style changes only need CSS changes, HTML changes aren't required. This all shows how group knowledge of accessibility is also important for maintaining it. It also ensures sites can be accessed by readers enforcing alternate styles, since semantic HTML helps them translate better.

### Progressive Enhancement, Graceful Degradation

__Progressive Enhancement__ is giving a base experience for most/all browsers, and layering on top of that baseline for supporting systems. This ensures everyone at least gets a basic, functioning experience. This can be adding CSS that, if not supported, just makes the element look less fancy. Or using native elements for things like video, and layering custom players on them with JS if it's enabled.

Related is __Graceful Degradation__, which instead builds for the most capable browsers and has fallbacks set for less-capable ones. It's often preferred for sites built on complex interactions, and couldn't work without them. A specific list of supported browsers may be used for deciding what to fall back on. Simply blocking older browsers or users with JS disabled is bad practice.

As the range of devices and browsers has grown and become harder to manage, Progressive Enhancement has become more popular in recent years.

### WAI-ARIA

> Stands for "Web Accessibility Initiative - Accessible Rich Internet Applications." Introduced in 2014.

For complex widgets being used in browser environments intended to read simpler code, WAI-ARIA makes it easier to describe the markup's roles, states, and other properties for assistive tech and semantic HTML.

#### Roles

Adding `role` attributes with values lets you override the implied roles given with semantic HMTL elements. A good use for this is when no semantic HTML element captures its meaning right - for example, using `<div role="alert"></div>` for alerts. There's many other similar roles, such as `dialog`, `status`, and `timer`. Check the W3C site for them all.

Adding some `role` values, like `navigation` or `article`, is redundant with HTML5 semantic elements. But older IE browsers that don't support these elements can make use of them.

States and properties can help give more info to assistive tech, which may or may not be dynamic.

  * `aria-expanded` can tell whether something like a menu is expanded or not, with JS changing the value
  * `aria-describedby` creates connections between elements so you know where to find more info on it.

_Live regions_ can tell users when something on a page changed without disrupting where they are. Using the `aria-live` attribute determines when and how users should be alerted.

  * `aria-live="off"` means an area isn't live at the moment and shouldn't give updates
  * `aria-live="polite"`means an area will give an update during the next available time, like when a user is done typing
  * `aria-live="assertive"` announces updates immediately. Only use it for real important things, like errors.

ARIA doesn't help browser experience the same way semantic HTML does, so it should never be a replacement for it. **Using ARIA on an inaccessible site will not help.**

# Evaluation and Testing

Without tests to confirm your accessibility efforts, the effort is pointless.

### Making a Plan

A test plan makes sure you get what you need to out of your tests. Can be a set of criteria or a task list to run through. As long as it ensures your accessibility efforts align with your product plan. Should include:

* Testing methods
* How the methods support reaching accessibility targets
* Documenting the results
* Feeding the results back into product improvement

### Heuristics and Analysis

**Heuristic testing** is testing against existing goals and guidelines, usually by people on the project.

#### Prototype Evaluation

**Heuristic Evaluations** test an interface against guidelines, like the WCAG, and any additional issues. The WCAG 2.0 covers many use cases and is a solid starting point.

**Cognitive Walkthroughs** test the interface against specific tasks. They can emulate specific tools or setups, like using assisstive tech or in different environments (harsh light, loud rooms, etc).

#### Code Reviews

Code reviews are helpful early on. Check for code quality and consistency, as issues with this can leak over to the user experience.

#### Automated Tests

Automated tests aren't enough, but can still ensure certain criteria are met. Criteria focused on user experience can't be programmatically verified.

Best done near the end of production, but with time to make changes if needed. Recommended tool is the Tenon API in the build process. It can also be an education opportunity - not understanding why an accessibility test failed means learning how it did and why it matters.

### Device and Browser Testing

Accessibility is greatly affected by the wide range of devices and browsers a user may be using. Testing over a wide spectrum, not just your own browser, is crucial.

Due to resource limits, we need to prioritize browsers and devices. Make sure you have good reason for your choices, such as knowing they're very popular with your audience. Should ideally aim to test for:

* Desktop computers on all major OS's
* Mobile devices on all major OS's
* Latest versions of all major browsers, for desktop and mobile
* Assisstive tech such as screen readers
* Keyboard navigation
* Popular accessibility settings, such as zoom and screen magnification

Virtual machines (VirtualBox, VMWare) are great for simulating older OS's. But remember that the hardware and keyboard setup will likely be different, and can change the user experience. Make sure all testers know the differences.

[Consider a testing matrix, described in this List Apart article.](https://alistapart.com/article/reframing-accessibility-for-the-web).

### Validators and Checkers

Validators check your code quality in a straightforward, if limited, way. They're better for quick checks to obvious problems in the front-end. Failing is okay as long as it's for a good reason that doesn't affect things for the user (like missing css prefixes before they're added on automatically).

Well-known validator is the W3C markup validator, or HTML validator. Errors can be tough to understand at first. Also the WemAIM's WAVE accessibility evaluator. Better draws focus to accessibility errors in the context of the page, and has good info. Pages are tested against the WCAG guidelines. You get errors as well as recognitions for what you did right. Local sites can use this with the WAVE toolbar add-on for Chrome and Firefox.

You can use a color contrast checked to make sure your foreground and background colors are legible enough. Some, like Color Oracle, show the colors with different color blindness filters.

Readability Checkers look for ease of reading and reading level, like Hemingway App. Not the same as a person reading it, but give a good, rough overview.

Connection Emulation tools can simulate lowered or throttled internet access.

### Testing Keyboard Navigation

Keyboard testing is easy, just navigate through your site with your keyboard! Usually uses:

* `tab` to navigate
* A modifier key like `alt` or `ctrl`
* Left and right arrow keys

You may need to enable full keyboard access on your browser. Also make sure to test screen readers with and without keyboard usage.

### Usability Testing

Best to test with actual people who will use your site. You may not be able to test early, since people with some disabilities, or by using some assisstive tech or methods, may not work well enough before working versions are done. Avoid testing too much with your team - they already have knowledge and assumptions about the product that will bias the results.

When finding testers, **aim for people more familiar with needed assisstive tech, not just people who know how to use it.** Cuts through false assumptions you may have about assisstive tech. Just don't categorize users based on those with disabilities. The variety of accessibility needs is so varied that generalization is impossible. We can only test with as many different people as possible each time.

Don't get people with disabilities just for that reason - make sure they're still in your target audience!

When running tests, aim to get a good facilitator. Someone who can get along well with participants without leading them on. People who made the product are unwise here, since they may want their product to succeed and give leading clues that bias the results. Be sure to record it in some way, audio or video, and take notes!

Make test scenarios based on real use cases and essential product tasks. Prepare in advance with questions, and pay attention during the tests!

* What's the user's expectations and prior knowledge?
* What are their initial reactions, thoughts, and feelings?
* What's their event flow, or the actions they take, and why?
* What are they saying and doing? What can we learn from it?
* What obstacles do they encounter?

Remember that testing is an ongoing process. It stops accessibility from being lost over time, and to find better solutions later on. Consider adding a quick feedback form on your site for continuous user feedback, and making your accessibility policy public. Just don't derail or create entirely new plans due to a few isolated cases of feedback.

Testing is research that happens over time, not evidence of your skill. It can be frustrating to see attempts at change fail, but the serve the goal of getting better.

# Laws and Guidelines

Guidelines matter, but shouldn't be the only reasons for making sites accessible. If they are, consider doing something else with tech. But knowing legal issues around accessibility are helpful, since they're clear precedents of what __not__ to do.

For example, in 2006 in the US it was ruled in **National Federation of the Blind v. Target** that the Americans with Disabilities Act (ADA) requires commercial sites to be accessible for those with disabilities (under the ADA and any state laws). The UK equivalent to this is the Equality Act, where the Royal National Institute for Blind People sued a UK airline due to an inaccessible website.

Most companies in lawsuits like these settle out of court and improve their sites. Not doing so is rarely worth the bad publicity and loss of a market audience.

The most common US law related to accessibility is **Section 508**, a 1998 amendment made to the US Rehabilition Act of 1973. Government sites must give equal info access to federal employees with disabilities, and federal websites must do the same. It also applies to company sites receiving federal funds or are under contract with a federal agency. The new standards recommend sites meet Level A and Level AA of the WCAG 2.0 Guidelines.

### Guidelines

**WCAG 2.0** is one of the most common guidelines followed for accessibility today. They have a broader, tech-independent focus so they're easier to apply to new technology. For example, it says "all functionalities" should be usable by a keyboard (except when certain user movement input is needed). It doesn't limit itself to things like links or forms.

WCAG 2.0 has for base principles, with a "POUR" acronym to remember them by:

1. **Perceivable** - Info and interfaces must be shown in ways all users can perceive (access)
2. **Operable** - Interfaces and navigations must be operable
3. **Understandable** - Info and interfaces must be understandable (access and understand)
4. **Robust** - Content should be robust enough that a wide array of user agents, like assisstive tech, can reliably interpret it

These principles are useful for making accessibility principles easier for people in the company to understand, and should be referred to often.

WCAG 2.0 has three levels:

1. A (minimum)
2. AA (middle)
3. AAA (highist)

Most companies that aren't specifically focused on inclusive design go by the AA level, since AAA requirements need much more time and resources most companies can't afford to invest. Beginners may want to start with A and naturally make their way to AA as they consider audience needs. Most A rules wind up also conforming to AA rules, or just need some slight improvement.

If you specifically work with CMS's or anything that lets users upload and edit content, use the **Authoring Tool Accessibility Guidelines, or ATAG.** It makes user-made content more accessible, and the authoring tools for making it are accessible too. It also has A, AA, and AAA levels.

These guidelines are good frameworks and starting points, but aren't a substitute for just caring about accessibility and making sites for our users. Seeing them as just "checklists" makes us more likely to do the bare minimum, which doesn't make for good websites.

# In a Nutshell Recommendations

1. **Be Considerate.** Caring about accessibilty is the best way to integrate it into all your planning, and applying it to everything you need.
2. **Be Flexible.** Know where you need to make compromises, have constraints, and what lines to draw. Don't just not care at all, or dumb down each part of a site for accessibility. It's fluid, just like the web itself.
3. **Guidelines are just Guidelines.** You also need to understand your audience and their needs. Guidelines are good for not missing important details, and helping others understand accessibility, but they're not the main reason for it either.

Also, talk about accessibility more! Consider it a constant consideration for how we evaluate new tech.

# Resource List

* A11y Project - Accessibility patterns, checklists, resources
* Paciello Group - Accessibility news
* Simply Accessible - Blog of many accessibility experts
* Inclusive Design Patterns - Book of accessible front-end patterns
* [All Technology is Assisstive: Six Design Rules on 'Disability.' By Sara Hendron.](https://www.wired.com/2014/10/all-technology-is-assistive/)
* [5 Powerful Tips And Tricks For Print Style Sheets. By Dudley Storey.](https://www.smashingmagazine.com/2013/03/tips-and-tricks-for-print-style-sheets/)
* [Accessibility APIs: A Key To Web Accessibility. By Léonie Watson & Chaals McCathie Nevile.](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/)
