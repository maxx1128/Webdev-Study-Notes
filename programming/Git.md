# Git

Using one of the most popular version control systems.

## Commands

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

### `git show <commit>`

Show the basic metadata of a commit and all the included changes. Just good for seeing what happened in a specific commit.

### `git reset`

* `git reset HEAD --` removes all staged file changes, but keeps them as unchanged.
* `git reset --soft <commit>` will take all the commits after the inputted one and undo them. All changes from those commits will be kept and staged. Great for when you accidentally make commits to the wrong branch!
* `git reset @{u} --hard` will reset your local branch to match the remote one exactly. This removes **all** changes and commits on your local branch, so don't use it carelessly.

### `git checkout -f`

If you need to forcibly clear out all changes in the working directory, run this command. Be warned that they'll be gone for good, short of a `reflog` retrieval.

### `git pull`

If there's any extra commits on the remote repo you don't have locally, it pulls them down and applies them locally.

If there's a lot of changes that you're worried could conflict with changes you've made locally, `git fetch` downloads the new commits without applying them to your local code.

### `git branch`

Create a branch to add commits and new changes, and later merge them into the main branch. This is a great way to add changes freely without affecting a live, or fully accepted, version of the site. You can create a branch off an existing one by:

* Checking out the main branch with `git co <branch_name>`
* Then check out a new branch with `git co -b <new_branch_name>`
* Make commits as desired
* Checkout the main branch again
* Merge the new branch into this one with `git merge <new_branch_name>`

If you no longer need or want this branch, you can use `git branch -d <branch_name>` to remove it locally. To remove the branch on a remote repo, you'll need to also run `git push <remote_repo> --delete <branch_name>`.

#### Sort through lots of branches

`git branch` returns a list of all branches. Some repos will have lots of branches, making finding a specific branch a chore. A good way around this is running `git branch | grep <string>`. This returns a list of branches that contain that string, making it much easier to narrow them down!

**Pull Requests** are basically people proposing merging a branch into another one. People can look over all the changes, give feedback, request changes, check tests, and later merge the branch.

### `git diff`

Shows the changes between the last commit and all untracked changes. Also visualizes whether these changes were adding or reducing code.

* `git diff --staged` is the same, but instead for all *tracked* changes
* `git diff <commit_id> HEAD` shows all changes between the **end of the selected commit** and a current state
    - So to find the different between HEAD and a commit, use the ID of the commit before that one

### `git status`

Show all current untracked and unstaged changes, and all tracked and staged changes as well. Great for making sense of large amounts of changes made without a commit.

### `git log`

Shows a record of all the commits in a repo. Each entry includes the name, date, commit hash, and other basic meta data.

* To show the history of a specific file, use `git log -- <path/to/file>`

### `git reflog`

Shows a record of all the commands run for this repo. You can get the ID from any of these and go back. It's basically the "catch all, end all" reset if needed. Accidentally lose changes? Use the reflog to get them before they were lost, stash them somewhere, and keep going.

### `git mv`

Tracks the renaming of a file in version control. Renaming it by hand can confuse git's tracking (especially if also naming it at same time), so using `git mv` is a safer bet.

Also when renaming files, unless the renaming breaks something else in the repo, it's best to keep those changes in a separate commit.

### `git ls-files`

Shows all files in the directory, but limited to ones tracked by git. Can be combined with `grep` as a way to filter through files in the repo.

### `git stash`

Takes all untracked changes and "stashes" them away, which mbasically means temporarily removing them. Good for quick operations that can't have untracked files while doing them, like needing to quickly check out a new branch before committing changes in a current one.

* `git stash` will automatically do this for all untracked changes.
* `git stash list` shows a lit of all stashed changes, labelled by the branch they're on and that branch's most recent commit. Each one has a name in this format: `stash@{#}`, with `#` being a basic reference number.
* `git stash apply <name>` applies the stashed changes to the current files. If it's the most recent stashed changes under `stash@{0}`, the `<name>` argument isn't needed. Unclean file additions results in merge conflicts you'll need to resolve.
* `git stash pop <name>` does the same as the above, but removes the stash from the list afterward.
* `git stash drop <name>` just removes a stash from the list.

### Rebasing

Rebasing it taking a branch that may start from the an older commit of the main branch, and copying them all over to the most recent commit of that branch.

* Make sure you pull the most recent version of the branch you're rebasing on first!
* When pushing a rebase, do so with `git push --force`. Rebasing is essentially remaking all the same commits again and overwriting the old ones. To avoid possible conflicts with what others may have pushed, use `git push --force-with-lease`
* Run `git rebase -i <branch>` for an interactive rebase. This lets you see all the commits to be recommitted on top of the branch and make certain changes. Useful ones include:
    - Editing changes in a commit
    - Squashing commits into each other. If two or more commits are similar enough to be considered the same, they can be combined into a single one. For example, lots of different commits that all just change the CSS of a single component.

#### Rebasing onto a new branch

The above command only works if you're rebasing on the same command as before. If you want to rebase onto a different branch, use the `--onto` argument.

```
git rebase < current_parent_branch > --onto < new_parent_branch >
```

All the current branches commit will be placed on top of the new branch, and any conflicts will be solved like any other git rebase.

#### Rebasing - using fixup to autosquash commits

Some commits may be made [solely to be squashed into other ones later on](https://robots.thoughtbot.com/autosquashing-git-commits). This can be simplified by making them as `fixup` commits. These are commits marked specifically to be squashed, and will automatically do so during a rebase.

* First, track all wanted changes.
* Run `git commit --fixup <commitID>` for the commit, with `commitID` being the ID of the commit you want it to be squashed into.
* The changes will be committed with the same message as the commit you chose, but with the works "fixup!" prepended on it.
* Run a git rebase with `git rebase -i -autosquash [branch]`. All the fixup commits will be moved to the proper place, and when you run the rebase, will be merged automatically.

To set rebases to autosquash by default, run `git config --global rebase.autosquash true`.

To quickly find a recent commit when running the `--fixup` option, you can tell get to find the most recent commit with a certain string. This command would be `git commit --fixup :/[string]`/ Only use this when you know that git will find the commit you're thinking of when starting from the most recent ones and going to the older ones. The more unique a string you use, the more likely this is.

#### Undoing a rebase

* Run `git reflog` to find the commit right before the rebase was run, and copy its ID.
* Run `git reset --hard <commitID>` using that commit's ID bring the repo back to before the rebase.
* Run `git push --force-with-lease` to push that version of the repo to the remote, removing all the rebase changes that had been added after.

### Using a rebase to split commits

You may have bulky commits you want to split into several smaller ones, without having to rewrite the code. Rebasing lets you do this.

1. Set up an interactive rebase with `git rebase -i <master_branch>`.
2. On the interactive rebase list, change `pick` to `edit` for the commit you want to split.
3. When editing this commit, run `git reset HEAD~`. This unstages all the changes from the commit, but still tracks them.
4. Add the select code you want, commit it, and repeat until all the code has been recommitted in new commits.
5. Run `git rebase --continue`.
6. Repeat steps 3-5 for any other commits you want to split.
7. All set! Happy dance.

## Resources

* [Learn Enough Git to be Dangerous](https://www.learnenough.com/git-tutorial)
