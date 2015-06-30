App.AccountController = Ember.Controller.extend(Ember.Evented, {

  auth: Ember.inject.service(),

  confirmPassword: '',

  email: '',

  error: '',

  showDeleteAccountPasswordInput: false,

  actions: {

    deleteAccount: function(password) {

      var controller = this,
          email = this.get('auth.currentUser.email'),
          firebase = this.get('container').lookup('adapter:application').firebase;

      firebase.removeUser({
        email: email,
        password: password
      }, function(error) {

        if (error) {
          switch (error.code) {
            case 'INVALID_USER':
              controller.set('error', 'The specified user account does not exist.');
              break;
            case 'INVALID_PASSWORD':
              controller.set('error', 'The specified user account password is incorrect.');
              break;
            default:
              contoller.set('error', 'Error removing user.');
          }
        } else {

          controller.trigger('closeModal');
        }
      });
    },

    didDeleteAccount: function() {
      this.transitionToRoute('login');
    },

    showPassword: function() {

      this.set('showDeleteAccountPasswordInput', true);
    }
  }
});
