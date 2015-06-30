/**
 * This is the home page controller
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Controller
 */
App.IndexController = Ember.Controller.extend({
  /**
   * Inject the auth service
   *
   * @memberof App.IndexController
   * @instance
   * @type external:Ember.Service
   */
  auth: Ember.inject.service(),
  /**
   * Whether or not the user is logged in
   *
   * @memberof App.IndexController
   * @instance
   * @type {boolean}
   */
  isLoggedIn: Ember.computed.oneWay('auth.isLoggedIn')
});