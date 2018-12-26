---
group: sonicpi
layout: post

title: Synth Samples
descr: Interesting synth creations and rhythms to use later
---

### Background Drum Beat

Based off the [Splatoon 2 Nasty Majesty music](https://www.youtube.com/watch?v=K5ZU5ourdEE).

{% highlight ruby %}
live_loop :drum do
  rest_beat = (ring 0.5, 0.25, 0.5, 0.75)

  with_fx :reverb, mix: 0.4 do
    with_fx :flanger do
      sample :bd_tek
      sleep rest_beat.tick
    end
  end
end
{% endhighlight %}

### Running Bass Melody

This is taken from a live coding session from Sam Aaron himself. It takes a bass synth and rapidly adjusts the notes and cutoff to create the illusion of several notes in rapid succession. It's a great setup for a bouncing background melody.

{% highlight ruby %}
live_loop :melody do
  tick_reset_all
  use_random_seed 42
  notes = (scale :e1, :major_pentatonic, num_octaves: 3).shuffle

  with_fx :lpf, cutoff: 100 do
    with_fx :reverb, room: 1, amp: 2 do
      with_fx :tanh, krunch: 30, amp: 0.7 do
        n = synth :dsaw, cutoff: 130, release: 8, note: notes.tick, cutoff_slide: 1.5
        control n, cutoff: 70

        32.times do
          sleep 0.125
          control n, note: notes.choose
        end
      end
    end
  end
end
{% endhighlight %}
