App.AboutProfileComponent = Ember.Component.extend({
  /**
   * Boolean for whether showHomeTown input is visible
   * 
   * @type {Boolean}
   */
  showHometown: false,

  /**
   * Boolean for whether showRelationship input is visible
   * 
   * @type {Boolean}
   */
  showRelationship: false,


  /**
   * [user description]
   * @type {[type]}
   */
  user: Ember.computed.alias('model'),

  actions: {
    /**
     * Show/hide hometown edit input
     * 
     * @memberOf  App.Profile
     * @instance
     */
    editHome: function() {
      this.toggleProperty('showHometown');
    },
    /**
     * Submit new hometown data
     * 
     * @memberOf  App.Profile
     * @instance
     */
    submitHometown: function(hometown) {
      var component = this;
      var user = this.get('user');
      user.set('hometown', hometown);
      user.save().then(function() {
        component.set('showHometown', false);
      });
    },
    /**
     * Show/hide relationship edit input
     * 
     * @memberOf  App.Profile
     * @instance
     */
    editRelationship: function(){
      this.toggleProperty('showRelationship');
    },
    /**
     * Submit new relationship status data
     * 
     * @memberOf  App.Profile
     * @instance
     */
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