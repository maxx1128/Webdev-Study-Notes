# WCAG Accessibility Standards

## Basics from 2.0

### Perceivable

Info and interfaces must be shown in ways all users can perceive. Different stress cases don't stop users from reading, watching, or listening to your content.

* Text should be large, readable, and have enough contrast.
* Text alternatives for non-text content.
* Text should never be in images.
* Non-text content should have text alternatives. For instance, images should have meaningful alt text.
* Audio and video content should have either captions or transcripts. Personal preference is transcripts.
* Content should be accessible to assistive tech like screen readers without losing meaning.

### Operable

Interfaces and navigations must be operable. Different stress cases don't keep users from getting to all the pages and filling out the forms.

* All functionality should also work from a keyboard.
* Any time-sensitive content should give users enough time to read and use limit. Time limits around elements like slideshows should have options to stop it.
* Content shouldn't be too volatile, colorful, or any other quality that would cause seizures or other physical reactions.
* All navigation elements, from menus to links to buttons, should be accessible with or without any assistive tech.
* Sites should use progressive enhancement so forms and other UI are still usable even if some assets fail to load.

### Understandable

Info and interfaces must be understandable.  Stress cases don't prevent users from understanding the site's intended meaning.

* Text should be readable and understandable. Write simply and explicitly, and avoid needless jargon or fluff text.
* Content should appear and operate in predictable ways so as to not surprise or confuse users too much.
* Help users avoid and correct mistakes, such as inputs with descriptions and autocorrect helpers.
* Avoid design assumptions, such as thinking users will know what certain icons stand for without an explanation. An extra line of explanatory text is better than implied symbolism.

### Robust

Content should be robust enough that a wide array of user agents, like assistive tech, can reliably interpret it. Stress cases don't prevent users from accessing the content from a wide variety of devices.

* Make your site responsive across different screen sizes.
* Semantic markup is always more robust and brings built-in functionality across browsers and devices. Use it.

## New Rules in WCAG 2.1

New rules were added in the summer of 2018 that helped cover accessibility for stress cases related to mobile devices, low vision, and cognitive and learning disabilities.

### Adaptability

Content can be created in different ways without losing information or structure.

Mobile content is not limited by either a vertical or horizontal orientation and works properly on both. There are situations where someone may be unable to rotate it, such as mounted displays on wheelchairs or being in a high-pressure, low-time situation.

Input fields can programmatically determine what to fill in based on past information. Mail order forms can autofill addresses and payment info automatically. This helps this with cognitive or physical disabilities that'd have difficulties entering complex info repeatedly.

(AAA) - The meaning behind other interface components should also be programmatically determined. This basically means all content should have robust, semantic content in case software alters the content itself. Buttons or icons whose content is altered (usually if they're images or other non-text content) must have semantic info to determine their function, such as what they link to or what they trigger.

### Distinguishable

Users can properly see and hear content, telling it apart from the website's background.

Content shouldn't require two-dimensional scrolling for smaller screen sizes. The exception is for more complex content that can't be restricted to this size, like complicated graphs. But this shouldn't impact the entire site. This also applies when users zoom in to better read the text.

User and graphical interfaces (like buttons, form inputs, and bar charts) also must have enough color contrast with the background. Specifically a 3:1 contrast ratio.

Markdown-compatible paragraphs of text must still be readable (such as no overlaps) if users were to adjust the text styles to the below. Note that the site itself doesn't need these styles themselves, but they shouldn't make content unreadable.

* Line height at least 1.5 times the font size.
* Paragraph spacing at least twice the font size.
* Letter spacing, or tracking, at least 0.12 times the font size.
* Word spacing at least 0.16 times the font size.

All content that appears on hover must also meet the following rules:

* The content can be dismissed without changing the current pointer focus. Exceptions are if this content is sharing an error, or doesn't get in the way of other content.
* Users can move their focus over the revealed content without it vanishing.
* The content stays around until it's dismissed, the focus changes or the info becomes invalid. It shouldn't vanish for unknown or trivial reasons.

### Keyboard Accessibility

Ensuring all functionality is available for keyboard users.

Keyboard shortcuts implemented by hitting a single letter or character should meet the following rules:

* They can be turned off.
* They can be changed.
* They're only active when the input or component reliant on them is in focus.

### Enough Time

Ensure users have enough time to read the content.

Users should we told about the amount of time that needs to pass until a timeout that would cause any form of data loss. The limit should be conveyed in real-time if possible. The exception is if it preserves data for at least 20 hours afterward.

### Seizures and Physical Reactions

Content shouldn't cause these things. Duh.

Users should be able to disable any content with any kind of motion animation unless it is essential to function or information

### Input Modalities

Users should be able to operate inputs in ways other than just the mouse and keyboard.

Any gestures that require users to click multiple points or trace their cursor along a path should have a single-point or standard input option. Exceptions if these types of inputs are essential for some reason.

Any single-pointer functionality should have at least one of the following functionalities (pointer cancellation):

* No events when triggering mouse-down events.
* Actions completed on the mouse up event can be aborted, such as sliding the pointer off the element before completing the event.
* The mouse up event can reverse effects of the previous mouse down event.
* The only exception to the above is if a mouse down event is essential.

Also, the visually presented label of each input should match that input's `name` property.

Functionalities activated by motions, like shaking the device, should have UI alternatives not reliant on the motion. Responses to the motion should also have an option to disable them and prevent future accidental activations unless it's essential to the functionality.

(AAA) - Targets for pointer inputs should be at least 44 x 44 pixels large. Exceptions are when:

* There's an equivalent link or control that meets these size requirements.
* The target is inline in a block of text.
* The size is determined by the user or user agent, not the author.
* The size/presentation of the link is essential to the info being conveyed.

(AAA) - Switching back and forth between the types of input (mouse, stylus VoiceOver, etc) doesn't render web content impossible to use or interact with. Exceptions are when they're essential based on security or user settings.

### Compatible

Helps ensure web content is still compatible with current and future user agents and assistive tech.

Status messages can be programmatically seen (through markup like `aria` roles) so users with assistive tech can be made aware of them without focusing in on them.

## Resources

* [What’s New in WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/)
