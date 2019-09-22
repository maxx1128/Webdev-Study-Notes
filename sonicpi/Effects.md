# Effects

Sound effects to change synths and sound samples

## slicer

Slicer takes a longer, continuous sound and phases it in and out which "slices" it up. You can use the `phase` parameter to change how long the sound is before it slices back out (larger means more sound per slice).

Great if you want to take a larger sample and break it into a beat while keeping its essence.

```ruby
live_loop :space_light do
  with_fx :slicer, phase: 0.25 do
    synth :blade, note: :d, release: 8, cutoff: 100, amp: 2
  end
  sleep 8
end
```

Some useful parameters for controlling the `slicer` effect:

* `phase` determines the rate of the slicing effect, can be between 0 and 1. Setting this can help the sliced sound match the beat of other sounds being looped.
* `mix` determines how much of the sound is cut out, can be between 0 and 1. The higher the mix, the more sound gets cut out.
* `wave` controls the modulating waveform, can be either 0, 1, or 2. Play with them to see how they change the sound.
  * 0 - hard in, fade out
  * 1 - hard in, hard out
  * 2 - fade in, fade out
