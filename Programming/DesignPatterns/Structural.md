# Structural Patterns

Structural Patterns manage how classes and objects work together to make larger, more complex "structures."

* **Structural Class Patterns** use inheritance to compose interfaces and implementations.
  * Inherits another class and adds additional methods based on what's given.
* **Structural Object Patterns** find ways to compose objects to create new functions. Unlike class ones, composition can be changed at run-time for added flexibility.
  * Composes different objects together and adds more functions for new behavior

## Adaptor

Convert one class interface into something another interface expects so they can work together.

### Metaphor

It's like having a plug that doesn't fit into an outlet. An outlet adaptor lets the two work together - you can put the plug into the adaptor, and then put that into the outlet. Otherwise incompatible tech can now work together.

### Uses

* A certain tool or interface has domain-specific requirements, such as third-party code that can't be changed. Adaptors let the two interact properly.

## Bridge

## Composite

## Decorator

Decorators let you add specific functionality to specific object instances (not the class making them as a whole, giving you more flexibility).

### Metaphor

You live in a bare apartment and start decorating it with posters. Some posters look fine on their own, but you want to add more to others - such as adding frames or stickers. Adding these to some posters (not all of them) is like adding a decorator to an object.

## Facade

Gives a unified, high-level object to interact with a more complex collection of objects. This makes it easier to use lots of complex functionality under the hood.

### Metaphor

A cash register looks at lots of different things to calculate your final price - discounts, taxes, shipping, sales, etc. But the cashier doesn't deal with all these directly, they just put in the info on their register and it does all the math. The cash register is the facade here, giving a high-level interface to access all the pricing functionality.

## Flyweight

Sometimes a program needs a huge number of similar objects, to the point where it takes up too many resources. Flyweights help avoid this by sharing all common properties, and only setting their different intrinsic properties.

### Metaphor

Imagine a deck of cards. Each card has many properties and functions, but ultimately they're all the same. The only differences are their value and suit, so they're the only things that need to be set.

Making cards with the Flyweight patterns means creating them through a Flyweight factory. The factory creates a basic Card object, and each one only differs through their intrinsic "value" and "suit" properties. All other properties and actions, such as card thickness and being discarded, are controlled by the Card class. The factory also checks to make sure the same card isn't added twice, as well as any extrinsic state info like what game is played and what card it's being played against.

## Proxy

A placeholder or gatekeeper that controls access to another object.

### Metaphor

You have a night club with all kinds of fun activities in them. However not everyone can enter it. People must meet certain age, money, and clothing requirements. So the club hires a doorman to make sure only people who meet these requirements can enter. People must interact with the doorman, and the doorman will turn them away or let them enter. Here the club is an object, and the doorman is the proxy controlling access to it and its methods.
