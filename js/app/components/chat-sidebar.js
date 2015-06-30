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
  auth: Ember.inject.service(),

  /**
   * Ensure most recent message is displayed when element is inserted
   *
   * @memberof App.ChatSidebar
   * @instance
   */
  didInsertElement: function() {
    // Ensure messages default to most recent
    $('.js-chat-messages').scrollTop(9999);
  },

  /**
   * Scroll to most recent message in chat box
   *
   * @memberof App.ChatSidebarComponent
   * @instance
   */
  scrollMessages: function() {
    var messages = $('.js-chat-messages');
    var height = messages.prop('scrollHeight');
    messages.animate({ scrollTop: height}, 200);
  },

  actions: {
    /**
     * Toggle the active status of the chat sidebar
     *
     * @memberof App.ChatSidebar
     * @instance
     */
    toggleChat: function() {
      this.toggleProperty('isActive');
    },

    /**
     * Post user message to Firebase
     *
     * @memberof App.ChatSidebar
     * @instance
     */
    postMessage: function() {
      var store = this.get('store');
      var message = this.get('currentInput');
      var user = this.get('auth.currentUser');
      
      var newMessage = store.createRecord('chat', {
        user: user,
        message: message
      });
      newMessage.save();

      this.scrollMessages();
      this.set('currentInput', '');
    }
  }
});