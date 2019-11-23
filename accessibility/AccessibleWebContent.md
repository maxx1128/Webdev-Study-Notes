# Accessibile Web Content

These tips are for general web content, such as text, blog posts, multimedia, and other general content. This is not advice for specific patterns like navigation and article lists. This is to make sure the actual content of each page is accessible for a range of preferences, environments, and disabilities.

## Write for Humans

Make the writing clear, succint, scannable, and action-oriented. This also helps those with cognitive disabilities or impairments.

Avoid obscure jargon or unexplained acronyms. Related to this, don't replace letters with numbers or symbols

Avoid all caps, and all unneeded capitalization. Always align text to the left to ensure even spacing. Limit the use of italics

Write for **screen readability** too. Break content content into logical chunks separated by headers Use the inverted pyramid format and don't bury the lead.

## Include Links to Skip to Content

People with limited mobility may navigate pages with a keyboard. Including this link as the first focusable element makes it easy to skip to the main content. It should be connected to the `id` of the content's parent element. This is most often the `<main>` tag around the page's most important content.

The link should be hidden unless focused on, or always be visible on the page. There can also be multiple links to different types of content if there's lots to navigate around.

## Hyperlinks Can Stand Alone

Make sure you could understand what a hyperlink goes to if pulled from the paragraph. Its text should  be more like `read more about X here`, not just `click here`. Any items being linked to or interacted with, including forms and skip links, should also have unique names that stand apart from others.

Clearly indicate if links open in a new tab, or else it could disorient users.

## Use Semantic Headings

Proper use of `h1`, `h2`, `h3` tags and so on lets screen readers scan content the same way a sighted person would. It goes a long way to help many users navigate content.

Important page elements like navigations, filters, or menus should also include headings. Even if they're visually hidden, they'll let screen readers see them as content is scanned.

## Don't Forget Alt Text

Alt text is an alternative description for images if people can't see them. Include them to describe informational images that provide needed or useful context. Screen readers will know when an element is an image, so you don't need to preface it with "Picture of a" or something similar.

Decorative images can use a blank alt tag, such as `alt=""`, so screen readers will ignore it.But whether it's empty or not, all images should have an `alt` property. Otherwise the `src` property will be read, which will almost always be confusing.

## Add Text to Icons

Icons should either have text built for screen readers (such as `aria-label`), or preferably additional text written beneath it. Either way, the icon itself shouldn't be the only source of meaning or understanding. There's no gaurantee everyone will understand it the same, if at all.

## Give Transcripts or Captions for Audio and Video

Users may not be able to listen to audio or video, depending on their disabilities, location, or just their preference. Transcripts and captions are tried-and-true ways around this.

Transcripts often take longer, but are simpler, more scannable, and better for SEO. But if it's a video dependent on the visuals, lean more towards captions.

## Resources

* [Accessible Web Content](https://seesparkbox.com/foundry/writing_accessible_web_content)
* [Universal Design: 11 Practical Tips to Make Your Sites and Apps More Accessible](https://www.shopify.com/partners/blog/universal-design)
