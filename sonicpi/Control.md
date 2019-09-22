# Control

Control takes an ongoing sound and lets you adjust certain properties as it plays. You can change synth notes, amp, sustain, release, and others. It takes a few basic steps:

1. Save the synth or sample into a variable, which will play it with any other set variables.
2. You can have other actions after this, such as sleep.
3. If you call the same variable with `control`, you can pass in different params that will change as it plays.
4. Repeat as needed.

A simple example of this from the tutorials below:

```ruby
s = play 60, release: 5
sleep 0.5
control s, note: 65
sleep 0.5
control s, note: 67
sleep 3
control s, note: 72
```

This is also possible with samples and effects.

```ruby
with_fx :reverb do |r|
  play 50
  sleep 0.5
  control r, mix: 0.7
  play 55
  sleep 1
  control r, mix: 0.9
  sleep 1
  play 62
end
```

You can also pass different `_slide` parameters to these that will draw out or quicken the slide between the changes (the default is 1). Some of, but likely not all slide options, are below:

* `note_slide` - Changing the note of a synth, such as from 65 to 70
* `phase_slide` - Changing the duration of a specific effect, such as the duration of `echo`
* `cutoff_slide` - Changing the cutoff of a note, or where it stops playing
* `amp_slide` - Changing the amplitude, or volume, of a sound
* `mix_slide` - Changing the mix, or how much of an effect is mixed into the original sound (0 is no effect, 1 is full effect)
* `lpf_slide` - Changing the "lowest possible frequency." A higher lpf gives the sound higher frequencies, which are less bass and more "buzzy and raspy."
* `hpf_slide` - Changing the "highest possible frequency." A lower lpf gives the sound lower frequencies, which are more bass and less "buzzy and raspy."
