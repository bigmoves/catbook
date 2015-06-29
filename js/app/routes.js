App.Router.map(function() {
  
  this.route('account');

  this.route('login');

  this.route('messages');

  this.route('profile');

  this.route('sign-up');

  this.route('404', {
    path: '/*path'
  });
});