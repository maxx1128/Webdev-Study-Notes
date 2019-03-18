# Algorithms to Live By

## Optimal Stopping

## Explore/Exploit

Explore/Exploit refers to the struggle of balancing the number of new things to try (explore, or _gathering information_) and the number of tried-and-true things to stick with (exploit, or _using information_).

A key factor in how this balance shifts is time. The more time you have to be making certain decisions, the more you should explore - the less time you have, the more you should exploit. Someone new in a city will try lots of different restaurants (explore), and someone leaving will stick the ones they like most (exploit). This also works in reverse - lots of movie sequels exploiting an existing fan base shows that film producers believe they, or the industry itself, will be gone soon.

### Strategies

A rough but somewhat reliable strategy is **Win-Stay, Lose-Shift.** Keep exploiting something as long as it wins, and explore another option when it fails. The downside is leaving after one failure makes it harder to exploit options that may be better than they appear, and is a harsh penalty for just one loss.

Another perspective for deciding explore/exploit is finding one that minimizes regret. Regret as a whole will steadily increase through all our lives, but making the right choices will make it a low increase. A good way to do this is approaching choices assuming a positive outcome unless experience and data proves otherwise. The CS equivalent of this is the **Upper Confidence Bound Algorithm.**

There's **A/B Testing,** an online trick of giving half of web traffic one potential page, and the other half a different page. The responses are then compared, and the one with the best results is judged the winner. This helps companies explore many options at once (they can divide traffic among more than two potential pages), and then know which ones are the best exploit.

The biggest rule of thumb is simple: the more time you have (in a location or in life itself), the more you gain from exploring. But the less time you have, the more you should exploit what you know has the best returns.

## Sorting

## Caching

Caching is basically taking the most-used items in memory and making them immediately available. There are books you may read much more than others, so you keep them by your nightstand. The other books you hardly read are on your bookshelf in the other room. The books on your nightstand are in your "cache" in this analogy, since they're much more easily accessible. Compared to longer-term storage, cache items can be accessed much faster but have more limited space.

Cache can have various levels too, going between the highest level (can access in a second), to lower levels where it takes increasing time and effort to find them (your bookshelf, your closet, your long-term storage, etc).

### Knowing what to Keep in Your Cache

Cache space is at a premium, an inevitably it fills and we must decide what to keep and remove from our "cache," whatever form it takes. There's several algorithms to try for doing this.

* **Belady's Algorithm** informs the decision based on future data. This is almost always impossible, so we're just try to get something close to this.
* **Random Eviction** removes old cache data at random. Works better than you'd expect.
* **First-in, First-Out (FIFO)** removes cache data that's been there the longest ("how long have I had this?").
* **Least Recently Used (LRU)** remove cache data that's been untouched the longest ("when did I last use this?"). This one is usually the clear winner.

As for what items to add to your cache, it's usually best to just add the last item you've used. Using it once increases the likelihood of using it again, so statistically it's a safe bet.

### Practical Caching Tricks

* Use the LRU principle when cleaning out your closet, or doing any kind of tidying or reorganizing.
* The more important something is in your cache, the closer it should be. Books you always read in the highest cache level should be as close as possible to your typical reading areas.
  * For clothes you're wearing next, consider putting a valet stand by your bed.
* When finding items among a collection, like a stack of paper, put it back at the very start. This coincides with the rule of "use it once, likely use it again," and with LRU since items you've used less with move further down the pile to reflect their lower priority.

Lastly, know that with all types of memory, whether in our cache or long-term storage, size will always decrease speed. The more we live, the more memories and knowledge we have to store, the slower our minds will retrieve them. Slower mental function may have less to do with old age making us rusty, and more with just having to navigate so much more information. Therefore, our mental organization is more important than mental storage.

So if your mind is starting to lag, that's a testament to how much you know. And avoiding this lag means keeping a well-organized cache going off the LRU principle.

## Scheduling

## Baye's Rule

## Overfitting

Overfitting is the problem when people think too much, trying to sort through and balance too many variables. Sometimes the smart move is to think less.

### Balancing Complexity

When calculating a model, using too few factors is overly-simplistic and doesn't give good predictions. But using too many factors, while making the model more accurate, is bad for predictions since it's too sensitive to sudden variations or unusual data points.

Overly-sensitive data models can't be reliably used for predictions, since it's easier for different/smaller/irrelevant factors to throw it off. It's fit too snugly into the existing data, hence _overfitting_.

Hence, getting a moderate amount of important variables for a model has a better mix of accuracy and applicability.

### Too Much of a Good Thing

Real-world examples of overfitting are usually getting "too much of a good thing." Data can be like fast food - getting far too much can move from being good for us to bad for us. In the quest to appeal to that specific metric of "fat tastes good," appealing to it too specifically can turn it bad when you loose track of the larger picture. It's the same way an algorithm is so focused on specific metrics, it loses track of the larger goal of capturing the data's essence.

Optimization seems good, but optimizing the wrong thing can backfire badly.

### Cross-Validation

One way to fight overfitting is cross-validation, or taking a few random subjects and using a different but still useful measure. A food-related example would be not just measuring by how much fatty foods one eats, but then testing other measures of health like weight, muscle mass, endurance, etc. These cross-valdiation tests set off alarms of overfitting taking place. If someone is nailing the fatty food metrics, but the cross-validation tests reveal their health is decreasing, it's a sign of bad or too-specific metrics.

Another example: if you measure employee performance by the number of deals they close, cross-validate them with randomly timed tests of their division's profits or customer satisfaction. High numbers of closed deals with low profits or customer satisfaction means they're overfitting their work to the metrics, not the goal of business success.

### Regularization

Regularization is how overfitting is tamed - it adds penalties for when data or processes get too complex, so they must be as simple as possible. Any remaining complexities must do a lot better justifying why they're there, helping them stay on track of the original, essential goal.

Think of the words we use - penalties for overly complex language are longer speech time and are more likely to lose the listener's attention. So speech should be as concise as possible, and any tough words need a real good reason to be there.

This shows an upside of having mental "rules of thumb," or hueristics. They're based more on principles than specific data, making them far less vulnerable to overfitting.

### When to Think Less

Sometimes spending more time on a task is counter-productive, since you wind up overthinking it and therefore overfitting it.

A good rule of thumb: the less you know about your specific data and what the final goals should be, the simpler and shorter your thinking should be. In other words, **the less you can predict, the simpler you should try to be.** As one example in the book states, when in the idea face sketch things out with a thick marker instead of a ballpoint pen.

### Advice

* If something seems too good to be true, be cautious in case it's an example of overfitting. Stay healthily skeptical.
* Don't get so caught up in specific metrics or incentives that you lose track of the larger goal. Don't be so focused on a few techniques in a sports game that you lose track of the larger goals - to win and have fun!
* Act more on history than current fads. Information travels fast now, makes fads rise and fall much faster, making us more vulnerable to short-term overfitting. Be more conservative with sudden culture changes, as the ones that fit better into our essential "models" will stick around longer and be worth adapting.
* In uncertain and complex situations, it's often wiser to just go with your gut instinct.

## Relaxation

"Relaxing" a problem means accepting that finding a perfect or near-perfect solution is impossible. There are several ways to loosen, or "relax," the constraints to quickly find an answer that, while imperfect, is much better than going rotely calculating each possibility.

Relaxation cannot give a perfect answer, but the tradeoffs are well worth it. You'll likely find an answer that's 50% better than nothing in less than 1% of the time it'd have taken to get there with brute force.

* **Constraint Relaxation:** Remove some of the problem's limits, solve the easier version, and use this answer as a starting off point for solving the more difficult version. This can involve removing certain conditions, such as allowing yourself to freely retrace your steps in a problem of finding the shortest path.
* **Continuous Relaxation:** Allow yourself to come up with solutions that resolve to fractions or decimals where they wouldn't be allowed (such as inviting 0.6 of a person instead of all of them). You can then use rounding or measured random selection to resolve them back to whole numbers.
* **Langrarian Relaxation:** Reframe the limits of a problem from "it's impossible to do X" to "you can do X but with Y consequences." Find ways to measure the costs of breaking rules by certain amounts, and look for solutions that break them within those measures.

Relaxations give several perks:

* They set you see the absolute limits of the "best" solution, so you see where the limits are when you pursue a realistic one.
* Their solutions are designed to be unrealistic at first, but then be resolved back into reality in different ways.
* They help us stop strive for impossible perfection and instead focus on making actual progress.

## Randomness

## Networking

## Game Theory

## Resources

* [Algorithms to Live By](https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1627790365)
