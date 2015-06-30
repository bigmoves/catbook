/**
 * The User Signup route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.SignupRoute = Ember.Route.extend({
  /**
   * Don't authenticate the user (see App.AuthenticatedMixin)
   *
   * @type {Boolean}
   * @memberof App.SignupRoute
   */
  requireAuthentication: false,
  /**
   * Create a new user record
   *
   * @returns {object}
   * @memberof App.SignupRoute
   */
  model: function() {

    return this.store.createRecord('user');
  },

  actions: {
    /**
     * Creates a new user
     *
     * @returns {void}
     * @memberof App.SignupRoute
     */
    submit: function() {

      var route = this,
          userData = this.currentModel,
          auth = this.get('auth');

      auth.createUser(userData).then(function(user) {

        return auth.open({
          email: user.get('email'),
          password: userData.get('password')
        });
      }).then(function() {

        route.transitionTo('index');
      });
    },
    /**
     * Rollback the user model if the user transitions prematurely
     *
     * @returns {void}
     * @memberof
     */
    willTransition: function() {

      this.currentModel.rollback();
    }
  }
});
