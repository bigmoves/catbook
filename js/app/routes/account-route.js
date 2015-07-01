App.AccountRoute = Ember.Route.extend({
  actions: {
    didTransition: function() {
      this.get('controller').setProperties({
        email: this.get('auth.currentUser.email'),
        confirmPassword: '',
      });
    }
  }
});
