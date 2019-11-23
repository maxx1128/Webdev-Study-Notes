# Mobile Device Accessibility

## Accessing Interactive Elements

Touch elements shouldn't be right or left hand dependent. You can get around this with full-width interaction elements or containers, so someone reaching for them from either side can get to them.

Also make it clear you can interact with them. Use color schemes that communicate interactivity with distinct "action" colors that stand apart from others. Also place interactive elements in well-established locations you'd expect them to be in like the bottom navigation.

## Touch Gestures

Aim for the recommended 44x44 pixel dimensions for touch elements. Properly space them away from other touch elements to decrease accidental clicks.

Add instructions or good visual cues for custom gestures. These can be as simple as icons with short explainer texts explaining the action and its effect.

Group elements that perform the same action into a singular, larger actionable item. For example, group the name and logo into the same anchor tag to the homepage. Don't put each in a separate anchor tag.

## Inputs

Specify input types in the markup so mobile keyboards can choose the best layout, such as `type="number"` so keyboards only show numbers.

Use simpler inputs like checkboxes or radio when possible, since they're easier for small screens.

## Resources

* [Tips for making interactive elements accessible on mobile devices](https://bitsofco.de/tips-for-making-interactive-elements-accessible-on-mobile-devices/)
