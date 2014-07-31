define([
  'jquery',
], function($) {
  'use strict';

  function Application() {
    this.$body = $('body');
  }

  Application.prototype.run = function() {
    this.$body.html('<h1>Hello, World!</h1>');
  };

  return Application;
});
