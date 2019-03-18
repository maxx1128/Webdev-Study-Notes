# Classes

Classes are a staple of ofobject-oriented programming, and allow coders to create objects with set values and methods. The `class` itself creates the basic values and methods, and you can them make specific `instances` that use unique data.

An important part of classes that carries over th JS classes is `inheritance`. The below example shows that `Coder` is an extension of `Person`, so it inherits everything from it and can add/overwrite other methods too. A common practice is defining a base class that sets up frequent methods, especially onces that talk with an API, and extend different portions of the application off of this. This way developers can quickly scale up new functionality that can interface with the core app.

{% highlight javascript %}
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

class Coder extends Person {
  getJob() {
    return 'Coder';
  }
}

var me = new ReactDeveloper('Max', 'Antonucci');

console.log(me.getName());
console.log(me.getJob());
{% endhighlight %}

You'll see classes used this way a lot in JavaScript frameworks like Ember and React.
