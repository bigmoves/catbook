App.ChatSidebarComponent =  Ember.Component.extend({
  isActive: false,
  currentInput: '',
  store: Ember.computed(function() {
    return this.get('container').lookup('store:main');
  }),
  actions: {
    toggleChat: function() {
      this.toggleProperty('isActive');
    },

    postMessage: function() {
      var store = this.get('store');
      var message = this.get('currentInput');
      var _this = this;
      
      store.find('user', 1).then(function(resp) {
        // Send This to FireBase
        var newMessage = store.createRecord('chat', {
          user: resp,
          message: message
        });
        newMessage.save();

        _this.set('currentInput', '');
      }); // Change to correct signed in user
    }
  }
});