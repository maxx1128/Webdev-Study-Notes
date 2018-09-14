---
group: programming
layout: post

incomplete: true
title: Creational Patterns
descr: Patterns to create code objects independent of the application

resources:
  - title: Design Patterns, Elements of Reusable Object-Oriented Software
    author: John Vlissides, Richard Helm, Ralph Johnson, Erich Gamma
    link: https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_2?s=books&ie=UTF8&qid=1535832017&sr=1-2&keywords=design+patterns+elements+of+reusable+object-oriented+software
    publisher: Addison-Wesley Professional
---

Creational patterns help separate how objects are created from the rest of the system, so both systems are independent. Class information, including how they're created and composed, are all kept separate.

Helps emphasize object composition over class inheritance. Doing this puts more emphasis on composing several smaller, fundamental behaviors together into larger objects.

* Class Creational Pattern - Uses inheritance to customize the class object made
* Object Creational Pattern - Delegations object creation to another object

## Abstract Factory

For when you need to create collections of related classes and objects. May be a collection of different factories, and the Abstract Factory determines which is used.

#### Uses

* If you have several related objects, and the relationships between them determines which one is needed.

## Builder

When you need to create a complex object, break the creation of each part needed into a separate function or step.

* Start with a constructor Base class that creates aninstance of a Class
* Make the Builder class that creates an empty instance of the Base class
* The Builder class uses separate functions to set each property on the Base, with any needed logic or parameters
* End with a function that returns the completed Base, possibly checking if all needed properties have been set.
* Export the Builder class

#### Metaphor

When you buy a piece of Ikea furniture, you need to follow lots of specific steps to make it. It takes a certain amount of materials, and some steps give the customer choices in how to make it (such as putting a pullout desk on the left or right). You could also stop building the furniture midway to make lunch or something else.

* Starting to make the furniture is creating the object
* Each step is another function that creates part of the object
* You don't need to use all the functions to make the class at once - you could stop and continue later based on other conditions

#### Specifics

* **Builder**: A class abstract to build the object
* **Product**: The final object that's built

#### Uses

* Great for complex object construction, since breaking it down to separate function steps makes it easier to manage and control.
* Separates the object's logic and the creation logic
* Can create different, specific object instances as needed

## Factory Method

A class that creates different instances of a specific class or object.

#### Uses

* If you have one class, but need to create different instances of it after runtime.
  * Can produce different versions of it based on input arguments
  * Can predetermine the arguments used with the different versions in advance

## Prototype

Creating a specific class instance, and cloning it as needed.

* Each instance specifies the type of prototype needed when creating a new object
* The application clones the needed prototype when requested
  * The Prototype can apply needed changes too

## Singleton

For when a class can only have a single instance, and be accessed globally.

* Create the Singleton class that will check if an instance of it already exists
  * If not, it will create the first instance of itself
  * If it already exists, it will reference the previous instance when creating the object
* All parts of the application can access the Singleton class whenever needed as the single source of truth

#### Specifics

* **Singleton**: The Singleton class that returns its previous instance or creates one. Nothing else needed really.

#### Uses

* Classes need a single source of truth while still being subclassed
* Must be easily accessible
