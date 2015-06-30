App.AboutProfileComponent = Ember.Component.extend({

  showHometown: false,
  showRelationship: false,

  user: Ember.computed.alias('model'),

  actions: {
    editHome: function() {
      this.toggleProperty('showHometown');
    },
    submitHometown: function(hometown) {
      var component = this;
      var user = this.get('user');
      user.set('hometown', hometown);
      user.save().then(function() {
        component.set('showHometown', false);
      });
    },
    editRelationship: function(){
      this.toggleProperty('showRelationship');
    },
    submitRelationship: function(relationship) {
      var component = this;
      var user = this.get('user');
      user.set('relationshipStatus', relationship);
      user.save().then(function() {
        component.set('showRelationship', false);
      });
    }
  }
});