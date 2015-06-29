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
  lastName: DS.attr()
});