## 07-31-2018

* I abstracted the code for making my site's homepage article links into a new component. Had to look up some references since I hadn't used React in a while, but it was still pretty easy. Hooray for clean code!

## 07-30-2018

* I've started watching the Frontend Masters video on the New JavaScript Tough Parts. So far it's a walkthrough of JS's basic functions, such as Single Thread and the Call Stack, and expanding that into how asynchronous JS works. It's a more fundamental look at things, so it's much appreciated.

## 07-27-2018

* I got an RSS feed set up with my personal website using Gatbsy. There's a plugin for doing this but the defaults didn't work for my setup. Thankfully it didn't take long to adjust the GraphQL query and how it compiled to the `.xml` file, so it's now working! The main reason I did was setting up an IFTTT event so that whenever I post something new, I can automatically share it to other platforms like Twitter.
* Started adding Ember integration tests to an old repo of mine, a quiz to find what Eevee evolution the user is. It's a silly project, but as a whole it's helping my broader understanding of an Ember application. In this case, it'll be my first time writing all the tests for a larger project myself.

## 07-25-2018

* Finally got pa11y testing working on Travis! Pa11y needs a local server to run its tests, so the command comes in two parts: Starting the server in the background, and running the usual `pa11y` command. It throws an exit code at the end, which will either fail or pass Travis in the end based on the results. With this, I can prevent changes to a static site unless they meet accessibility standards. The catch is, due to the server still running, this test should be run last (and not run from the bash script locally).

```
function a11y_test {
    echo "testing accessibility"
    jekyll serve & sleep 10
    yarn test-pa11y
}
```

## 07-24-2018

* Read through [a helpful article on the JS basics needed to make the most of React.](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#react-javascript) I don't use React much, but anything to build fundamental JS skills is always appreciated. This has been moved from my "Skim" list to me "Extract Notes from" list, to get the most important bits on my repo. I even [saved an Evernote version of it as a backup reference](https://www.evernote.com/shard/s268/sh/4bc948c6-8066-4dea-90b2-ed7b46efe0c5/94a241a004e052048e9c2eb92814e65a) to be safe.
* Got lots of good notes from that article into my JavaScript folder. I also took the time to break apart some other files and create some broader JS files. Arranging things by general category, not by specific resource, makes it a lot easier to add info while keeping things organized.

## 07-23-2018

* Pushed several updates to my personal site, including a new "Notes" section. It's for musings too long (and relevant) for Twitter yet too short for a blog post. Lots of code excerpts and asides will likely go there later.

## 07-20-2018

* First time using sass lint for a project, which is set to phase out scss-lint. Thankfully there's a tool online to automatically convert the configs, so it won't be too hard. It was added to Ember which has an integration that puts it right in the test suite, so it'll be easy and effective to enforce.
* Resumed watching more of Modular Frontend and Testing on Frontend Masters. Unfortunaly they haven't touched on integration testing and it seems unlikely they will in this one...

## 07-19-2018

* Today's interesting puzzle was using a little javascript to set an iFrame's height equal to what it would be for its full content. Great for avoiding scrolling windows. The twist was having an asynchronous element in the iframe that changes the height _again_ later.
* Made some basic article components for the events page of the new NewHaven.IO site
* Finally got around to adding Sass linting to an Ember project at work. Even that's integrated into our test suite. CSS styling WILL be enforced with an iron fist.
* Got over 200 positive reactions to my recent Shell article! Always great to see people enjoying and finding a good use for things I write. As much as I write for myself, it also feels good to write for others.

## 07-17-2018

* Turns out when I updated my site's version of Gatsby, all the CSS wasn't being included. I tried to revert it, but the issue remained. I was getting frustrated to the point where I'd get nowhere, and knew I had to walk away from the problem - eventually I'd find the answer. I put my computer at my desk and walked a dozen steps before it hit me. I needed to clear the cache in the build process! I did so, my site got the previous version of Gatsby, and it looked as it should again. Good sign I can recognize when I've reached my "point of no productivity."

## 07-16-2018

* Posted an article about the Shell introduction I wish I had, and it already got some good reception. ![](./smallWinImages/shell_post_comment.png)

## 07-13-2018

* An easier way to access the DOM for Ember Integration tests is using the QUnit-dom addon. Just install it and you'll have access right away in those tests. [QUnit-dom has many useful helpers for testing the DOM, such as visibility and classes.](https://github.com/simplabs/qunit-dom/blob/master/API.md)

## 07-12-2018

* At work I wrote two new Ember components for an app and also some integration tests. The tests made sure they could have their styles modified properly, and they could pull needed values from a (stubbed) service. I really want to increase my experience with testing, so I was glad to do this right. Next time I'll do a test-driven development approach by writing the failing tests first and then building the component, see how that affects my flow.
* In other test activities, I read a few Pragmatic Programmer chapters specifically around testing. It keeps driving home how important it is, along with going into the types of testing. The clearest tip: `It ain't code until the tests are run. 'Nuff said.`
* Some big points from the `Refactor Your Wetware` chapters on learning:
  * Learning through experiments and experience is better than rote reading and memorization
  * Know to "get a feel" for a tool. Learn enough to start, play around, make some mistakes, have some questions ready, answer them in the docs, and try to make something useful
  * Also learn by teaching. It forces you to flesh out the details, find the essence of what to learn, and explain it in your own language

## 07-11-2018

* Added some notes to [Ember components](./../JavaScript/Ember/Components.md#component-extending) on how to extend them, keeping functionality drier.
* You can open Visual Studio Code from the command line! [Set it up here.](https://code.visualstudio.com/docs/setup/mac) But if there's common files and folders you keep opening and editing, this makes accessing them real easy.
* Added initial notes on [aliases in the shell.](./../Programming/bash.md#managing-aliases) The first examples are shortcuts to manage the aliases themselves, for some meta productivity.
* I haven't emphasized the small wins enough. Hence I started this file to keep a record of my small wins and a visual marker of how much progress I'm making. Visual feedback is a great motivater.

## 07-10-2018

* Starting checking out front-end testing frameworks, both integration and visual regression. Looks like TestCafe and BackstopJS are the most approachable (and free) ones to start with.
* Tested out how you can make saved commands with arguments in Bash - using a function! It can be in the aliases file, or in a separate shell file (which you can reference in alias). [Check it here](./../Programming/bash.md). I also added more general Bash notes.

## 07-08-2018

* Helped a local dev with a flexbox problem! ![](./smallWinImages/flexbox_help.png)

## 03-20-2018

* Melanie Sumner, one of the speakers at EmberConf2018, retweeted an article I wrote about the conference! ![](./smallWinImages/melanie_tweet.png)
