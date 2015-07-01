/**
 * Initializes foundation.js stuff
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Mixin
 */
App.FoundationMixin = Ember.Mixin.create({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', function() {
      $(document).foundation();
    });
  }
});
