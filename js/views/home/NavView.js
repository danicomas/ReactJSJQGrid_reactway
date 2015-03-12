/** @jsx React.DOM */
define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){

  var NavView = React.createClass({
	  componentDidMount: function() {        
      },
	  render : function() {		
		  return (
			<ul className="nav">
				<li className={this.props.model.attributes.option == "#" ? 'active' : ''}><a href="#">Home</a></li>
				<li className={this.props.model.attributes.option == "#/jqgrid" ? 'active' : ''}><a href="#/jqgrid">jQGrid ReactJS</a></li>
			</ul>
		)
	  }
	});

  return NavView;
  
});
