/**
 * The activity model
 * 
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Activity = DS.Model.extend({
  body: DS.attr(),
  dislikes: DS.hasMany('dislikes', {
    async: true
  }),
  likes: DS.hasMany('likes', {
    async: true
  }),
  // comments: DS.hasMany(),
  published: DS.attr('number'),
  title: DS.attr(),
  user: DS.belongsTo('user', {
    async: true
  })
});