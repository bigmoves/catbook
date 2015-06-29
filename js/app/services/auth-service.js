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
  isLoggedIn: false
});