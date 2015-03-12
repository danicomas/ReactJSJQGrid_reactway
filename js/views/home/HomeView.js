/** @jsx React.DOM */
define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){

  var HomeView = React.createClass({
	render : function() {		
		  return (
			<div>
				<div class="main">
					{'Example modularizing app with Backbone Models & Route, ReactJS Views, RequireJS, jqGrid'}
				</div>
				<div class="sidebar"></div>
			</div>
		)
	  }
	});

  return HomeView;
  
});
