# Connecting an API

* **Adapter** - Used to translate the endpoint locations of an API
* **Serializer** - Used to translate the content of an API. The recommended default is the JSONAPI Serializer
* Serializers and Adapters can also be used differently for specific applications or models
* Make sure the resources being exposed to Ember match the models being used in Ember!
* The most preferred API format is JSON API, despite the other adapters and serializers that make using other APIs possible. If you can control the API being used, make it JSON API.

#### Using FireBase

1) Set up a FireBase account and a database
2) Manually add in data to the database
3) Install `emberfire` through the CLI, `ember install emberfire` or `ember install emberfire@<version#>`
3) Copy the config info from FireBase and add it to `config/environment`. This may vary depending on the version of Ember Data, and as a consequence what version of Ember Fire is needed.
4) Generate a model that matches the data structure of what's in FireBase
5) Use Ember Data to pull data from the database, such as with `return this.store.findAll('items')`
6) When setting different values to the data, remember to call the `save()` method:

```
import { set } from '@ember/object';

actions: {
  changeData(object) {
    set(object, 'name', newValue);  // Sets it on the browser
    object.save();                  // Saves changes to the database
  }
}
```

Data returned from FireBase will often be in a `promise`, or data that's waiting to be given to the program. This could also show up if using `console.log` on a value shows `getter` and `setter` properties. If that's the case, you'll need to use the `get` object helper to access it once the promise returns the data.

This example has an array of data (`users_who_answered`) given from FireBase. When each item is used while looping through it with `reduce`, `get` is used with the property to get the specific data property value. Note that using `get` requires these two arguments: the promise object, and the property key to return the value of.

```
import { get } from '@ember/object';

const all_users = this.get('users_who_answered').reduce(function(usernames, user) {
  usernames.push(get(user, 'user_codename'));

  return usernames;
}, []);
```
