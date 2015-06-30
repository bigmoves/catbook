/**
 * The user model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.User = DS.Model.extend({
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  hometown: DS.attr(),
  relationshipStatus: DS.attr(),
  photo: DS.attr(),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),
  relationship: DS.belongsTo('user'),
  hobbies: DS.hasMany('hobbies')
});