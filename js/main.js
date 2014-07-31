requirejs.config({
  baseUrl: 'js/app',
  paths: {
    'jquery': '../lib/jquery-2.1.1.min',
    'underscore': '../lib/underscore-min'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    }
  }
});

requirejs([
  'application'
], function(Application) {
  'use strict';
  var app = new Application();
  app.run();
});
