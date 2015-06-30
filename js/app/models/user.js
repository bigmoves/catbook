/**
 * The user model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.User = DS.Model.extend({
  activity: DS.hasMany('activity', {
    async: true
  }),
  dislikes: DS.hasMany('dislike', {
    async: true
  }),
  email: DS.attr(),
  firstName: DS.attr(),
  fullName: Ember.computed('firstName', 'lastName', function() {
    
    return this.get('firstName') + ' ' + this.get('lastName');
  }),
  lastName: DS.attr(),
  likes: DS.hasMany('like', {
    async: true
  })
});