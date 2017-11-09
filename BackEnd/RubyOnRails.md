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

## Routers

`root controller#action`

`get '/string/string_2', to: 'controller#action'`

`get '/string_1/:param_1/:param_2', to: 'controller#action'`
`params[:param_1]` in the controller

`resources :controller`


## Controllers

Keep as simple and stupid as possible with the goal of pulling any needed data and the correct template.

Define variables accessible to the view with the `@` sign (specific name for them?!)

```
def new
  @category = Category.all
  @categories_desc_dates = Category.all.order({ created_at: :desc })
end
```

```
render '/categories/month'
```

## Helpers

Common, reusable chunks of functionality meant to be used throughout the app. Should be kept smaller and simpler whenever possible, if more complex abstraction is needed then it should be brought into the presenters.

Easy to use it in other classes with a line like this: `include CategoriesHelper`

## Presenters

A Presenter are a middleman between the controller and view, if the data returned by the controller needs any extra organization or calculations. Instead of cramming all this extra code into the controllers or helpers, it's best to move it into a presenter.

Why a Presenter? Because all that extra logic isn't meant for controllers or helpers. Controllers are made for needed data and templates, and should be as simple as possible. Helpers are for frequent, simpler actions - trying to increase their scale for Presenter-logic risks getting sucked into "Helper Hall" or drowning in lots of different helpers. Presenters let you keep all this logic in a single class, so it's easier to organize in a cohesive way.

Good use case for a presenter: your database returns some information, but the view needs the data after lots of calculations have been run. All this logic and math is best abstracted to the presenter.

However, Presenters are separate Ruby objects, and don't have much of the Rails "magic." So there's a few extra steps to setting them up.

### Create a Base Presenter

Similar with controllers and helpers, it's good to make a base presenter class for anything that's shared among all the presenters. For example:

```
class BasePresenter

  private

  def h
    ApplicationController.helpers
  end
end

class OnePresenter < BasePresenter
end
```

This makes all presenters have access to the app's helpers, as long as they're called with the `h.` prefix. Specific helpers for a class can also be added with the normal `include` at the top.

### Delegate Properties

If you're passing in an object with several properties attached, they need to be delegated and initialized.

```
delegate :something,
         :another_thing, 
         :third_thing to: :@variable

  def initialize(variable = nil)
    @variable = variable
  end
```

Viola, this values can now be calculated or changed or whatever in the presenter. Methods that rails make otherwise include, like `.each`, will likely need to be redefined in the presenter.

Once it's done, it can be used in the controller like so:

```
def index
    @data = OnePresenter.new(data)
end
```

Here `data` can be a call to the database, like `Data.all`.

Risque coders can even use Presenters inside of other Presenters if they want, in case there's common abstractions that need to happen between multiple Presenter objects.

## Tests

* Fixtures
* `def setup`

### Types

* Controllers
* Helpers
* Integration
* Models

### Tools

* `assert_equal`
* `assert_not`
* `assert_not_equal`
* `assert_template`
* `assert_difference variable, 1 do end`
* `assert_no_difference variable, 1 do end`
* `assert_redirected_to`
* `assert_select`
* `assert_response`

## Database

* Seeding - Can use ruby logic to speed up the seeding process and make it simpler

## Models

In relational databases, there are several different types of relationships different models can have:

1. **has_many** for when there's several instances of another model related to one of the selected model
2. **belongs_to** for when one instance of this model can belong to several other instances of another model
  * Can also have `polymorphic: true` set if it belongs to multiple different models. A polymorphic association must be declared in both cases to complete it, such as in [this example](https://launchschool.com/blog/understanding-polymorphic-associations-in-rails).
  ```
  class TeachingAssistant < ActiveRecord::Base
    belongs_to :ta_duty, polymorphic: true
  end
  
  class SectionA < ActiveRecord::Base
    has_many :teaching_assistants, as: :ta_duty
  end

  ```
