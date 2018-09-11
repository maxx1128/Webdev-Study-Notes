---
group: programming
layout: post

title: Bash
descr: Using Bash and the terminal for greater computer productivity
---

## Managing Aliases

An **alias** is a bash command shortcut. You run the shortcut name, and it executes the longer function you store. It's great to save and quickly use common commands.

Assuming you're using ZSH like me, here's two useful commands to add to your aliases file right now:

{% highlight script %}
alias viewali="cat ~/.oh-my-zsh/custom/aliases.zsh"
alias editali="cd ~/.oh-my-zsh/custom && vim aliases.zsh"
{% endhighlight %}

* Run `viewali` to see your alias list.
* Run `editali` to edit your alias list.

Another useful alias trick is one that can open a repo while also getting it running locally all at once. For example, here's my current alias that opens my personal site in a code editor while getting the local version up.

{% highlight script %}
alias mysite="cd ~/Documents/gatsby-blog && code . && yarn develop"
{% endhighlight %}

* First it navigates to the folder with my site's code
* Then it uses a [VSC code shortcut](./../LearningProgress/SmallWins.md#07-11-2018) to open up the repo
* Runs `yarn develop`, which is the repo's script to spin up the site

Viola! One command to get you into working mode.

## Script Files

Script files end in `*.sh`, and are used to store bash commands. Run the file, and run the command(s) in that file.

To get a script file working, you need to:

* Make sure your script is in the PATH directly, which is where most scripts should go. Run `echo $PATH` to see where it is.
* Have `#!/bin/bash` as a comment on the first line
* Run `chmod +x <filename.sh>`

Then you can just run `<filename.sh>` and run the script!

## Saving Commands with Parameters

Write a function like this in a script file, and it'll take parameters. You could write it directly in an alias file if it's short. If it's long, put it in a separate file and reference it via the alias file or the script method above.

Each parameter is referenced by it's order in the same format. First one is `$1`, second is `$2`, and so on.

{% highlight script %}
testfunction() {
  echo "Parameter #1 is $1"
}

testfunction foo!
// "Parameter #1 is $foo!"
{% endhighlight %}
