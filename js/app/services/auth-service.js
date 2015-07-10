/**
 * Catbook authentication service
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Service
 */
App.AuthService = Ember.Service.extend({
  /**
   * Whether or not the user is logged in
   *
   * @memberof App.AuthService
   * @instance
   * @type {boolean}
   */
  isLoggedIn: Ember.computed.notEmpty('currentUser'),
  /**
   * The currently logged in user
   *
   * @type {object}
   * @memberof App.AuthService
   */
  currentUser: null,
  /**
   * Creates a user through the firebase user auth api and saves a new
   * user record in the database with the corresponding user id.
   *
   * @returns {Promise}
   * @memberof App.AuthService
   */
  createUser: function(user) {

    var firebase = this.get('container').lookup('adapter:application').firebase;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      firebase.createUser({
        email: user.get('email'),
        password: user.get('password')
      }, function(error, authData) {

        if (error) {

          Ember.run.bind(null, reject('Auth failed.'));

        } else {

          user.set('id', authData.uid);
          user.save().then(function(user) {

            Ember.run.bind(null, resolve(user));
          });
        }
      });
    });

  },
  /**
   * Opens a user session with Firebase with the provided email and password.
   *
   * @returns {Promise}
   * @memberof App.AuthService
   */
  open: function(credentials) {

    // Debug
    console.log('Logging in user');

    var authService = this,
        firebase = this.get('container').lookup('adapter:application').firebase,
        store = this.get('container').lookup('store:main');

    return new Ember.RSVP.Promise(function(resolve, reject) {

      firebase.authWithPassword({
        email: credentials.email,
        password: credentials.password
      }, function(error, authData) {

        if (error) {

          Ember.run.bind(null, reject('Auth failed.'));

        } else {

          store.find('user', authData.uid).then(function(user) {

            authService.set('currentUser', user);
            Ember.run.bind(null, resolve());
          });
        }
      }, { remember: "sessionOnly" });
    });
  },
  /**
   * Re-establishes a user session with Firebase
   *
   * @returns {Promise}
   * @memberof App.AuthService
   */
  fetch: function() {

    // Debug
    console.log('Fetching user');

    var authService = this,
        firebase = this.get('container').lookup('adapter:application').firebase,
        authData = firebase.getAuth(),
        store = this.get('container').lookup('store:main');

    return new Ember.RSVP.Promise(function(resolve, reject) {

      if (authData) {

        store.find('user', authData.uid).then(function(user) {

          authService.set('currentUser', user);

          Ember.run.bind(null, resolve());

        }, function() {

          Ember.run.bind(null, reject('Auth failed.'));
        });

      } else {

        Ember.run.bind(null, reject('Auth failed.'));
      }
    });
  },
  /**
   * Closes a Firebase user session
   *
   * @returns {Promise}
   * @memberof App.AuthService
   */
  close: function() {

    // Debug
    console.log('Logging out user');

    var authService = this,
        firebase = this.get('container').lookup('adapter:application').firebase,
        store = this.get('container').lookup('store:main');

    return new  Ember.RSVP.Promise(function(resolve) {
      // store.unloadAll('user');
      firebase.unauth();
      authService.set('currentUser', null);
      resolve({});
    });
  }
});
