# VS Code Shortcuts

Keyboard shortcuts for efficient Visual Studio Code use

### General Operations

* `Cmnd Shft R` - Bring up the command palette. You can search all possible tasks, and see any keyboard shortcuts for said tasks too

### Sidebar

* `Cmnd Shft F` - Search all project folders

* `Cmnd Shft E` - Show Explorer bar. If it's already visible, toggle focus between it and code
* `Cmnd Down` - Open selected file when navigating files on the Explorer Bar

* `Cntrl Shft G` - Show Source Control bar. If it's already visible, toggle focus between it and code

* `Cntrl Shft X` - Show Marketplace bar. If it's already visible, toggle focus between it and code

* ``Cntrl ` ``, `Cmnd J` - Toggle visibility of integrated terminal

### Navigating Files

* `Cmnd P` - Search for file by file name in entire repository. Can include file path, and the line in the file by adding `:<line_number>` at the end
* `Cmnd G` - Go to a specific line in a file
* `Cmnd F` - Search for string or regex within file

* `Cmnd \` - Split editor by column. This means a new column view will appear and share space on the screen, and the visible file will appear an in the original and new views
* `Cmnd K Cmnd \` - Same as the above shortcut, but will split editor with a new row
* `Cmnd Optn 0` - Flip all column layouts into rows, and vice versa. This includes nested layouts.
* `Cntrl Cmnd <left>/<right>` - Move active file to next split view

* `Cmnd <number>` - Go to the tab window based on the number. 1 is the first, 2 is the second, etc.
* `Cmnd Shift [`, `Cmnd Shift ]` - Move to the next left or right tab, regardless of tab window settings
* `Cmnd W` - Close active tab

* `Fn <up>/<down>` - Go all the way up or down the visible page. Repeat this to move around more of the file.

### Managing Text

- `Cmnd I` - Select all of current line

* `Shft Cmnd L` - Select all instances of current selection
* `Cmnd Shft L`, `Cmnd Fn F2` - Select all instances of current word (based on cursor position, not highlighted)
* `Cmnd Optn <up>/<down>` - Add a cursor to the line directly above or below. Use repeatedly to create many cursors along the same area.

* `Optn <up>/<down>` - Take the current line, or selected lines, and **move** them up or down
* `Shft Optn <up>/<down>` - Take the current line, or selected lines, and **copy** them up or down
* `Cntl J` - Join all selected lines into single line

* `Cmnd G` - Find next occurence of searched text
* `Shft Cmnd G` - Find previous occurence of searched text
* `Shft Alt <left>/<right>` - Select word to left or right, adding to highlighted selection
* `Alt Shft I` - Focus cursor on the end of each highlighted section

* `Cmnd D` - Find next occurence of selected word and add to multi-highlight
* `Cmnd K Cmnd D` - Skip current select of multi-highlight search from previous command, and continue to next instance. Good if you need to highlight multiple instances of a word but with some exceptions.

* `Cntrl Shift U` - Uppercase highlighted text
* `Cntrl Shift L` - Lowercase highlighted text

* `Cmnd Shft \` - Jump to corresponding start or end of current bracket. If not on a bracket, jump forward until cursor is on a bracket.
* `Cmnd Optn [` - Fold code based on current or nearest parent bracket
* `Cmnd Optn ]` - Unfold code on selected folded bracket

* `Cmnd U` - Undo last action
