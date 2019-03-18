# Creational Patterns

Patterns to create code objects independent of the application

Creational patterns help separate how objects are created from the rest of the system, so both systems are independent. Class information, including how they're created and composed, are all kept separate.

Helps emphasize object composition over class inheritance. Doing this puts more emphasis on composing several smaller, fundamental behaviors together into larger objects.

* Class Creational Pattern - Uses inheritance to customize the class object made
* Object Creational Pattern - Delegations object creation to another object

## Abstract Factory (Kit)

For when you need to create collections of related classes and objects. May be a collection of different factories, and the Abstract Factory determines which is used. If you have lots of Factory Methods, the Abstract Factory is your interface to make the right ones without naming the specific Factory Methods.

Great if you have several related object factories, and the relationships between them determines which one is needed.

#### Metaphor

Say you're a major company that builds different forms of transport like cars, planes, and trains. At the corporate headquarters you need to process all the orders and know what to build. But you need to get these orders going while never knowing for certain which specific factories are best suited to make the order. Whenever you need to build a new airplane, it'll take too much time to look up which specific factory should make it and how.

You need someone who will keep track of the available factories and know how to figure out who is going to make which order. The CEO will tell them we need several new trains, and this new person is in charge of deciding which factory fills the order, and needed adjustments to make to it, and if any additional/related orders need to be placed (such as contacting a steel factory for extra materials). This extra person is filling the same role as an Abstract Factory.

Unlike the Factory Method, which returns a specific instance of an object, the Abstract Factory returns the needed Factory Method that can then make the needed objects.

## Builder

When you need to create a complex object, break the creation of each part needed into a separate function or step. It's good for complex object construction, since the complexity can be broken into specific steps. This separates the object and creation logic, and gives more control over the flow of how an object is made.

* Start with a constructor Base class that creates aninstance of a Class
* Make the Builder class that creates an empty instance of the Base class
* The Builder class uses separate functions to set each property on the Base, with any needed logic or parameters
* End with a function that returns the completed Base, possibly checking if all needed properties have been set.
* Export the Builder class

In short, you have to have specific functions to keep "building" the object in question. Once it's complete, you use one last function to return the finished object.

#### Metaphor

Let's say you run a train factory, and are in charge of the logistics for making the trains. You have the blueprints for making them, and see a long list of steps to carry out. Some steps can be done on their own, others must be done in groups, and others need extra information to be built right. This is a lot to organize, and doing these steps incorrectly risks messing up the contruction.

To get around this, you break up the long list of steps into logical chunks. Steps that must be done right after the other are put into a group. Steps that need more info, like measurements or weight, note that they can't be done without them. Grouping the steps together in this way ensures the train will be built properly and on the right schedule. This also helps create good stopping points over several days or weeks. When you hit a particularly large series of steps near the end of the day, or one that needs info you don't have yet, you know it's a good time to stop and pick up again later.

Breaking the train construction down is the same as making the train with a Builder pattern. Each step, whether it's a single item or multiple items, or needs paramters, is called as a function in sequential order and with good stopping points.

## Factory Method (Virtual Constructor)

A class that creates different instances of a specific class or object. Useful if you have one class, but need to create different instances of it after runtime. You can make different versions of a class object based on the parameters you choose. This structure helps separate the class/object's own logic, and the needed steps/parameters needed to make the right instances of it.

#### Metaphor

You run a train factory that gets lots of different orders for trains. Your job is to take the generics customer orders and translate them into orders with the needed technical specifications. You could get an order for a "comfortable commuter train" and know that, to make that, your factory will need to make a train with specific amounts of steel, types of seats, will fit into a certain rail type, uses a certain engine type, and other details. The orders you get don't specify all this. Every time you get an order, you need to take a general and pull all the specific construction needs from it.

A Factory Method does essentially the same thing. You pass in a few common, generic parameters, and the class returns an object that fills out a class's specific arguments. This helps the Factory Method act as an interface to creating classes, without directly interfacing with the class itself.

Unlike the Abstract Factory, which returns the needed Factory Method, the Factory Method itself returns a specific instance of a class.

## Prototype

Creating a specific class instance, and cloning it as needed.

* Each instance specifies the type of prototype needed when creating a new object
* The application clones the needed prototype when requested
  * The Prototype can apply needed changes to this prototype, but ideally the Prototype being cloned is changed as little as possible
  * Avoid using `new` here, only use a `clone` function or method to make copies

#### Metaphor

Once again you work at a train factory, except this time you make blueprints for constructing trains. You get orders for many different types of trains, and for each order you need to submit a new set of blueprints. However the blueprints for each type of train look very similar, with some being virtually identical.

To save time, you decide to create a kind of boilerplate for each type of train. Whenever you get a new order for a train type, you simply make a copy of that blueprint and make any needed tweaks. For example, getting a new order for a luxury train means making a clone of the luxury train blueprints. Then you do a few preset changes to quickly change aspects that commonly change, like the coloring, shape, or name. This slightly-altered clone is then submitted as the needed blueprint.

This process of making a version of something, cloning it, tweaking it if needed, then using it, is the basic process of building objects with the Prototype pattern.

## Singleton

For when a class can only have a single instance, and be accessed globally.

* Create the Singleton class that will check if an instance of it already exists
  * If not, it will create the first instance of itself
  * If it already exists, it will reference the previous instance when creating the object
* All parts of the application can access the Singleton class whenever needed as the single source of truth

#### Metaphor

Let's say we're back at the train factory, this time as the head of the budget. It's your job to keep track of all the factory's funds, making sure you're not under budget and giving money updates when needed. However you're not the only one handling money. Other departments often need to see how much money they have, and make withdrawals for purchases. Departments withdrawing money can affect how much money is left for others, so making sure everyone is referencing the same budget info is vital. If budget info accidentaly got copied, departments may reference different copies, get wrong information, and spend too much money.

So you set up a database as the single-source of budget information that all departments are forced to access. If anyone accidentally does something in the database to copy the data, it automatically checks and returns the current version of the data instead of making a new one. This failsafe ensures there's only one source of truth that is always accurate, no matter where it's checked from.

Now you and all the departments can check balances and withdraw funds knowing that their budget info comes from the single source of truth. This database is functioning the same as a Singleton, ensuring the data source can't be copied, and this data source can be reliably accessed anywhere.

## Resources

* [Design Patterns, Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_2?s=books&ie=UTF8&qid=1535832017&sr=1-2&keywords=design+patterns+elements+of+reusable+object-oriented+software)
