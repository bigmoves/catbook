/**
 * A Firebase adapter for Ember Data
 *
 * @memberof App
 * @constructor
 */
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://burning-fire-5797.firebaseio.com/')
});
