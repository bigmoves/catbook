/**
 * This is the login controller
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Controller
 */
App.LoginController = Ember.Controller.extend({
  /**
   * User email address
   *
   * @type {string}
   * @memberof App.LoginController
   */
  email: '',
  /**
   * Login errors
   *
   * @type {string}
   * @memberof App.LoginController
   */
  error: '',
  /**
   * User password
   *
   * @type {string}
   * @memberof App.LoginController
   */
  password: '',
  /**
   * Resets the form
   *
   * @returns {void}
   * @memberof App.LoginController
   */
  resetForm: function() {

    this.set('email', '');
    this.set('password', '');
    this.set('error', '');

  }.on('init')

});
