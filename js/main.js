// Filename: main.js
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    jqueryui: 'libs/jquery-ui/jquery-ui.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    react: 'libs/react/react-with-addons',
    JSXTransformer: 'libs/react/JSXTransformer',
    jsx: 'libs/react/jsx',
	events: 'libs/emitter/EventEmitter'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app'
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
