/**
 * The main application route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ApplicationRoute = Ember.Route.extend({
  /**
   * The main application route does not need authentication
   * (see App.AuthenticatedMixin)
   *
   * @type {Boolean}
   * @memberof App.ApplicationRoute
   */
  requireAuthentication: false,

  actions: {
    /**
     * Logout the current user
     *
     * @returns {void}
     * @memberof App.ApplicationRoute
     */
    logout: function() {

      this.get('auth').close().then(function() {
        window.location.replace('#/login');
      });
    }
  }
});
