# Project Basics

## Package.json

All JavaScript projects have a `Package.json` file, which has lots of important info about the project and how to use it.

* Basic info such as the title, author, license, and description of what the project does.
* The current version, which helps others using the package stay aware of and adjust to any changes. Seeing a different version number can quickly tell someone they need to check the docs and how big of a change there was.
* The project's `scripts`, or the commands needed to run it. These range from starting it up, installing dependencies, running tests, or a combination of several related tasks. A project may have several tasks to compile styles, and one task people actually run to use all those tasks in the right order.

### Dependencies

Maybe the most important info on this file is the list of project dependencies. These are third-party bits of code being downloaded and referenced in the project. Projects can have a few or dozens of them, so managing them is important. Dependencies can have their own dependencies too, so on and so forth, so managing them is also tough. Package managers like NPM and Yarn are there to help.

If you use Yarn, you'd only need to run `yarn init` to set up a basic `package.json` file. You can then use `yarn add` to search for and install add-ons from a global list of them, `yarn remove` to take them off, `yarn upgrade` to get the most recent versions of them, and many others. Yarn keeps a list of them, and includes a lockfile called `yarn.lock` to keep track of the specific versions to ensure the same things are installed in different computers.

### Dependency Types

With Yarn again, you can add dependencies with either `yarn add` or `yarn add --dev`. That's because there's two lists for add-ons in the `package.json`, `dependencies` and `devDependencies`.

* `dependencies` are add-ons that are needed at run-time. If one add-on runs the actual server your project runs on, you need that in projection and in this group.
* `devDependencies` are add-ons only needed when developers are working on the project, not in production. An add-on may be used to compile Sass files into CSS. But only the finished CSS file is needed for production, so the add-on doing the compiling is in this group.

## File Structure

The final file being run that sets up the server, runs the main task, or whatever the focus of the project does, is usually kept in the `index.js` file in the root directory alongside `package.json`. Other files being written and imported by this main file will usually be in the `app` folder. This setup gives enough predictability so other devs can track down the main functions being run and where the custom files it relies on are.

## Resources

* [An introduction to how JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/)
