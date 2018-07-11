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

```
testfunction() {
  echo "Parameter #1 is $1"
}

testfunction foo!
// "Parameter #1 is $foo!"
```
