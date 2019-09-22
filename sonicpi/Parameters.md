# Parameters

Different parameters to pass into notes and samples to better manage them.

## beat_stretch

This adjusts a sound's rate until it plays for a specific amount of time. Great for getting sounds into specific time frames.

```ruby
sample :ambi_drone, beat_stretch: 8
# This sample will slow down until it takes exactly 8 seconds to play out
```

## reps

Instead of making an extra `16.times` block, if you're using a sample you can instead just use the `reps` parameter for the same effect.

In the below example, the sound will play four times before choosing another random phase value and going again.

```ruby
live_loop :break do
  p = [0.125, 0.25, 0.5].choose
  with_fx :slicer, phase: p, reps: 4 do
    sample :loop_amen, beat_stretch: 2
    sleep 2
  end
end
```
