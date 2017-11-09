
### Connecting an API

* **Adapter** - Used to translate the endpoint locations of an API
* **Serializer** - Used to translate the content of an API. The recommended default is the JSONAPI Serializer
* Serializers and Adapters can also be used differently for specific applications or models
* Make sure the resources being exposed to Ember match the models being used in Ember!
* The most preferred API format is JSON API, despite the other adapters and serializers that make using other APIs possible. If you can control the API being used, make it JSON API.

### Router

Specific routes can be [assigned to certain paths](https://emberigniter.com/building-user-interface-around-ember-data-app/) in the main router file:

```
Router.map(function() {
  this.route('books', { path: '/' });
  this.route('author', { path: '/author/:author_id' });
});
```

Route parameters are the ones with the colon prepended. They can be accessed in the model by including the `params` argument in the function.

```
model(params) {
  return this.store.findRecord('author', params.author_id);
}
```

### Useful add-ons

* ember-modal-dialog - Simple way to create basic modals
* ember-route-action-helper - Lets components trigger actions defined by the route
* active-model-adapter - Adapter designed to integrate with a Rails API