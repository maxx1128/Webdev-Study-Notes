# Services

Ember Services are objects whose information persists throughout different pages of the application. A common use of this is saving info about if a user is currently logged in and showing this across the site. It can also include lots of [other functionalities](https://guides.emberjs.com/v2.1.0/applications/services/) that must be persisted, such as geolocation, third-party APIs, and server-backed events.

Services can be created with the Ember CLI like most other things. For user sessions, this could be done with `ember g service session`.

A simple version of this service would be:

```
import Service from '@ember/service';

export default Service.Extend({
  current_user: null
});
```

Services then need to be injected into controllers to be available in them and the views. Once injected, they can be accessed as normal.

```
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.Extend({
  session: service(),
  mySession: service('session'), // If the key has a different name than the service, it must be specified like this

  actions: {
    login(user){
      this.set('session.current_user', user); // Updating a service value
    }
  }
});
```

You can then access the service value with `{{ session.current_user }}`.
