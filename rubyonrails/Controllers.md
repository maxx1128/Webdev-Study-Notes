# Controllers

Controllers are what handle requests once it's been determined what page it should go to. It takes in data about the request, gathers any needed info (like data from a database), and passes it all along to the template.

## Basics

Aim to keep them as simple and stupid as possible, with the goal of only pulling any needed data and the correct template. Complex logic or decisions around this should ideally be abstracted to other classes, such as services, before being used by the controller. The last action in most Controllers

Define variables accessible to the view with the `@` sign, also known as *Instance Variables.*

Here's a simple example of a controller action that grabs some database info and passes it on to a template.

```ruby
def show
  # Using an abstraction like ActiveRecord to get needed data for template
  @categories_desc = Category.all.order({ created_at: :desc })

  # Choosing the template to render
  render '/categories'
end
```

## Methods

The controller methods correspond to the type of request. `show` requests are for basic "show me this page" requests, while others refer to different ways of updating data.

* `new` for pages where you can add and submit new data
* `create` for sending the new data to the database
* `destroy` to remove data

## Resources

* [Rails ActionController Overview](https://guides.rubyonrails.org/action_controller_overview.html)
