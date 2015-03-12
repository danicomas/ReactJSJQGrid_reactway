// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',  
  'react',
  'jsx!router'
], function($, _, Backbone, React, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});