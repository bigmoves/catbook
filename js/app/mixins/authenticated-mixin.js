/**
 * Authentication mixin
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Mixin
 */
App.AuthenticatedMixin = Ember.Mixin.create({
  /**
   * Reference to the auth service
   *
   * @type {object}
   * @memberof App.AuthenticatedMixin
   */
  auth: Ember.inject.service(),
  /**
   * Does the route require authentication?
   *
   * @type {Boolean}
   * @memberof App.AuthenticatedMixin
   */
  requireAuthentication: true,
  /**
   * Transition to the login page when the authentication fails
   *
   * @returns {void}
   * @memberof App.AuthenticatedMixin
   */
  accessDenied: function() {
    
    this.transitionTo('login');
  },
  /**
   * Check if the route needs authentication and login the user
   *
   * @returns {Promise}
   * @memberof App.AuthenticatedMixin
   */
  beforeModel: function(transition) {

    if (this.get('requireAuthentication')) {

      return this.loginUser(transition);

    } else {

      return this.checkLogin();
    }
  },
  /**
   * Fetches a user session without a redirect on successful authentication
   *
   * @param {object} transition
   * @returns {Promise}
   * @memberof App.AuthenticatedMixin
   *
   */
  checkLogin: function() {

    var auth = this.get('auth'),
        isLoggedIn = this.get('auth.isLoggedIn');

    if (!isLoggedIn) {

      return auth.fetch().catch(function() {
        // noop if login fails
      });
    } else {

      return Ember.RSVP.resolve();
    }
  },
  /**
   * Fetches a user session from Firebase or redirects the user to the login
   * page
   *
   * @param {object} transition
   * @returns {Promise}
   * @memberof App.AuthenticatedMixin
   *
   */
  loginUser: function(transition) {

    var route = this,
        auth = this.get('auth'),
        isLoggedIn = this.get('auth.isLoggedIn');

    if (!isLoggedIn) {

      auth.set('attemptedTransition', transition);

      return auth.fetch()
        .catch(function() {
          route.accessDenied();
        });
    } else if (isLoggedIn) {

      return Ember.RSVP.resolve();

    } else {

      return route.accessDenied();
    }
  }
});
