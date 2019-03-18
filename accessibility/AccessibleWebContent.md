# Accessibile Web Content

These tips are for general web content, such as text, blog posts, multimedia, and other general content. This is not advice for specific patterns like navigation and article lists. This is to make sure the actual content of each page is accessible for a range of preferences, environments, and disabilities.

## Write for Humans

* Make it clear, succint, scannable, and action-oriented.
* No obscure jargon or unexplained acronyms
  - Related to this, don't replace letters with numbers or symbols
* Avoid all caps, and all unneeded capitalization
* Limit the use of italics
* Write for **screen readability too**
  - Break content into chunks separated by headers
  - Inverted Pyramid. Don't bury the lede

## Include Links to Skip to the Content

* People with limited mobility may navigate with a keyboard. Including this link as the first focusable element makes it easy to skip to the main content
  - Should be connected to the `id` of the content's parent element
* The link can be hidden unless focused on, or always visible on the page

## Hyperlinks Can Stand Alone

* Make sure you could understand what a hyperlink goes to if pulled from the paragraph.
  - Not `click here`, but instead `read more about X here`.
  - Clearly indicate if links open in a new tab, or else it could disorient users

## Don't Forget Alt Text

* Include them to describe informational images that provide needed/useful context
* Decorative images can use a blank alt tag, such as `alt=""`, so screen readers will ignore it
* Whether empty or not, all images should have an `alt` property. Otherwise the `src` property will be read, which will be confusing.

## Give Transcripts or Captions for Audio and Video

* Users may not be able to listen to audio or video, depending on their disabilities, location, or just their preference
* Transcripts often take longer, but are simpler, more scannable, and better for CEO
* If it's a video dependent on the visuals, lean more towards captions

## Resources

* [Accessible Web Content](https://seesparkbox.com/foundry/writing_accessible_web_content)
