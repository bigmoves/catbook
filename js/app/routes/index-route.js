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
   * The auth service
   *
   * @memberof App.IndexRoute
   * @instance
   * @type external:Ember.Service
   */
  auth: Ember.inject.service(),
  /**
   * Whether or not the user is logged in
   *
   * @mebmerof App.IndexRoute
   * @instance
   * @type {boolean}
   */
  isLoggedIn: Ember.computed.oneWay('auth.isLoggedIn'),

  // Overrides
  /**
   * When the user enters the route, check to see if they are logged in. If not, redrect them to
   * the login page.
   *
   * @memberof App.IndexRoute
   * @instance
   */
  activate: function() {

    if (!this.get('isLoggedIn')) {

      this.transitionTo('login');
    }
  },
  /**
   * Load the 10 most recently published news feed items
   *
   * @memberof App.IndexRoute
   * @instance
   * @returns external:Ember.RSVP.Promise
   */
  model: function() {

    if (this.get('isLoggedIn')) {

      return this.store.find('activity', {
        limitToLast: 10,
        orderBy: 'published'
      });
    }
  }
});