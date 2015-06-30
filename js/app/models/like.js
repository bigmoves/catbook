/**
 * The model for activity feed item likes
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Like = DS.Model.extend({
  activity: DS.belongsTo('activity', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  })
});