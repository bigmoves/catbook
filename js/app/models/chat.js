/**
 * The chat model
 *
 * @memberof App
 * @constructor
 * @extends external:DS.Model
 */
App.Chat = DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  message: DS.attr()
});