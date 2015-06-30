App.ChatSidebarComponent =  Ember.Component.extend({
  /**
   * Boolean for whether chat sidebar is active
   *
   * @type {boolean}
   */
  isActive: false,

  /**
   * Current value for chat sidebar input
   *
   * @type {string}
   */
  currentInput: '',

  /**
   * Current authentication status
   *
   * @type {Object}
   */
  auth: Ember.inject.service('auth'),

  /**
   * Ensure most recent message is displayed when element is inserted
   *
   * @memberof App.ChatSidebar
   * @instance
   */
  didInsertElement: function() {
    // Ensure messages default to most recent
    $('.js-chat-messages').scrollTop(999);
  },

  /**
   * Scroll to most recent message in chat box
   *
   * @memberof App.ChatSidebarComponent
   * @instance
   */
  scrollMessages: function() {
    var messages = $('.js-chat-messages');
    var height = messages.height();
    messages.animate({ scrollTop: height}, 250);
  },

  actions: {
    toggleChat: function() {
      this.toggleProperty('isActive');
    },

    postMessage: function() {
      var store = this.get('store');
      var message = this.get('currentInput');
      var user = this.get('auth.user');
      var _this = this;

      console.log('current user', user);
      
      store.find('user', 1).then(function(resp) {
        // Send This to FireBase
        var newMessage = store.createRecord('chat', {
          user: resp,
          message: message
        });
        newMessage.save().then(function() {
          _this.scrollMessages();
        });

        _this.set('currentInput', '');
      }); // Change to correct signed in user
    }
  }
});