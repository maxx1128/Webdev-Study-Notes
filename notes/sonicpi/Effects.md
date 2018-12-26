---
group: sonicpi
layout: post

title: Effects
descr: Mess with the sounds by wrapping them with sound effects
---

### slicer

Slicer takes a longer, continuous sound and phases it in and out which "slices" it up. You can use the `phase` parameter to change how long the sound is before it slices back out (larger means more sound per slice).

{% highlight ruby %}
live_loop :space_light do
  with_fx :slicer, phase: 0.25 do
    synth :blade, note: :d, release: 8, cutoff: 100, amp: 2
  end
  sleep 8
end
{% endhighlight %}
