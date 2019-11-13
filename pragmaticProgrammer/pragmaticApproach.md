# A Pragmatic Approach

Several principles and approaches are universally useful throughout programming.

## Evils of Duplication

Code requirements and environments change constantly, and therefore code is always under maintenance.

When knowledge or functional representations are duplicated, it makes maintenance infinitely tougher. It risks them getting out of sync so code isn't fully fixed, or even works worse than before. This isn't a possibility, it's a certainty.

Code should follow the *DRY principle, which stands for Don't Repeat Yourself.* Each piece of knowledge must have a single, clear, authoritative representation in a system.

Another good rule is making code easy to reuse. The easier this is, the more likely people are not duplicate the code instead.

There are several possible causes of duplication, which have their causes and ways to fix them.

### Imposed Duplication

When developers feel they have no choice but to duplicate code. Some causes are project standards, multiple targets or environments, or the language itself. While the overall solution is usually "write smarter or cleaner code," some others include:

* Code filters or generators that can work across multiple systems
* IDE generators can automatically create duplication needed in languages, like with exporting code, to avoid manual maintenance. This is one of the few ways to handle duplication due to language restrictions
* Generating tests from code with inline documentation to keep tests in sync with code without risking duplication

### Inadvertent Duplication

When duplication is accidental. An example is unnormalized data with unclear copies of data across database models. Make sure data is fully normalized before implementing it.

Some values may depend on others, like two points determining a line's length. Make the length a calculated property and not one to manually update. If you can't avoid duplication like this, limit it to that model.

### Impatient Duplication

When it's easier to duplicate code. Copying and pasting something with a few tweaks seems easy when on a deadline. Remember this saves a little time now but costs a lot later. Resist the urge to take the shortcut.

### Interdeveloper Duplication

When different people on a team duplicate info, often inadvertently from a lack of communication. Having a clear project design, group structure, and responsible leader helps avoid this.

Open, frequent communication between developers also goes a long way, even just with chat groups that also give documentation of who said what. Get in the habit of reading others' source code.

## Orthogonality

An orthogonal system is when there are at least two elements, and changes in one don't affect the other. An orthogonal web app will let you change the database without affecting the UI, and vice versa. They're independent and with one well-defined purpose.

Nonorthogonal systems are more complex and tough to control. Changes in one area cause unrelated changes, or mutations, in another. This unpredictability is a bug breeding ground.

This goes hand in hand with the DRY principle. The former minimizes duplication, this minimizes interdependency. Improving one makes it easier to improve the other, so don't neglect either.

### Benefits

Orthogonal systems are more productive. Less time is wasted on testing or extra changes. Other components aren't needlessly revisited. They can be reused and reconfigured better in other ways, which saves time overwriting new ones. Being able to mix and match components lets you do a lot more with less work.

Orthogonal systems are less risky. Bugs in one component won't spread. They're easier to test in contained units. There's less reliance or tight coupling to third-party code.

Orthogonality can also apply to other aspects of a programmer's work.

* **Project teams** should communicate well, but be orthogonal to reduce confusion about overlapping responsibilities.
* **Design specs** set the ground for orthogonal systems, clearly defining roles and the levels of abstraction. Any overlapping functions can be ironed out ahead of time.
* **Toolkits and libraries** may have functionality that threatens orthogonality. Be extra cautious in what you allow in.
* **Tests** that don't overlap are easier to test since it's clearer what needs to be tested.

### Writing Orthogonal Code

* **Keep Code Decoupled.** One module should never expose anything not needed by another.
* **Avoid Global Data.** It's the easiest type of data to latch onto something it shouldn't. Singletons are a pattern of global data that can work but still need caution.
* **Avoid Similar Functions.** Abstract and reference it in these places instead.

## Reversibility

Coders like simple solutions, but they often change or get more complex over time. And every critical decision made locks code into a narrower version of reality that's harder to change. When critical decisions are hard to reverse, they make inevitable changes more painful. This can be changed about architecture, vendors, or deployment models.

This is why adding enough flexibility to reverse critical code matters. Abstracting critical implementations behind interfaces to the point where major updates can be handled in just a few days is the ideal here. Or any other approach where **no decision is final for the codebase**. Other approaches are defining this decision in configuration files, or metadata combined with automation.

Bad signs for reversibility are poor encapsulation, high coupling, and hard-coded logic or parameters.

## Tracer Bullets

"Tracer Bullets" refers to an approach when building out a new or unfamiliar type of program, often with vague specifications and are never seen as "finished."

It's a building approach that works like this: Build something to try and reach one vital goal fast, like establishing a basic database connection. Make it skeletal and don't worry about polish or fine details. Get immediate feedback to see how close you were. Keep going until you realize you hit the target, then repeat with the next aspect you need to make.

This fleshes the program out step-by-step. The code is not disposable - you keep and adjust it as needed. Adjustment is key, since missing a few times is expected, but changing it is easy. Once you hit all the key targets, adding in the rest is easy.

Benefits of this include:

* Everyone sees early, visible progress
* Steady, continuous integration of new features
* Demonstrate to management that it's working
* Easier to measure progress on an iteration basis

Tracer Bullet code is not Prototyping since prototypes are disposable, high-level, and highly specific. Tracer Bullets are the actual code skeleton, not abstractions, and ultimately address all the program's problems.

## Prototypes and Post-it Notes

Prototyping is a cheap way to experiment and fine-tune specific ideas. Especially ones with risk or uncertainty, which lets you try them out without committing to the real thing. They're best when you can afford to ignore otherwise important details to focus on just a few questions. Answering them early in the cycle can save tons of time, money, and pain.

Prototypes are made of cheap materials like:

* Post-it notes for dynamic things like workflows and logic
* Whiteboards for user interfaces
* Paint programs or interface builders for nonfunctional mock-ups
* If you use a programming language, use a very high-level one and/or frameworks

Prototypes are about broader lessons, not producing code. Don't worry if it's correct, complete, detailed, or stylized. Make sure everyone understands any code written is disposable.

### Common Things to Prototype

* Architectures
* Adding new functionality to existing systems
* Structure/contents of external data
* Third-party code
* User interfaces and other UI design

## Domain Languages

Use the language of the problem in the code, since it can help you better find a solution. This can be as simple as basing the names and logic flow off how the problem is described since it's easier to read and understand. This often requires higher levels of abstraction, which lets you focus on the problem and less on how it's implemented. It may take more time but is usually worth it in the long run.

## Estimating

Knowing what goes into giving a good estimate lets you intuitively know how long/tough adding something will be and if it's practical, which is a useful skill.

First, know the context of the estimate and how accurate they need it to be. Their reason for asking can help inform this. For example, a less urgent reason doesn't usually need a high-accuracy estimate. That or the importance of the person or company asking.

Know the units you give the estimate with the matter. The smaller the time unit you use (days compared to months), the less wiggle room people will likely give you.

### Ways to Build an Estimate

1. Ask someone who already did it (and how).
2. Ask for more details about the problem. Are your assumptions about how it will go correct? What's the scope?
3. Build a bare-bones model of the system. Find the factors that'll affect the time. See if there are underlying patterns in the model, as those could wildly change the estimate and requirements. Know when to stop refining the details since it won't help your accuracy after a certain point.
4. Break the model into mathematical components. Do they add or multiply the time, or affect it another way? See which ones affect things the most.
5. Get numbers for each parameter. Focus on the most important ones first. Get some real-world data to base them off of if you can.
6. Run the numbers. Do it a few times for different situations to get a range of times. Remember the parameters you adjusted for when giving the estimate. If you get weird answers, it could mean the problem is weirder than you expected.

Afterward, record your estimates and compare them to how long it takes. See where you were right and wrong, and learn from it.

You can also adjust estimates as you go, working on the project in increments. The experience gives you a better sense of how long each part will take, how much risk is involved, or even how many iterations are needed. Management may not like this, so let them know it's often the most accurate and productive approach.

### The Best Answer for Giving an Estimate

**"I'll get back to you."**

Devoting extra time to the estimate always brings better results. Estimates given right away before you build experience with them can bite you hard.
