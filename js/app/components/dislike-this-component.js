App.DislikeThisComponent = Ember.Component.extend({
  tagName: 'span',

  didInsertElement: function() {

    Ember.run.scheduleOnce('afterRender', function() {

      $(document).foundation();
    });
  }
});