/**
 * The application index route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.IndexRoute = Ember.Route.extend({
  /**
   * The index route requires authentication so try to fetch the current user
   * before redirecting to the login page (see App.AuthenticatedMixin).
   *
   * @type {Boolean}
   * @memberof App.IndexRoute
   */
  requireAuthentication: true
});
