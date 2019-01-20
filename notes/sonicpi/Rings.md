---
group: sonicpi
layout: post

title: Rings
descr: Rings are the arrays of Sonic Pi, and the best way to arrange notes
---

## Ring Managers

These are tools for better accessing, adjusting, and using values from rings

* `.reverse` - returns a reversed version of the ring
* `.sort`    - creates a sorted version of the ring
* `.shuffle` - creates a shuffled version of the ring
* `.choose`  - returns a random item from the ring
* `.pick(3)` - returns a ring with the results of calling `.choose` 3 times
* `.pick`    - similar to `.pick(3)` only the size defaults to the same as the original ring
* `.take(5)` - returns a new ring containing only the first 5 elements
* `.drop(3)` - returns a new ring with everything but the first 3 elements
* `.butlast` - returns a new ring with the last element missing
* `.drop_last(3)` - returns a new ring with the last 3 elements missing
* `.take_last(6)`- returns a new ring with only the last 6 elements
* `.stretch(2)` - repeats each element in the ring twice
* `.repeat(3)` - repeats the entire ring 3 times
* `.mirror` - adds the ring to a reversed version of itself
* `.reflect` - same as mirror but doesn't duplicate middle value
* `.scale(2)` - returns a new ring with all elements multiplied by 2 (assumes ring contains numbers only)

### Rests

If you're making a ring by hand and want to include some rests, put in `:r` to not play anything for that note. In this example, `ring :e3, :e3, :r, :g3, :r, :r, :r, :a3`, it will play two notes, rest, play another note, then rest for three notes before the last.

### .look

`.look` is a slightly different version of `.tick`. While `.tick` increases the ring index, `.look` plays the current ring note without increasing the index.

Ticking an array twice makes it start moving through the ring. Using tick and then look makes it stay on the first note until it get's ticked again. Be sure to test uses of look to make sure it's staying where it needs to.

## Ring Constructors

Ring constructors are shortcuts to make different types of rings with different values. They're useful for quickly making different sounds or beats.

### Range

Requires a starting note, an ending note, and a spacing value. It returns a ring starting from the ending value, with each one incremented by the spacing value. Once it reaches the end it starts over.

{% highlight ruby %}
live_loop :range do
  play range(50, 60, 1).tick  # 50, 51, 52, 53, 54...
  sleep 0.1
end
{% endhighlight %}

### Bools

Bools lets you quickly create a ring of true/false boolean values, which can then be used to trigger sounds as needed.

{% highlight ruby %}
live_loop :bools do
  # The returned pattern is * _ * _ *
  # Each asterisk is a true value. The below code only plays the note on "true," creating a rhythm
  if (bools 1,0,1,0,1).tick then
    play 60
  end
end
{% endhighlight %}

### Knit

Knit lets you combine several repeated values together in a larger sequence. It must be given an even number of arguments, and each pair of arguments is (in order):

1. The note, or notes, to play
2. The number of times that note is repeated

{% highlight ruby %}
play (knit 60, 4, 65, 3, 67, 1)
# 60, 60, 60, 60, 65, 65, 65, 67, and repeats

play (knit :a1, 2, [:c1, :c2].choose, 1).tick
# Plays :a1 twice, one random selection from the array (:c1 or :c2), and repeats

play (knit chord(:b, :minor), 3, chord(:a, :major), 1).tick
# Plays three b minor chords, one a major chord, and repeats
{% endhighlight %}

### Spread

Spread takes two values - the first is the number of active beats, and the second is the total beats they're distributed across. The distribution is done automatically through Euclidean Distribution, which basically tries to space them as evenly as possible.

What's literally returned is a ring of boolean values, with the true values distributed based on the params. These can be used in a few different ways.

{% highlight ruby %}
# This sample plays on the true values and are silent otherwise
live_loop :spread_1 do
  if (spread 3, 8).tick then # * _ _ * _ _ * _
    play 60
  end
  sleep 0.5
end

# The samples being played alternate based on the returned booleans
live_loop :spread_2 do
  (spread 5, 14).each do |b|  # * _ _ * _ _ * _ _ * _ _ * _
    sample b ?  :drum_tom_mid_hard : :drum_cymbal_closed, amp: 0.5
    sleep 0.25
  end
end
{% endhighlight %}
