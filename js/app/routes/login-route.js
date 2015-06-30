/**
 * The login route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.LoginRoute = Ember.Route.extend({
  /**
   * [service description]
   *
   * @returns {object}
   * @memberof App.LoginRoute
   */
  auth: Ember.inject.service(),
  /**
   * Don't try to login the current user on the login page
   *
   * @type {Boolean}
   * @memberof App.LoginRoute
   */
  requireAuthentication: false,

  actions: {
    /**
     * Submit the user's login credentials and login them in
     *
     * @returns {void}
     * @memberof App.LoginRoute
     */
    submit: function() {

      var route = this,
          auth = this.get('auth'),
          controller = this.get('controller'),
          credentials = controller.getProperties('email', 'password');

      auth.open(credentials).then(function() {

        route.transitionTo('index');

      }, function() {

        controller.set('errors', 'Invalid email/password.');
      });
    }
  }
});
