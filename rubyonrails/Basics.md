# Rails Basics

A high-level overview of the basic Rails patterns and commands

## Basic Terms

* Router
* Model
* Controller
* View
* Helper
* Public/Vendor
* Asset Pipeline
* Serializer - a tool that takes data in the rails app and translates it into other formats that can be shared across different languages and apps. For example, taking database info and serializing it for a Javascript front-end that needs it in a JSON API format.

## Common Commands

* Generating controllers and models
* Managing the database

* `rails server` serves up the current version of the app locally
* `rails db:migrate` brings any changes to the database over to the database itself
* `rails db:seed` populates the local database with all info from the `seeds.rb` file
* `rails db:reset` cleans out the current local database and then reseeds it with info from the `seeds.rb` file.
