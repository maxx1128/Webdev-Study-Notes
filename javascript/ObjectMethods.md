# Object Methods

## For X in Obj

Loops through all the properties and values of an object, in case all need to be looked at.

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

for (let character in RWBY_colors) {
  console.log(`${character} has a color of ${RWBY_colors[character]}`)
}

// ruby has a color of red
// yang has a color of yellow
// blake has a color of black
// weiss has a color of white
{% endhighlight %}

## Object.values()

Creates an array of all the object's values

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

const colors = Object.values(RWBY_colors);
// [ 'red', 'yellow', 'black', 'white' ]
{% endhighlight %}

## Object.keys()

Same as `Object.values()`, but for the keys

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

const names = Object.keys(RWBY_colors);
// [ 'ruby', 'yang', 'blake', 'weiss' ]
{% endhighlight %}

## Object.entries()

This is a combination of the above. All key-value pairs are returned as arrays, all as an item inside another array. Any objects set as values here stay as objects.

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

const huntresses = Object.entries(RWBY_colors);
/*
[ [ 'ruby', 'red' ],
  [ 'yang', 'yellow' ],
  [ 'blake', 'black' ],
  [ 'weiss', 'white' ] ]
*/
{% endhighlight %}

## Object Spread

Object spreading lets you add key-value pairs into an object without mutation (it's a new object).

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

const two_team_colors = {
  ...RWBY_colors,
  nora: 'pink',
  ren: 'green'
}
/*
{ ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white',
  nora: 'pink',
  ren: 'green' }
*/
{% endhighlight %}

## Object Freeze

Prevents an object from being modified or added to again. Useful since `const` doesn't actually do this.

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

Object.freeze(RWBY_colors);

RWBY_colors.ruby = 'dark red';
// Won't change

RWBY_colors.nora = 'pink';
// Won't be added
{% endhighlight %}

## Object Seal

Prevents an object from being added to, but existing properties can be changed.

{% highlight javascript %}
const RWBY_colors = {
  ruby: 'red',
  yang: 'yellow',
  blake: 'black',
  weiss: 'white'
}

Object.seal(RWBY_colors);

RWBY_colors.ruby = 'dark red';
// Changes the object

RWBY_colors.nora = 'pink';
// Still won't be added
{% endhighlight %}
