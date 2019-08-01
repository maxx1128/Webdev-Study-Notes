# Pragmatic Thinking and Learning

## From Novice to Expert

Experts have built up enough knowledge and experience that they often intuitively know the correct way to do something, and it's hard for them to explain why. Meanwhile novices need precise, step-by-step instructions for doing specific tasks. This is the fundamental difference between the two, and shades of this are seen in the Dreyfus Model of expertise.

### The Dreyfus Model

#### 1. Novice

Novices aren't sure what success looks like, so they need specific steps to accomplish a specific task.

They don't respond well to unexpected events, and function best with "recipes" or decision trees that give context-free rules. The major limit here is you can only specify so much context, so rules only carry one so far.

#### 2. Advanced Beginner

Advanced beginners still can't troubleshoot too well, but start doing more work on their own. They often look up information fast to expand their knowledge, already knowing the basics. They begin forming principles but nothing too large in scale. The big picture still seems unimportant.

#### 3. Competent

Troubleshooting and novel solutions happen more easily in this stage, and can apply more expert advice. They know how to better recognize problems and will seek them out, and know what details to focus on. They're seen as "resourceful" but not often in leadership roles, and get along well with both mentoring novices and dealing with experts.

#### 4. Proficient

Proficient coders actively seek the big picture and dislike oversimplified tasks and info. They can also self-correct their poor performance, revising past approaches and learning from others' experiences. They know the contexts to apply larger rules of thumbs to solve problems, such as knowing what parts of a program to test, or applying design patterns. They can predict how things will go, and if things go differently they still know what changes to make.

Coders at this stage are finally a good fit for Agile methodology. Don't assume ones at earlier levels will be.

#### 5. Expert

Experts (about 1% to 5% of the population, so not many) continually look for better methods and approaches. They intuitively know what info/experience to tap into and are often thought leaders. This reliance on context-dependent intuition lets them make the work look like magic, but also makes them bad at guiding less experienced coders.

Experts work best when let loose without rules, letting their intuition guide them. Restricting them is a bad idea.

Pay-scale or career ladder limits often drive a company's experts away. Avoid the knee-jerk urge to treat them like other employees if their expertise provides more value to the company, since it's much worse to lose them.

### Moving Up the Model

The higher one gets on the model, the more self-doubt and awareness of lacking knowledge one tends to show. Moving up means being aware of what you don't know and seeking it out.

Mimicing the behavior and knowledge of those higher up also helps a lot. Learn by example.

Avoid relying too much on tools, frameworks, and formal methods to boost your expertise. They're tools, not actual measures of one's skill - acting like training wheels that may have false authority as "the only bike you'll need." Reality is always more complex and these nuances must be remembered. Keep these related tidbits in mind:

* The tool won't always reflect reality, so don't get too attached to it
* Value traits that can't be easily formalized, like problem-solving
* Don't rely or encourage herd behavior
* Don't oversimplify complex situations. It's never "all you need to do is X" since context always adds complexity
* Remember that objectivity without context doesn't exist

### Balancing Skill Levels

The more of a novice one is, the better they work with rules, considering all factors, and being a detatched observer.

The more of an expert one is, the better they work with their intuition, applying relevant focus only, and being actively involved in the system.

Workplaces should also try to balance out these roles, not seeking to have all of one or the other. Experts looking at the whole forest need beginners focusing on the trees, and vice versa.

## Get in Your Right Mind

Using multiple senses activates more of your brain's processing power. This can be verbal discussion, fiddling with different objects, walking around, etc. Going somewhere new to feed your mind new stimuli also helps.

### R-Mode and L-Mode

The brain has two basic modes, L-Mode and R-Mode. Effective learning finds ways to make use of both of them.

| Linear Mode, L-Mode | Rich Mode, R-Mode |
| ------------------- |-------------------|
| Verbal processing | Sensory Processing |
| Symbols and abstractions | Rich detail |
| Logic | Intuition |
| Directly controlled | Not controlled |
| Synchronous | Asynchronous |
| Remembers little but organizes it well | Remembers virtually everything without organization |
| Inner voice he always hear talking | Background voice we never hear |
| Conscious problem-solving | Unconscious problem-solving |

A good trick for making them work together is a flow that **leads with R-Mode and follows with L-Mode.** A snappier version is "Write Drink, Revise Sober." Give yourself free creative reign in the start, then go back and edit the results into order.

The author gives rock-climbing as an example. The instructor set up their safety equipment and told them to climb on their own for thirty minutes. Everyone explored the rock walls on their own and got some direct experience. Afterwards the instructor came back and began giving them the usual advice on how to climb walls. With the information their R-mode had gathering in the safe, free-form exploring, information delived to their L-Mode made more sense since it had more context.

Another example is, when learning a foreign language, simply being exposed to lots of examples of the language with no context in the dark. This was the R-mode, and they then switched to L-Mode lecturing to prioritize and organize everything it'd gathered.

Pair Programming also works on balancing these modes. The driver writing code is working in L-Mode, and the navigator watching them and looking at the larger scope is in R-Mode.

Another way to balance these modes is thinking in metaphor, or creating understanding through unlikely associations. This also holds true with humor.

### Harness R-Mode Cues

Our R-Mode is always working and remembering in the background, and often already has the answers or ideas we're looking for. Accessing them is a challenge. It's not verbal and linguistic like the L-Mode, so they can rarely be put into words, so other methods are needed.

One way is image streaming, or asking yourself a question, closing your eyes, and closely observing any images that cross your imagination with as many senses as possible. Interpreting them is a potential way to see what your R-Mode is trying to tell you without words.

Another way is free-form journaling, or writing out a pure stream of consciousness on a daily basis. This works best first thing in a morning, since your unconscious is more active and you get an unfiltered look at your thoughts. Or you can gather interesting ideas for writing as you think of them throughout the day and pick them back up again when it's time to flesh something out. Always carry something you can record these gems on.

Going for a walk outside invites your R-Mode to process more and bring more of those ideas to the surface. Be sure not to directly think of what you want to solve, simply bear it in mind as you walk. Writing all your thoughts down in a mental dump beforehand can help clear your mind.

### Using Patterns in Code

Code is read many more times than it is written, so using patterns to make things more readable by humans has a lot of return value. This is the case for spacing variable declarations like this:

```javascript
const person = 'Fred',
      age    = 9;
```

These patterns take different forms to many people, so consistency and explaination are key.

If you have a hard time seeing or escaping certain patterns, try to turn your thinking around. Deliberately turn the meaning, intent, or quality on its head to see it in as different a light as possible. For example, debug something by thinking of several ways you could purposefully cause it. Other approaches are:

* Look at it in reverse
* Exaggerate an idea
* Combine disparate ideas
* Imagine something crazy
* Don't assume there's only one right answer
* Don't dismiss something as illogical
* Don't dismiss "playing with an idea" as frivolous
* Rearrange the pieces or elements in new ways to see new relationships

A way to push yourself out of mental ruts in general is to rearrange common life routines. Change the order or timing of common tasks to keep your mental wiring flexible and strong.

## Learn Deliberately

It's not learning specific tools and languages that counts - it's the constant learning. Intensive training in one thing for a few days fails since learning is something one has to do, it takes experience, and needs goals and feedback.

### Set SMART Goals

Lofty, unspecific goals don't do much to get one there. Hone in on specifics with SMART goals so you're more likely to reach them.

* **Specific** - The goal should be concrete, not vague, so you know _exactly_ what it is.
* **Measurable** - You should know exactly when you're done, and measure how much closer each incremental step brings you.
* **Achievable** - Make each goal realistic to achieve from where you are now.
* **Relevant** - Choose goals that are important to you, are passionate about, and are under your control.
* **Time-boxed** - Give yourself a deadline so the goal isn't forgotten. Set small milestones along the way to stay motivated.

Don't forget the larger context of goals. A goal that sacrifices too much long-term health for a short-term benefit, or vice versa, isn't worth it.

### Have a Pragmatic Investment Plan, or PIP

Treat your knowledge portfolio of skills and information with as much care as a financial portfolio. Don't relegate it to "I'll learn in my spare time." Actively and deliberately allocate time to your learning. Make sure your PIP meets the following needs:

#### Have a Concrete Plan

Set short and long-term plans in whatever time frame works best for you. Use SMART goals for a range of goals from small objectives (buy and read a certain book) to larger ones (do X in a new coding language, write articles, speak at a conference, etc).

The planning part matters more since it brings you more in tune with your goals.

#### Diversify

Get a good mix of languages, environments, techniques, soft skills, and even non-technical interests. Don't put all your eggs in one basket.

Consider the risk vs. reward ratio, but remember all knowledge investments have some value (even if it's not direct). Remember spending more time on something doesn't automatically bring value.

#### Active, Not Passive, Investment

Keep evaluating your plan and getting feedback, realistically seeing how it's going. Are you getting the expected results? Keep track of what's happening in the industry, and add and remove plans as needed.

#### Regular Investments

The financial version of this is _dollar-cost averaging._ You'll sometimes invest too much or little, getting varied returns along the way. In the long-term these even out and lead to a good investment.

The takeaway is committing to minimum, regular investments. Set a ritual and schedule them regularly. Don't just wait for "extra time" for it to pop up.

Plan your invest and what you'll be doing beforehand, so when the time comes you can get right to it. Buy or download what you need, get a rough plan together for what to build, etc.

### Find Your Learning Mode

* **Visual** - See the material. Videos, pictures, graphs, etc.
* **Auditory** - Hear the material. Lectures, podcasts, seminars, etc.
* **Kinesthetic** - learn by moving and touching. Physical experience and learning by doing or crafting.

### Enhanced Learning Techniques

#### Reading with SQ3R

Reading is actually one of the least efficient learning methods, but is also one of the most common. It can be improved with the SQ3R method which follows these steps:

* **Scan** - Scan the table of contents, summaries, chapter headers, images, etc.
* **Question** - As you scan, keep of list of questions you have.
* **Read** - Read the whole book.
* **Recite** - Summarize and take your own notes. Try to do this during your first full read through.
  * Play with the info in different ways if it helps you remember. Put it in different formats or make something silly with it.
* **Review** - Later on, reread the book and your notes. Expand on your notes and discuss it with others.
  * Just rereading them doesn't help much. Try to quiz and test yourself on the info too.

#### Mind Maps

Mind maps are visual outlines of information that have many different topic nodes connected to a base root (do a Google search of what this looks like). They help since they emphasize the relationships between data and ideas, which greatly reinforces learning and understanding. It also gives many opportunities for creativity in colors, symbols, and doodling that makes it more fun to read and adds spatial cues to reinforce knowledge.

This is one of the best ways to simply "play" with the info without trying too hard to understand it perfect. A great fit when you're unsure of what a piece of content will teach you.

Drawing the mind map by hand helps greatly, especially for solo learning. Redrawing a messier first version to a more-organized second one also helps since it reinforces the associations. This is the same for any transcription of "raw notes" to cleaner, better edited notes.

#### Documenting over Documentation

Writing notes helps retain info even if you never read them again. Writing notes or taking screencasts are good ways to manage this. Either way, the note-taking process better engages and prepares the mind.

#### Teaching

Teaching to learn can take many forms. Explain something you're trying to understand to a rubber duck, a surrogate for someone who has no insider knowledge of your field. Talks and blog posts are also good options which also share knowledge with others.

## Gain Experience

"Learning by doing" is the best approach, but it takes extra care to learn as much as possible from the doing.

### Play to Learn

Shoveling in knowledge in the hopes of using it later doesn't work. Build on existing mental models or frames of thought you already have by "playing" with the material itself. For example, the Logo language built on children's existing experience of walking and turning by letting them program a turtle to walk around and make turns. However you learn the material, take existing experiences and use them to think of ways to play with the tools or concepts you want to learn. For example, I strengthened my Ruby knowledge by combining it with a love of anime and making a small program to scrape and gather anime images.

This requires more self-direction and will lead to more mistakes, but still adds up to good feedback and better retention. Having fun during the process is good and encouraged. Fun helps us get through the tough parts better and keep a healthy level of challenge.

### Leverage Existing Knowledge

When facing new and difficult challenges, try these approaches:

* Break the problem down into small bites to tackle on their own
* Look for similarities in other solutions you've done or are aware of
  * Don't stick to the old approach too much - learn from the differences
  * Make sure they're similar enough to be comparable

### Embed Failing in Practice

Debugging is solving problems we made ourselves. The value comes in learning from the error and understanding how to fix it. Start with "I don't know" and go from there.

As long as you get it right the final time, it's fine to fail however much you need to in the start. That's a key part of exploring new info.

This works only in an exploratory environment, which has a few requirements:

* You're free to try different approaches for the same result (unit tests)
* You can get back a stable state (version control)
* Don't focus too much on the setup or other trivial code (automation)
* Show progress and get feedback

### Learn the Inner Game

We learn best by discovery (without words) instead of instruction. This often requires sensory exploration and real-time feedback. The author gives an example of an instructor who taught a women tennis in 20 minutes simply by having them observe the tennis ball's motions in various ways, and noting where they hit the ball relative to a chair.

For real-time, or situational, feedback, focus on a simple feedback loop like "hitting the ball X makes it land Y," etc. It's a quick and tight loop that encourages lots of discovery. All this focuses on the brain's R-Mode by using awareness without instruction that's relaxed and without criticism. Awareness without judgement, making an adjustment, trying again, repeat.

This works for programming by stepping away from problems or bugs and simply building our awareness of them without overthinking. Don't narrow in on why something isn't working - breathe deeply, take your hands off the keyboard, and raise your awareness and perspective. Look away from the code for a while if need be.

The core of the inner game is focusing on a feedback loop to grow experience, so learn how to listen properly.

### Pressure Kills Cognition

Too much panic or anxiety about learning just right shuts down the mind and ironically makes it harder to learn. Specifically the R-Mode shuts down so the L-Mode can go into overdrive, which removes all the needed benefits it brings. Giving yourself permission to fail makes you less likely to since it eases the stress on the brain.

If this can't be possible at all times, creating "failure allowed" zones like brainstorming sessions, prototypes, and test environments helps.

### Imagination Overrides Senses

The brain has a hard time distinguishing between real and imagined input sources. So imagining scenarios where you achieve success can help you achieve it in real life (yes, the book admits this sounds silly). Visualizing yourself surrounded by successful people has the same effect as actually being surrounded by them, making use of your mind's natural mimicking tendencies and becoming smarter.

Imagining and visualizing writing good code can have the same effect. It scaffolds on your existing skills to boost them. You can even imagine deliberately tougher experiences so the real ones feel easier by comparison.

## Manage Focus

* Increase focus and attention
* Defocus to focus
* manage knowledge
* optimize current context
* Manage interruptions deliberately
* Keep big enough context

## Resources

* [Pragmatic Thinking and Learning](https://www.amazon.com/Pragmatic-Thinking-Learning-Refactor-Programmers/dp/1934356050)
