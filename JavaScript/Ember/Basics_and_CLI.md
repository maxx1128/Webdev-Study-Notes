
* Router - Controls where the URL requests are directed, and any parameters related to them.
* Routes - A route is set based on where the router sends a user based on the URL. Gets the underlying data for the page.
* Controllers - Manages and manipulates the data provided to a page by the router. Also handles different events.
* Templates - Outputs and displays the final data for a page.
* Modules of functionality and templates that can be reused across the project.
* Models - Basic models and structure for data objects.

# Basics

Ember was first built on **two-way data-binding,** which has the templates and controllers having two-way conversations at all times. However having them both talk to each other all the time risks making the app overly-complex, and having variables create unexpected results.

The new Ember structure for all this is **data down, actions up.** This means all data flows down from the routes to the views, and actions change the data by moving back up towards the controllers/routers, making data changes, and having those changes flow back down to the views.

# CLI commands

* `ember new <name>` - Create a new Ember project
* `ember build` - Builds a current project to the `dist` folder
* `ember serve` - Runs the project's development server
* `ember test` - Runs project's test
* `ember generate|g <"route", "controller", "model", etc> <name>` Generates an additional component, can include a file path as part of the name.
  * To create a route with a parameter, run `ember g route <parent_name>/<parameter_name> --path=':slug'`
* `ember generate --help` to see all the options for what can be generated.
