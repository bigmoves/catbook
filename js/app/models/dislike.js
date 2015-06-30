/**
 * The model for activity feed item dislikes
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Dislike = DS.Model.extend({
  activity: DS.belongsTo('activity', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  })
});