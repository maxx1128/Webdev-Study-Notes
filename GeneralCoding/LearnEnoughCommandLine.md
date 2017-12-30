* Title: [Learn Enough Command Line to be Dangerous](https://www.learnenough.com/command-line-tutorial)
* Author: Michael Hartl
* Publisher: LearnEnough.org

### Pipes

Pipes are used to direct the output of one command into another.

For example, you can run a `grep` to get a list of times a string appears in a file. Then you can pipe those results into another command to organize or filter them. Multiple pipes can be used at once in this way.

A useful command with a pipe is `ps aux | grep <string>`, which shows all the processes that contain a specific string. See more info about it in **Killing a Process** below.

## Useful Commands

### grep

* By default, it looks for a substring in an entire file - `grep "string" file.txt`
* Normally is case sensitive, can be made case-insensitive with the `-i` argument - `grep -i "STRING" file.txt`
* It can also be used to look for a string through all files in a directory - `grep -r "string" dir/`

`grep` is often combined with a pipe to organize the results. Some useful ones are:

* `uniq` to remove any duplicate instances
* `sort` to rearrange the results, by default in alphabetical order
* `more/less` to view all results one one page at a time (press `q` to exit)

### sed

`sed` [manipulates text](https://www.linode.com/docs/tools-reference/tools/manipulate-text-from-the-command-line-with-sed/) in files without need a text editor, often through regular expressions.

* `sed s/<string_1>/<string_2>/ <path_to_file>` replaces the first instance of `string_1` with `string_2`, all in the file.
* `sed s/<string_1>/<string_2>/g <path_to_file>` does the same as above, but the `g` tag replaces all of them.
* `sed -ie s/<string_1>/<string_2>/g <path_to_file>` does the same as above, but the `-ie` tag actually replaces the instances in the file.
* `sed '11,$ d' <path_to_file>` deletes all lines in a file after line 11. `11,$` is what targets from line 11 to the rest of the file.
* `sed '/#.*/ d' <path_to_file>` deletes all text after a `#` symbol, so is good for removing comments from Ruby code.

### awk

`awk` is a command for processing text files. It usually is set up like this:

```
awk '/<string_1>/ {<actions>}' <file_name>
```

The `awk` [command processes the file line by line](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples). By default, it looks for all lines that have `string_1` in them. The ones that match will have the `actions` executed on them, which can be MANY things (the default is just printing the entire record). It does all this in the `file_name` that's been targeted.

A [working example](https://quickleft.com/blog/command-line-tutorials-sed-awk/) is `awk '/root/ {print $1, $9;}' temp.txt`. It looks for all lines in the text file with `root` in them, and prints the first and ninth words in each line. Each line's word is counted as a record, and the `$` are the "fields" that can identify specific records. In this case it looks for records 1 and 9, written as fields `$1` and `$9`.

> You don't need to include <string> at all if you don't need to. Writing it as `awk '{print $1, $9;}' temp.txt` prints the noted fields **for every line.**

However it can also have much simpler uses with the defaults. If you want to **show all lines that contain a specific string,** you can use `awk '/<string>/' <file_name>`. If you want to print only the first word in each matching line, you would use `awk '/<string>/ {print $1;}' <file_name>`.

You can also use more complex logic here. If you know field three has an integer, and you only want ones larger than 10, you could use `awk '{if ($3 > 10) print "Matches the condition: ", $1;}' <file_name>`. This only prints field one for ones where field three matches the condition. It also adds custom text to the `print` statement by using double quotes.

`awk` also has `BEGIN` and `END`, which denote code that will run before or after each file's line is run. An example from the above link using this shows it can even do basic calculations, like so:

```
awk '/gold/ {ounces += $2} END {print "value = $" 425*ounces}' coins.txt
```

1. This looks for all lines with the word "gold" in them
2. It takes the number of ounces shown in each line, which is in field two or `$2`, and adds them to an `ounces` variable
3. After doing this for all lines in the file, it calculates the final value based on the total ounces from each record.

If you wanted to add a `BEGIN` function to this, it'd look like this:

```
awk BEGIN {print "Runs first!"} '/gold/ {ounces += $2} END {print "value = $" 425*ounces}' coins.txt
```

`awk` also has several pre-defined variables to use:

* `NR` is the number of lines in a file that match the search
* `NF` is the number of fields in a line

### Killing a Process

This is useful if trying to run something locally but it can't start since it's already started or the needed port is in use.

* `ps aux` shows all active processes. The second column holds a number that is the process's PID.
* `ps aux | grep <string>` will show all processes that contain a specific string or number. Great for narrowing down a long list.
* `kill -9 <PID>` will kill the process with the matching PID
