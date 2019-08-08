# Meaningful Names

Names are everywhere in codes. Write them right. Don't be afraid to change names into something better. Coders often search and index names, not memorize them, so it's often easier to deal with name changes than expected.

Good naming requires good descriptive skills and a shared cultural background. This is focused around teaching skills, not technical skills, so it's often tough for programmers to do right.

## Reveal Intention with Names

A name should quickly convey the following threee points of meaning. If the name needs a comment, it's not doing this right.

* Why it Exists
* What it Does
* How it's Used

The more a name requires extra context or explanation, the less intention it reveals.

## Avoid Disinformation

Avoid words whose entrenched/common meaning differs from the intended meaning. This happens a lot in long code names with subtle differences. Using tools for automatic code completion helps avoid this.

An example is the name `hp` when it could be confused with the company HP, or an acronym for hypotenuse, or others.

Another is using the letter `l` as a var name, since it could be confused with the integer `1`.

## Make Meaningful Distinctions

Don't change identical names by making arbitrary changes between them, such as:

* Deliberate mispellings (`Produck`, `Prooduct`)
* Number series (`Product1`, `Product123`)
* Noise words (`theProduct`, `productData`)
  * They don't make them mean anything different, are redundant
  * Prefixes like `a` and `the` work as long as they're meaningful, like `a` for local variables or `the` for function arguments.

## Use Pronouncable Names

You need to talk about code with others. If you can't pronounce it, you sound like an idiot talking about it.

## Use Searchable Names

Single letter or numerical constant names are tough to locate across bodies of text. For example, `e` is a bad name since the letter appears basically everywhere.

Long names trump shorter names. The name length should correspond to the scope size. If used in multiple places or in a larger scope, make sure the name is larger and more searchable.

## Avoid Encodings

Don't encode data types or scope into names (`string`, `boolean`, `block`, etc). It's just an extra burden of info to figure out.

## Implementations, not Interfaces

If using a pattern or interface, like the `factory` pattern, don't denote it as an interface with a name like `IShapeFactory`. Using `ShapeFactory` is clearer, focusing on the implementation over the interface.

Programmers are going to be the ones reading your code, so don't be afraid to use computer science terms like `visitor` in names like `AccountVisitor`.

## Avoid Mental Mapping

Readers shouldn't need to mentally translate names into others they already know. Don't create an extra bridge between the name and what it means. Clarity is king in bridging that gap for the reader.

## Class and Method Names

Classes and Objects use noun or noun-phrases, like `Customer`.

Methods should have verbs or verb-phrases, like `postPayment`.

### Method Prefixes

* Accessors = `get`
* Mutators = `set`
* Predicates = `is`

## Don't be Cute

Funny or clever names only make sense to whoever's in on the joke. Clarity beats entertainment value, especially culture-dependent jokes.

## One Word per Concept

Pick and stick with one word per abstract concept and stick with it. If you use `fetch`, `retrieve`, and `get` throughout the code, just pick one and use it everywhere.

## Don't Pun

Never use the same word for two purposes, which is basically a pun. The word `add` should only mean one kind of `add` throughout.

## Add Meaningful Context

Some names on their own aren't meaningful. Enclosing them in well-named classes, functions, or namespaces adds the needed meaning. Prefixing the name is a last resort.

For example, several names like `firstName`, `lastName`, and `city` can get meaningful context as part of a class named `Address`. If you can't do this for some reason, prefixes like `addrFirstName` will work despite not being as good.

On the flipside, some context isn't needed. An application names `BudgetSaverHelper` doesn't need to add the `BSH` prefix to each class. It only makes names harder to search since `BSH` searches return everything.

Also `storeBudget` and `personalBudget` are good instance names, but have gratuitous context for class names. Just `Budget` would work fine. The name can then be specified if multiple types of budget classes are needed.
