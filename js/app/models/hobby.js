/**
 * The hobbies model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Hobby = DS.Model.extend({
	hobbies: DS.hasMany('users', {inverse: 'hobbies'}),
	hobbyName: DS.attr()
})