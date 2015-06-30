/**
 * Foundation alert component
 *
 * @memberof App
 * @constructor
 */
App.FoundationAlertComponent = Ember.Component.extend({
  /**
   * Foundation alert class name
   *
   * @type {string}
   * @memberof App.FoundationAlertComponent
   */
  type: '',
  /**
   * Reinitialize foundation
   *
   * @returns {void}
   * @memberof App.FoundationAlertComponent
   */
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', function() {
      $(document).foundation();
    });
  }
});
