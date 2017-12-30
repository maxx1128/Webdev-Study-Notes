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

## Extra Rails Patterns

Rails has lots of built in folders and functionality magic built in, but it's not limited to that. Like any framework, you can build on it and add extra code to meet your needs. A common way to do this with Rails is adding extra classes to better break specific functionality into different modules.

These need to be grouped into different folders in the `app/` folder, and the naming structure is important. The Class name and the file name must be the same, only with the Class name in camel case and the file name in snake case. For example, the **FakeModelQuery** class must be in the `fake_model_query.rb` file. They can then be used by any other class in the `app/` folder.

There's a [few common examples](https://codeclimate.com/blog/7-ways-to-decompose-fat-activerecord-models) of this:

* **Collections** are for extra business logic, such as any math or operations to created needed info for a view.
* **Services/Service Objects** are for complex write operations, such as updating database, mailers, jobs, or others that need to be coordinated together.
* **Queries/Query Objects** are for different database requests that are either more complex or are called multiple times.
* **Policy Objects** are similar to Service Objects, but instead of writing they focus on reading. This includes needing to read and validate several objects at once, such as a user's active email or last login time.
* **Presenters/Decorators/View Objects** are to get information prepared for the view, such as converting integers into currency.
* **Value Objects** are for returning values based around inputs from others. These are simpler than Collections, with much less logic, such as strings dependent on here a value falls into several ranges.
* **Form Objects** are for when a form updates several ActiveRecord models, and all these updates can be encapsulated into one class.

You can even use the classes from different patterns inside each other. You may have a Service that pulls data from a Query. This Service may also be used in a Presenter. A Controller could then just create a new instance of the Presenter, and everything else would be called as needed.

#### Extra Patterns have no Rails Magic

An important caveat for these patterns is they have none of the included Rails magic by default. So you'll likely need to take a few extra steps to get them working.

First, it's smart to make a base class for each Rails Pattern category. If you have lots of Services, it's good to have a base Service for any common methods used by them all. A common example is including all the application helpers, like so.

```
class BaseService

  private

  def h
    ApplicationController.helpers
  end
end
```

You can then have those methods inherited like so:

```
class SpecificService < BaseService
end
```

Finally, you can then call an instance of the class like this.

```
let variable = SpecificService.new

let variable = SpecificService.new(parameter_1, parameter_2) ## In case it takes parameters
```

Also if you pass in another object with other methods already defined, like a model pulled from a database, you'll need to delegate those methods to use them again. For example, if you pass in a model and want to use any values or methods without redefining them again, you'll need to delegate them like so:

```
delegate :id,
         :property,
         :another_thing, 
         :third_thing to: :@model

  def initialize(model = nil)
    @model = model
  end
```

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

You can also define methods within models to better manage the data that's returned. For example, if one column returns a boolean that needs to be turned into a related string, the function can do that:

```
  # In the model:
  def label
    if model.boolean "First Label" else "Second Label" end
  end

  # After calling an instance of the model:
  model_instance.label
```

Models use ActiveRecord to pull records from the database, and there's several methods to use for getting it.

* `Model.all` gets all model entries from a database.
* `Model.find(:id)` gets a specific instance of a model with the given id parameter. After finding it, it can be sent to the view, updated, destroyed, or other things.
* `Model.all.order()` takes the returned values and reorganizes them. A more specific example is `Model.all.order({ value: :desc })` orders Models in descending order based on the `value` column.
* `Model.includes(:column)` lets you pull and manage data based on it and any `belongs_to` relationships. An example from one of my apps is filtering a list of budget categories based on if they're an expense, and the dates of the belonging expenses:

```
  Category.includes(:expenses)
    .where(expense: @type)
    .where(expenses: { created_at: @start_date..@end_date })
```

## Useful Patterns

#### Adding Extra Classes

Within the app folder, you can add more classes for managing information and objects. However it's important to remember the naming convention to make sure Rails can auto-load them properly.

**Make sure the file's name and class have the same name, but the file is snake-case and the class is camel case.** For example, if you have a Presenter class called `MySuperPresenter`, then the file name must be `my_super_presenter.rb`.

These extra classes can serve different uses for different purposes, such as Presenters and Services, which are also described here.

#### Storing Static Content Data

There's likely data used and looped through frequently in an app, so it's useful to have the data stored in a specific location and accessed when needed. This can be done by storing them in a YAML file, accessing certain info through a Models file, and then pulling it in the Controller.

For a list of articles, all the data can be stored in a YAML file. It can be stored in `config` or `db`, or a custom `data` folder.

```
# data/articles.yml

articles:
  - name: New York Times
    author: Mackenzie McKale
    url: www.nytimes.com/fake-article-url

  - name: Wall Street Journal
    author: Will McAvoy
    url: www.washingtonpost.com/fake-article-url
```

You can then access and organize this data as needed in a models file. This is technically organizing and creating a data structure, which is why it'd fit well in the Models folder.

There's many different approaches here, and ways to filter and modify the data. This example simply uses a Struct to get all the basic info and return an array of hashes.

```
# app/models/articles.rb

module Articles
  AllArticles = Struct.new(:name, :author, :url) do
    DATA_PATH = Rails.root.join("data", "articles.yml").to_s.freeze

    def self.list
      YAML.load_file(DATA_PATH)["articles"].map do |article|
        new(article["name"], article["author"], article["url"])
      end
    end
  end
end
```

Now this module can be called in a controller and passed to a template.

```
# app/controllers/press.rb

def index
  @articles = Articles::AllArticles.list
end
```
