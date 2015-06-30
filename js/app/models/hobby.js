// Update Ember's inflection rules for this model
Ember.Inflector.inflector.uncountable('hobby');

/**
 * The hobbies model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Hobby = DS.Model.extend({
	user: DS.hasMany('user'),
	hobbyName: DS.attr()
});