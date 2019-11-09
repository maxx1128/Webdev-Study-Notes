# Comments

At best comments are a necessary evil. Only use them to compensate when you fail to express yourself properly in code - this means comments are a sign of failure, so be sure they're the only option left.

Comments are bad because the longer they're not maintained, the more they become lies. And it's not realistic to maintain them as needed while the codebase changes. Inaccurate comments are worse than no comments since they mislead. The only reliable source of truth is the code itself.

If you write comments that make up for bad code, delete the comment and improve the code. This can be as simple as

* Writing a function or variable name that says the same thing a comment would say with explicit names
* Abstracting one or more parts of the code so they can be organized and named in a way that makes their purpose clear

## Good Comments

While the best comments need not be written, some comments are indeed necessary. At least until you find a way to remove them later.

### Legal Comments

Some comments are required for legal reasons, like copyright messages. Some IDEs can automatically collapse these comments to avoid clutter. It's also best to refer to external documents when you can instead of pasting the whole text in the code.

### Informative Comments

Comments explaining a function's return value can be useful, but only when it can't be explained with the function's name. But when its complexity can't be expressed in just a name, like telling how a regular expression works, a comment can explain why. But abstracting that regex away would be even better.

Other informative comments include

* Explaining intend for less conventional or elegant solutions
* Clarifying obscure arguments or return values
* Warnings of consequences, like risks for mutations or long run times
* Pointing out why some code is extra important, especially if others may overlook it

### TODO Comments

TODO comments use that specific four-letter word and mark jobs that should be done but can't be done at the time. Leaving them there at all is bad enough, so make it a habit of finding and removing them whenever you can.

## Bad Comments

Most comments are like this, and unlike good comments, have no reason to be there. Remove them as soon as possible. Some basic examples of bad comments are:

* Programmer mumblings with an unclear purpose and make you look around to figure out what they mean
* Redundant comments restating info you could already glean from the code itself
* Misleading comments that misinform others about what the code does
* Mandated comments for things like documentation generation, since they just add noise. It's easy for cut-paste errors to slip into these.
* Comments that journal how code was written. This is what source control is for
* Banners or position markers. They startle and aren't needed
* Closing brace comments
* Bylines, such as who wrote what
* Commented out code. They usually arrive from a lack of courage to delete it. They confuse later programmers on if its necessary or related to how the code now works
* Comments showing what the HTML markup looks like
* Comments describing code somewhere else, leading to obscure connections between comments and code
* Comments with needless information
