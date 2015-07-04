// Update Ember's inflection rules for this model
Ember.Inflector.inflector.uncountable('friend');

/**
 * The friends model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Friend = DS.Model.extend({
  user: DS.belongsTo('user', { async: true}),
	friend: DS.hasMany('friend', { async: true})
});