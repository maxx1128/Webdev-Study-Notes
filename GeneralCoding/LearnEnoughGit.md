* Title: [Learn Enough Git to be Dangerous](https://www.learnenough.com/git-tutorial)
* Author: Michael Hartl
* Publisher: LearnEnough.org

### Commands

### `git add`

For adding all untracked changes for the next commit

* Know the difference between untracked and unstaged!
    - _Untracked_ is new files that haven't been added in the repo.
    - _Unstaged_ is for specific changes made to tracked files. Once a file is tracked, changes made them then are unstaged and won't be included for commits.
* `git add .` is for all untracked items and unstaged changes
* `git add --patch`, `git add -p`, will take you through each chunk of changes and decide whether to add them or not. Each hunk gives you several options
    * `y` to add this hunk and go to the next
    * `n` to skip this hunk and go to the next
    * `d` to skip this hunk and all remaining hunks
    * `s` to split this hunk into smaller ones and continue from there
    * `e` to manually edit this hunk (VIM ALERT! Use `:quit` to escape from this if needed)

### `git commit`

For taking all tracked changes and saving them as a single commit. Include the `-m` option for adding a commit message, as a parameter in quotes.

* `git commit --amend` will add any tracked changes as part of the last included commit. If the last commit was already pushed, the amend will need a force push to take on the remote repo.
* `git commit -a` commits all changes currently made in existing files.
* `git commit -am` commits all changes currently made in existing files and takes the argument for adding a message.

### `git reset`

* `git reset HEAD --` removes all staged file changes, but keeps them as unchanged.
* `git reset --soft <commit>` will take all the commits after the inputted one and undo them. All changes from those commits will be kept and staged. Great for when you accidentally make commits to the wrong branch!

### `git diff`

Shows the changes between the last commit and all untracked changes. Also visualizes whether these changes were adding or reducing code.

* `git diff --staged` is the same, but instead for all *tracked* changes.
* `git log` shows a record of all the commits in a repo
* `git reflog` shows a record of all the commands run for this repo

### `git log`

Shows a record of all the commits in a repo

* To show the history of a specific file, use `git log -- <path/to/file>`

### `git reflog`

Shows a record of all the commands run for this repo
>>>>>>> 3b2453264589bbe09beb04038c0da2fb12a1381c:LearnEnoughGit.md

### `git mv`

Tracks the renaming of a file in version control. Renaming it by hand can confuse git's tracking (especially if also naming it at same time), so using `git mv` is a safer bet.

Also when renaming files, unless the renaming breaks something else in the repo, it's best to keep those changes in a separate commit.

### `git ls-files`

Shows all files in the directory, but limited to ones tracked by git. Can be combined with `grep` as a way to filter through files in the repo.

### Rebasing

Rebasing it taking a branch that may start from the an older commit of the main branch, and copying them all over to the most recent commit of that branch.

* Make sure you pull the most recent version of the branch you're rebasing on first!
* When pushing a rebase, do so with `git push --force`. Rebasing is essentially remaking all the same commits again and overwriting the old ones. To avoid possible conflicts with what others may have pushed, use `git push --force-with-lease`
* Run `git rebase -i [branch]` for an interactive rebase. This lets you see all the commits to be recommitted on top of the branch and make certain changes. Useful ones include:
    - Editing changes in a commit
    - Squashing commits into each other. If two or more commits are similar enough to be considered the same, they can be combined into a single one. For example, lots of different commits that all just change the CSS of a single component.

#### Rebasing - using fixup to autosquash commits

Some commits may be made [solely to be squashed into other ones later on](https://robots.thoughtbot.com/autosquashing-git-commits). This can be simplified by making them as `fixup` commits. These are commits marked specifically to be squashed, and will automatically do so during a rebase.

* First, track all wanted changes.
* Run `git commit --fixup [commitID]` for the commit, with `commitID` being the ID of the commit you want it to be squashed into.
* The changes will be committed with the same message as the commit you chose, but with the works "fixup!" prepended on it.
* Run a git rebase with `git rebase -i -autosquash [branch]`. All the fixup commits will be moved to the proper place, and when you run the rebase, will be merged automatically.

To set rebases to autosquash by default, run `git config --global rebase.autosquash true`.

To quickly find a recent commit when running the `--fixup` option, you can tell get to find the most recent commit with a certain string. This command would be `git commit --fixup :/[string]`/ Only use this when you know that git will find the commit you're thinking of when starting from the most recent ones and going to the older ones. The more unique a string you use, the more likely this is.

#### Undoing a rebase

* Run `git reflog` to find the commit right before the rebase was run, and copy its ID.
* Run `git reset --hard [commitID]` using that commit's ID bring the repo back to before the rebase.
* Run `git push --force-with-lease` to push that version of the repo to the remote, removing all the rebase changes that had been added after.
