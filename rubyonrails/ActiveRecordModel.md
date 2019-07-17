# ActiveRecord and ActiveModel

## ActiveRecord

Active Record is a Rails dependency that handles ORM, or "object relational mapping," which just means it makes database data (stored in many different formats) available to use as Ruby objects. This is what lets Rails look through data with Ruby methods, making it easier to sort through and update.

## ActiveModel

ActiveModel is several methods pulled from ActiveRecord that focus more on data validation and consistency. These all used to be part of ActiveRecord but now existed separately.

### Validations

ActiveModel validations are typically used in Rails models to ensure data has consistent structure before doing anything with it. They have a wide range of options like making sure properties exist, are a specific data type, conform to a regex pattern, or many others.

You can also include these validations on any class by including them at the start.

```ruby
class Person
  include ActiveModel::Validations

  validates :name, presence: true
  # ...

end
```

Classes that don't meet their validations will have a `valid?` property that returns false. Checking this makes it easy to stop invalid data and objects in their tracks and return errors instead.

## Resources

* [Active Record Basics](https://guides.rubyonrails.org/active_record_basics.html)
* [Ruby on Rails - Active Record Basics](https://www.theodinproject.com/courses/ruby-on-rails/lessons/active-record-basics-ruby-on-rails)
* [ActiveModel Validation Class Methods](https://api.rubyonrails.org/v5.1.6/classes/ActiveModel/Validations/ClassMethods.html)
* [ActiveModel Basics - Validations](https://guides.rubyonrails.org/active_model_basics.html#validations)
