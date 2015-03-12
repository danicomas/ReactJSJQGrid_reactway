/** @jsx React.DOM */
// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  'jsx!views/home/HomeView',
  'jsx!views/home/NavView',
  'jsx!views/footer/FooterView',
  'jsx!views/jqgrid/EventsFormView',
  'jsx!views/jqgrid/EventsGridView',
  'models/home/NavViewModel'
], function($, _, Backbone, React, HomeView, NavView, FooterView, EventsFormView, EventsGridView, NavViewModel) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'jqgrid': 'showJQGrid',
      
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function () {

    var app_router = new AppRouter;
    var navViewModel = new NavViewModel;
    
    app_router.on('route:showJQGrid', function(a){
    navViewModel.set("option", "#/jqgrid");
    NavViewComponent.setProps({ model: navViewModel });
  
    React.renderComponent(
      <EventsFormView />,
      document.getElementById("page")
    );

    });

    app_router.on('route:defaultAction', function (actions) {
    navViewModel.set("option", "#");
    NavViewComponent.setProps({ model: navViewModel });
  
    React.renderComponent(
      <HomeView />,
      document.getElementById("page")
    );

    });
  
    var NavViewComponent = React.renderComponent(
      <NavView model={navViewModel} />,
      document.getElementsByClassName("navbar-inner")[0]
    );

    React.renderComponent(
      <FooterView />,
      document.getElementById("footer")
    );

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});