App.ProfileController = Ember.Controller.extend({
  newHobby: '',

  actions: {
    addHobby: function(newHobby) {
      var user = this.get('model');
      var hobby = this.store.createRecord('hobby', {hobbyName: newHobby});
      user.get('hobbies').then(function(hobbies) {
        hobbies.pushObject(hobby);
        hobby.save();
        user.save();
      });
    }
  }
});