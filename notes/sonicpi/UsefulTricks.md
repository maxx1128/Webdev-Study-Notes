---
group: sonicpi
layout: post

title: Useful Tricks
descr: Setups for making creative, interesting sound patterns
---

### Beat with a Finish

If you tick through a ring, you can round out each iteration with another sound or sample. It'll go in the background as the ring repeats, adding some texture.

{% highlight ruby %}
live_loop :spread_2 do
  (bools 1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0).each do |b|
    sample b ? :drum_bass_soft : :drum_tom_lo_hard, rate: rrand(0.9, 1.2)
    sleep 0.25
  end
  sample :glitch_bass_g, rate: ring(0.8, 0.9, 0.95, 1).tick
end
{% endhighlight %}
