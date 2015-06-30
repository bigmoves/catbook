App.AccountView = Ember.View.extend(App.FoundationMixin, {

  closeModal: function() {

    var controller = this.get('controller');

    $('#areYouSure').foundation('reveal', 'close');

    setTimeout(function() {
      controller.send('didDeleteAccount');
    }, 100);
  },

  didInsertElement: function() {

    this._super();

    var controller = this.get('controller');

    controller.on('closeModal', this.closeModal.bind(this));

    setTimeout(function() {
      $(document).on('closed.fndtn.reveal', '[data-reveal]', function() {
        controller.set('showDeleteAccountPasswordInput', false);
      });
    }, 50);
  }
});
