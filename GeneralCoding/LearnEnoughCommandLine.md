* Title: [Learn Enough Command Line to be Dangerous](https://www.learnenough.com/command-line-tutorial)
* Author: Michael Hartl
* Publisher: LearnEnough.org

## Useful Commands

### grep

* By default, it looks for a substring in an entire file - `grep "string" file.txt`
* Normally is case sensitive, can be made case-insensitive with the `-i` argument - `grep -i "STRING" file.txt`
* It can also be used to look for a string through all files in a directory - `grep -r "string" dir/`


### Killing a Process

This is useful if trying to run something locally but it can't start since it's already started or the needed port is in use.

* `ps aux` shows all active processes. The second column holds a number that is the process's PID.
* `ps aux | grep <string>` will show all processes that contain a specific string or number. Great for narrowing down a long list.
* `kill -9 <PID>` will kill the process with the matching PID