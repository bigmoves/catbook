/**
 * An Ember route for the home page. The home page of Catbook is the news feed.
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.IndexRoute = Ember.Route.extend({
  // Properties
  /**
   * The index route requires authentication so try to fetch the current user
   * before redirecting to the login page (see App.AuthenticatedMixin).
   *
   * @memberof App.IndexRoute
   * @instance
   * @type {boolean}
   */
  requireAuthentication: true,

  // Overrides
  /**
   * Load the 10 most recently published news feed items
   *
   * @memberof App.IndexRoute
   * @instance
   * @returns external:Ember.RSVP.Promise
   */
  model: function() {

    return this.store.find('activity', {
      limitToLast: 10,
      orderBy: 'published'
    });
  }
});
