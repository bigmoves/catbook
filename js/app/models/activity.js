/**
 * The activity model
 * 
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Activity = DS.Model.extend({
  body: DS.attr(),
  dislikes: DS.attr('number'),
  likes: DS.attr('number'),
  // comments: DS.hasMany(),
  published: DS.attr('date'),
  title: DS.attr(),
  user: DS.belongsTo('user')
});