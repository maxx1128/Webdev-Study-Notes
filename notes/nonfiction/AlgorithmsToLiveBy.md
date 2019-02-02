---
group: nonfiction
layout: post

incomplete: true
title: Algorithms to Live By
descr: Lessons on life and decisions we can take away from computer science

resources:
  - title: Algorithms to Live By
    author: Brian Christian and Tom Griffiths
    link: https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1627790365
    publisher: Henry Holt and Company
---

## Optimal Stopping

## Explore/Exploit

## Sorting

## Caching

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

## Randomness

## Networking

## Game Theory
