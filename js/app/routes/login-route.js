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

      var countdown,
          authorize,
          route = this,
          auth = this.get('auth'),
          controller = this.get('controller'),
          credentials = controller.getProperties('email', 'password');

      // Toggle loader and kick off RSVP so that awesome loading screen displays at least .75 secs
      $('.js-loader').toggleClass('active');
      
      countdown = function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          Ember.run.later(this, function() {
            resolve();
          }, 2000);
        });
      };

      authorize = function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {

          // Attempt to login the user
          auth.open(credentials).then(function() {

            // Login successful
            resolve();
          }, function() {

            //Login Failed
            reject();
          });
        });
      };


      Ember.RSVP.Promise.all([
        countdown(),
        authorize()
      ]).then(function() {
        
        // Togle loading display and transition to index
        $('.js-loader').toggleClass('active');
        route.transitionTo('index');
      });
    }
  }
});
