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
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {

    return this.get('firstName') + ' ' + this.get('lastName');
  }),
  hobbies: DS.hasMany('hobby', {
    async: true
  }),
  hometown: DS.attr('string'),
  lastName: DS.attr('string'),
  likes: DS.hasMany('like', {
    async: true
  }),
  photo: DS.attr('string'),
  relationship: DS.belongsTo('user'),
  relationshipStatus: DS.attr(),
  coverPhoto: DS.attr()
  relationshipStatus: DS.attr('string')
  coverPhoto: DS.attr()
});
