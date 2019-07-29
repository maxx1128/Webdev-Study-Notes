# Decorator Pattern

Decorators (or Presenters) are a basic design pattern of taking data, adjusting it as needed for a view layer, and then giving the result to the view. This prevents the responsibility for doing this from falling on the controller (which focuses on getting the right data) and the view (which focuses on bringing the data to the markup).

How one constructs decorators will vary by program, framework, and language. This focuses on using a Decorator pattern specifically for Ember.

### Create an Ember Object

The Decorator here will be a basic Ember Object, which brings all the usual Ember functionality and magic as components and controllers. In a folder such as `app/decorators`, a basic setup would look like this:

```javascript
// app/decorators/comment.js
import EmberObject from '@ember/object';

export default EmberObject.extend({

});
```

### Call this Ember Object elsewhere and pass it data

Before specifying what the decorator does, let's look at how it'll be used. It's as simple as importing it, passing it some data, and then returning it as a value when needed.

Let's say this decorator is being called in the `comments` controller. Importing it requires this line at the top:

```javascript
import CommentDecorator from './../decorators/comment';
```

Next, we need to create an instance of this Ember Object and pass it the comment data. This could be in a computed property, where we map over each comment object and pass it into the presenter.

```javascript
allComments: computed('comments', function() {
  return this.comments.map(comment => CommentDecorator.create(comment));
})
```

Each comment will now become an Ember object, with any additional properties added in through the decorator. Its current properties will be carried over, so there's no need to remap it. If `comment.body` returned the text of the comment before, it still will in the presenter.

Presenters don't need to be mapped over. If there were a single comment to be decorated instead, it could just be this:

```javascript
topComment: computed('comment', function() {
  return CommentDecorator.create(this.comment);
})
```

### Add Decorator Properties

With the decorator up and running with our data, now we can make adjustments as needed. Anything typically possible with Ember objects can easily be done here.

Need to copy one attribute but with a different name? Use `reads`!

```javascript
import { reads } from `@ember/object/computed`

export default EmberObject.extend({
  name: reads('user.profile.name')
});
```

Need to make a new property based on other info and it take some logic? Use a `computed` property!

```javascript
import { computed } from `@ember/object`

export default EmberObject.extend({
  isImportant: computed('topic', 'user.role', function() {
    const isImportantTopic = (this.topic === 'management' || this.topic === 'money'),
          isManager = this.user.role === 'manager';

    return (isImportantTopic && isManager);
  })
});
```

You could even use Decorators for any data in the presenter that needs lots of updating itself.
