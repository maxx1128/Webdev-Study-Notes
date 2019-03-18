# Models

In relational databases, there are several different types of relationships different models can have:

1. **has_many** for when there's several instances of another model related to one of the selected model
2. **belongs_to** for when one instance of this model can belong to several other instances of another model
  * Can also have `polymorphic: true` set if it belongs to multiple different models. A polymorphic association must be declared in both cases to complete it, such as in [this example](https://launchschool.com/blog/understanding-polymorphic-associations-in-rails).
  {% highlight ruby %}
  class TeachingAssistant < ActiveRecord::Base
    belongs_to :ta_duty, polymorphic: true
  end

  class SectionA < ActiveRecord::Base
    has_many :teaching_assistants, as: :ta_duty
  end

  {% endhighlight %}

You can also define methods within models to better manage the data that's returned. For example, if one column returns a boolean that needs to be turned into a related string, the function can do that:

{% highlight ruby %}
  # In the model:
  def label
    if model.boolean "First Label" else "Second Label" end
  end

  # After calling an instance of the model:
  model_instance.label
{% endhighlight %}

Models use ActiveRecord to pull records from the database, and there's several methods to use for getting it.

* `Model.all` gets all model entries from a database.
* `Model.find(:id)` gets a specific instance of a model with the given id parameter. After finding it, it can be sent to the view, updated, destroyed, or other things.
* `Model.all.order()` takes the returned values and reorganizes them. A more specific example is `Model.all.order({ value: :desc })` orders Models in descending order based on the `value` column.
* `Model.includes(:column)` lets you pull and manage data based on it and any `belongs_to` relationships. An example from one of my apps is filtering a list of budget categories based on if they're an expense, and the dates of the belonging expenses:

{% highlight ruby %}
  Category.includes(:expenses)
    .where(expense: @type)
    .where(expenses: { created_at: @start_date..@end_date })
{% endhighlight %}
