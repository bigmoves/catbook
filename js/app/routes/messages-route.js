/**
 * This is the messages route
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.MessagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('chat', {
      orderBy: 'published',
      limitToLast: 25
    });
  }
});