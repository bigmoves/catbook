App.DisablableButtonComponent = Ember.Component.extend({
  tagName: 'button',

  attributeBindings: ['_disabled:disabled'],

  _disabled: Ember.computed.not('disabled'),

  disabled: false,

  click: function() {
    this.attrs.onClick();
  }
});
