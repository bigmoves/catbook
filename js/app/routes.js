App.Router.map(function() {
  
  this.route('404');

  this.route('account');

  this.route('login');

  this.route('messages');

  this.route('profile', {
    path: ':profile_id'
  });

  this.route('sign-up');
});