/**
 * This is the 404 route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App['404Route'] = Ember.Route.extend({
  /**
   * Override the route's redirect hook. Transition to 404 page if not already on it.
   *
   * @memberof App.404Route
   * @instance
   */
  redirect: function() {

    var url = this.router.location.formatURL('/404');

    if (window.location.pathname !== url) {

      this.transitionTo('/404');
    }
  }
});