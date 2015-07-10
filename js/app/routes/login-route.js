/**
 * The login route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.LoginRoute = Ember.Route.extend({
  /**
   * [service description]
   *
   * @returns {object}
   * @memberof App.LoginRoute
   */
  auth: Ember.inject.service(),
  /**
   * Don't try to login the current user on the login page
   *
   * @type {Boolean}
   * @memberof App.LoginRoute
   */
  requireAuthentication: false,

  actions: {
    /**
     * Submit the user's login credentials and login them in
     *
     * @returns {void}
     * @memberof App.LoginRoute
     */
    submit: function() {

      var authorize = null,
          countdown = null,
          auth = this.get('auth'),
          controller = this.get('controller'),
          credentials = controller.getProperties('email', 'password');

      // Toggle loading display
      $('.js-loader').toggleClass('active');
      
      // Ember timeout to ensure cool loading animation is displayed at least 2 sec.
      countdown = new Ember.RSVP.Promise(function(resolve) {

          Ember.run.later(this, function() {

            resolve();

          }, 2000);
        });

      // Authorization attempt
      authorize = new Ember.RSVP.Promise(function(resolve, reject) {

          // Attempt to login the user
          auth.open(credentials).then(function() {

            // Login successful
            resolve();
          }, function() {

            //Login Failed
            reject();
          });
        });

      // Promise resolution logic
      Ember.RSVP.Promise.all([
        countdown,
        authorize
      ]).then(function() {
        
        // Togle loading display and transition to index
        $('.js-loader').toggleClass('active');
        this.transitionTo('index');

      }.bind(this), function() {

        // TODO: An error message saying you've been licking yourself too much should display to user.
      });
    }
  }
});
