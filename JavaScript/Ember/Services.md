# Services

Ember Services are objects whose information persists throughout different pages of the application. A common use of this is saving info about if a user is currently logged in and showing this across the site. It can also include lots of [other functionalities](https://guides.emberjs.com/v2.1.0/applications/services/) that must be persisted, such as geolocation, third-party APIs, and server-backed events.

Services can be created with the Ember CLI like most other things. For user sessions, this could be done with `ember g service session`.

A simple version of this service would be:

```
export default Ember.Service.Extend({
  current_user: null,
  login(user) {
    this.set('current_user', user);
  },
  logout() {
    this.set('current_user', null);
  }
});
```

Services can also include functions to better encapsulate all code related to a specific purpose. In this case, it's all variables and functions related to logging in and out.

Services then need to be injected into controllers to be available in them and the views. Once injected, they can be accessed as normal.

```
export default Ember.Controller.Extend({
  session: Ember.inject.service(),
  mySession: Ember.inject.service('session'), // If the key has a different name than the service, it must be specified like this

  actions: {
    login(user){
      this.get('session').login(user); // Getting a service's function
    },
    logout() {
      this.get('session').logout();
    }
  }
});
```

You can then access the service value with `{{ session.current_user }}`, and also use these functions, in the view.

```
{{#if session.current_user}}
  <p>
    You're logged in as {{session.current_user}}. <br><br>

    <a href="javascript:void(0);" {{action 'logout'}}>
      Logout
    </a>
  </p>
{{else}}
  <a href="javascript:void(0);" {{action 'login' random_user}}>
    Login as a random user!
  </a>
{{/if}}
```

#### Using Store with Services

With EmberData, you can inject the `store` service and access database records the same way you would in a route. Remember that it returns a promise when setting a value to a variable.

```
export default Ember.Controller.Extend({
  store: Ember.inject.service(),
  first_user: store.findRecord('user', 1)

  first_user: Ember.computed(function('store'){
    this.get('store').findRecord('user', 1).then((user) =>{
      this.set('first_user', user)
    })
  });
});
```

#### Using Cookies with Services

Services don't normally persist with page or browser refreshes. However the ["ember-cookies" service](https://github.com/simplabs/ember-cookies) add-on makes this easy.

If you want to check for cookies when the service is called, you should set this up in the `init()` function, shown below:

```
export default Ember.Controller.Extend({
  cookies: Ember.inject.service(),
  cookies_service: this.get('cookies'),
  current_user: null,

  actions: {
    login(user){
      this.get('session').login(user);
      cookies_service.write('current_user', user);
    },
    logout() {
      this.get('session').logout();
      cookies_service.clear('current_user');
    }
  },

  init(){
    this._super(...arguments); // Runs everything else first
    let current_user_cookie = cookies_service.read('current_user');

    if (current_user_cookie) {
      this.set('current_user', current_user_cookie);
    }
  }
});
```
