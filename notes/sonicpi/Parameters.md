---
group: sonicpi
layout: post

title: Parameters
descr: All the fun ways to directly fiddle with notes and samples
---

Different parameters to pass into notes and samples to better manage them.

### beat_stretch

This adjusts a sound's rate until it plays for a specific amount of time. Great for getting sounds into specific time frames.

{% highlight ruby %}
sample :ambi_drone, beat_stretch: 8
# This sample will slow down until it takes exactly 8 seconds to play out
{% endhighlight %}
