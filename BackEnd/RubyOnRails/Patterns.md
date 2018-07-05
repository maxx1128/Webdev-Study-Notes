# Extra Rails Patterns

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

## Extra Patterns have no Rails Magic

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

-------

## Useful Patterns

### Adding Extra Classes

Within the app folder, you can add more classes for managing information and objects. However it's important to remember the naming convention to make sure Rails can auto-load them properly.

**Make sure the file's name and class have the same name, but the file is snake-case and the class is camel case.** For example, if you have a Presenter class called `MySuperPresenter`, then the file name must be `my_super_presenter.rb`.

These extra classes can serve different uses for different purposes, such as Presenters and Services, which are also described here.

### Storing Static Content Data

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
