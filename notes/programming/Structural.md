---
group: programming
layout: post

title: Structural Patterns
descr: Patterns to combine code modules into more complex objects without falling apart after.

resources:
  - title: Design Patterns, Elements of Reusable Object-Oriented Software
    author: John Vlissides, Richard Helm, Ralph Johnson, Erich Gamma
    link: https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_2?s=books&ie=UTF8&qid=1535832017&sr=1-2&keywords=design+patterns+elements+of+reusable+object-oriented+software
    publisher: Addison-Wesley Professional
---

Structural Patterns manage how classes and objects work together to make larger, more complex "structures."

* **Structural Class Patterns** use inheritance to compose interfaces and implementations.
  * Inherits another class and adds additional methods based on what's given.
* **Structural Object Patterns** find ways to compose objects to create new functions. Unlike class ones, composition can be changed at run-time for added flexibility.
  * Composes different objects together and adds more functions for new behavior

## Adaptor (Wrapper)

Convert one class interface into something another interface expects so they can work together. This is helpful when a certain tool or interface has domain-specific requirements, such as third-party code that can't be changed. Adaptors let the two interact properly without having to make direct changes to either of them, ensuring they're not too tightly coupled.

#### Metaphor

It's like having a plug that doesn't fit into an outlet. An outlet adaptor lets the two work together - you can put the plug into the adaptor, and then put that into the outlet. Otherwise incompatible technology can now work together to do more ambitious or complex things, like use your American laptop charger in a foreign country.

## Bridge (Handle, Body)

This pattern separates an abstraction from its actual implementation, so they'd be entirely separate objects. This is a more flexible way to handle an abstraction having several different implementations than by using class inheritance, since it offers more specific control.

#### Metaphor

Imagine the process of building a bridge. Two basic parts of this process are drawing up a blueprint and doing the actual construction. To make a bridge, you need to first draw up the blueprints and then use them to make the bridge.

Now imagine if you have to make the same type of bridge in two different locations. It'd be inefficient to go to each location and draw up separate blueprints in each place. A better way is to draw up a basic blueprint that could work for both, making copies of it, and then sending it to the two construction locations (and any others that need it). This makes it easy to have a solid, common baseline for each bridge that can be adjusted when needed. It also makes it easier to make changes to each blueprint for each bridge as needed without messing up this baseline.

## Composite

The composite pattern is an object-oriented pattern for making an object that works as both:

* A standard, single object
* A collection of objects operating in a kind of tree hierarchy

The composite object as a whole, and each part of the composite hierarchy, will have a common set of methods to call upon. Each method may differ in outcome based on where it is on the hierarchy, and may have additional ones.

It's useful when using lots of similar objects in the same way and similar setups, such as having lots of similar methods. The composite pattern lets all these objects stay connected and function the same way.

#### Metaphor

Imagine a large army. The army as a whole can be considered one "offensive group", but each platoon of the army can also be considered its own "offensive group." You can break it down even further, saying that each tank, group of soldiers, or individual soldiers, can be an "offensive group" or "offensive object."

No matter what part of the hirarchy you're in, from the entire army to one solder, you can expect each to have common functionalities. These can be to attack, hold firm, retreat, defend, reload, etc. Each one may execute differently, or need different input from elsewhere in the hierarchy (a soldier may need to check orders from their immediate leader before attacking), but you can expect each part to have the same basic functions you'd expect from an "offensive object."

This army and all its composed parts are a large scale example of something made with the composite pattern. The distinction between each part of the parts can often be ignored (you know that every part can do things like attack or retreat).

## Decorator (Wrapper)

Decorators let you add functionality to specific object instances (not the class making them as a whole), giving you more flexibility). It basically "decorates" this extra functionality onto it as an extra, despite the core class or object not neeting it.

#### Metaphor

You live in a bare apartment and start decorating it with posters. Some posters look fine on their own, but you want to add more to others - such as adding frames or stickers. Adding these to some posters (not all of them) is like adding a decorator to an object.

For example, a poster near a window would benefit from a frame to better protect it from the wind. Some posters may have extra space and look better with the stickers. The posters are still okay with or without these "decorators," but some benefit from them.

## Facade

Gives a unified, high-level object to interact with a more complex collection of objects. This makes it easier to use lots of complex functionality under the hood.

#### Metaphor

A cash register looks at lots of different things to calculate your final price - discounts, taxes, shipping, sales, etc. But the cashier doesn't deal with all these directly, they just put in the info on their register and it does all the math. The cash register is the facade here, giving a high-level interface to access all the pricing functionalities.

## Flyweight

Sometimes a program needs a huge number of similar objects, to the point where it takes up too many resources. Flyweights help avoid this by sharing all common properties, and only setting their different intrinsic properties.

#### Metaphor

Imagine a deck of cards. Each card has many properties and functions, but ultimately they're all the same. The only differences are their value and suit, so they're the only things that need to be set. Cards are the same internally, and all the differences between cards relate to how they're externally handled (such as how they rank compared to another card). Each card would a typical Flyweight.

Making cards with the Flyweight pattern means creating them through a Flyweight factory. The factory creates a basic Card object, and each one only differs through their intrinsic "value" and "suit" properties. All other properties and actions, such as card thickness and being discarded, are controlled by the Card class. The factory also checks to make sure the same card isn't added twice, as well as any extrinsic state info like what game is played and what card it's being played against.

## Proxy (Surrogate)

A placeholder or gatekeeper that controls access to another object. This may be because of strict requirements or high runtime costs that mean another object can't be used or created carelessly. Proxys specifically make sure all these requirements are met.

#### Metaphor

You have a night club with all kinds of fun activities in them. However not everyone can enter it. People must meet certain age, money, and clothing requirements. So the club hires a doorman to make sure only people who meet these requirements can enter. People must interact with the doorman, and the doorman will turn them away or let them enter. Here the club is an object, and the doorman is the proxy controlling access to it and its methods.
