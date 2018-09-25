---
group: programming
layout: post

incomplete: true
title: Behavorial Patterns
descr: Patterns for managing how code acts and interacts with other modules

resources:
  - title: Design Patterns, Elements of Reusable Object-Oriented Software
    author: John Vlissides, Richard Helm, Ralph Johnson, Erich Gamma
    link: https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_2?s=books&ie=UTF8&qid=1535832017&sr=1-2&keywords=design+patterns+elements+of+reusable+object-oriented+software
    publisher: Addison-Wesley Professional
---

## Chain of Responsibility

There's two basic players in this pattern: a sending object and the receiving objects. When the sending object sends out a request, it will need that to be taken in by one of the many possible receiving objects. However, which receiving object it is often changes based on the context. The Chain of Responsibility (CoR) pattern basically groups all those receiving objects together and adds an interface to control which ones gets the request sent to them. This keeps all the sending and receiving objects loosely coupled while making it easier to send requests and get the right object to respond.

#### Metaphor

Think of when you call a company's help desk. When you call, there's an automated voice that starts asking questions about what you specifically need help with. As you answer them, it gradually narrows down your needs until it knows exactly who to send your call to.

In this example, you are the "sending" object, and the help line is the CoR object. Your call is sent down the chain until it finds out which person's responsibility it is to help you. This is good since it means all people who need help can call the same line and still get to where they need to, instead of having a specific number for each one and making the caller find the right one.

## Command (Action, Transaction)

Take any kind of request and encapsulate it into a separate object. This lets you have more fine-tuned control over the request, such as building in any common configuration for each kind of request, padding the object around as needed, and have a specific method for actually running it.

#### Metaphor

If you needed to ask someone an important question, but can't do so in public, it's hard to simply follow them around everywhere and then give the specific request when the time is just right. This is inconvenient, hard to manage, and means you'll need to stick to the person like glue. Instead you could give someone a note with the request written down and tell them to read it when they're alone, write a response when they're free, and then pass that back to them. This is more convenient, deals with the limitations in asking, and works with their available time. The note is the metaphor for the Command object this pattern describes and the benefits it brings.

## Interpreter

Interpretor patterns are good for more complicated algorithms or patterns that are hard to expressive in typical programmer syntax or arguments. Interpreters let you define a class with custom "grammar," or series of arguments that accept different arguments of classes, and the class translates that into the specific operations.

#### Metaphor

Imagine you're a programmer who talks about lots of different technical terms with other programmers. You all understand the complex terminology and the related information, and it takes lots of time to communicate all of this each time the topics come up. So you all decide to use different acronyms or slang terms as a shorthand for the more complicated things. You all undersant them, know how to interpret them and pull their meaning from them, which saves time in sharing info about the information. All these slang terms act as Interpreter object, managing this custom "grammar" and return the info.

## Iterator (Cursor)

Iterators let you access different parts of an array without directly working with it. It's basically an abstract interface to easily do things like:

* loop through an array
* access the first or last items
* hold a particular spot in the array and move forward or backward
* getting a random ordering of the items

#### Metaphor

Imagine having a large shelf full of books, and wanting to read a different one each day. It's tough to go all the way to the top of the shelf each day to find and take the next book, and also wastes time. It'd be easier to hire a personal librarian who will always keep track of the books you read, know which one is next, and have it ready for you the next day. The librarian will also know the book you'll read tomorrow, the one you read yesterday, and can give you a totally random book if needed. The librarian is acting as an Iterator here, taking the work of tracking your progress and navigating all the books in your massive shelf.

## Mediator

Mediators are objects that define the specific interactions and relationships between multiple other objects. The individual objects are designed and substantiated separately, then added to the mediator object that will coordinate their relationships. This keeps in keeping the objects loosely coupled while allowing them to work together.

#### Metaphor

Imagine a airplane control tower, in charge of keeping airplanes from crashing into each other in the air. Airplanes function entirely separately on their own, but they eventually come into contact with the control tower. The tower will monitor all their locations, and guide them to certain coordinates based on where they all are. This keeps the planes working together through the control tower, but not directly with other planes. The control tower is acting as the Mediator, and each plane if the object being guided through it.

## Memento (Token)

Mementos are an externalized record of an objects previous state. When you do something that changes an object's state, the memento keeps a record of the past states so they can be reviewed or restored.

#### Metaphor

The familiar "undo last action" function of many programs is a classic memento example. When you have a program for drawing shapes, when you move a shape its previous coordinates are saved in a memento. If you wanted to undo this and go back to its last position, the coordinates from its past state are retrieved from the memento and applied to the shape object.

## Observer (Dependents, Publish-Subscribe)

A kind of "publish-subscribe" relationships between different objects. Several objects "subscribe" to a single object to watch for when its state changes. Whenever it "publishes" a change, all the "subscribed" objects are notified and can run any needed functions/updates.

#### Metaphor

This pattern is easy to identity when thinking of it as a "publish-subscribe" model. When someone creates a social media account, others can subscribe to them for updates. Whenever they publish something new, everyone is notified and can take the needed actions like reading the post or leaving a comment.

## State (Objects for States)

State is part of an object that, when it changes, alters its behaviors or functionality. An object with different possible states will only be able to run different functions or methods when in the right state.

A state could be an abstract class or object that's connected to many other objects. The properties of the state object will influence what connected objects can be accessed and their methods.

#### Metaphor

Imagine a human being that has different emotions, and their actions will vary depending on those emotions. When someone is happy, they can smile, laugh, talk a lot with others, etc. When someone is sad, they can frown, cry, and also cannot talk as much with others. The person's emotions are like their "state" and their possible actions are the methods/functions affected by that.

## Strategy (Policy)

Take a series of algorithms and configure them into a single object, and abstract the decision of which one to use in that class as well. If you have several algorithms to break down and organize sentences in different ways, a Strategy will be the class that holds them all and makes it easy to switch between them.

#### Metaphor

You and a friend are exchanging lots of encoded messages, and the key to decode them changes every day. You could get the message, check the key depending on the day, and then use it to decrypt the message. But an easier thing to do is get a scanner that could automatically pull up the right key after checking what day it is. It will then tell you the right algorithm, and possibly even decrypt it for you. The important thing is the scanner does all the work of choosing the right key. In that way the scanner is acting like a Strategy object.

## Template Method

Template methods are when you define the skeleton of an algorithm or an object, but leave some needed parameters to fill in by subclasses. This makes it easy to create lots of different objects from this template that can vary when needed, but also keep any needed, common methods.

#### Metaphor

Let's say you like to design and print t-shirts in your free time. There's lots of designs you have in mind, and many of them have similar elements. You could make each design from the ground-up, but then you'd be designing certain elements repeatedly and wasting time. A more efficient way to make a design that have several common elements, like background images or certain shapes, as starting points. Then you can use them to start the simialr designs, saving lots of time while getting the specific design work done. Those starting designs serve the same function as Template methods

## Visitor

Visitors are objects that contain a method, or set of methods, to be performed on other objects. They're a good way to separate objects and actions that need to be performed on them, so they're more loosely coupled and can more easily use different methods for an object.

#### Metaphor

Let's say you're at a grocery store, gathering different items in your grocery cart. When you bring the items to the cashier, they handle scanning the items, applying the discounts to ones on sale, and adding the prices together. The cashier handles all these operations, knowing which prices to apply in the end, and what the total will be. The cashier is a visitor in this case, applying all these operations you don't know but still decide how much money you pay.
