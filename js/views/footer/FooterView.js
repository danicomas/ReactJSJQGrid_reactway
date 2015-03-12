/** @jsx React.DOM */
define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){

	var FooterView = React.createClass({
		render : function() {		
			return (
				<div class="well">
					Footer
				</div>
			)
		}
	});

  return FooterView;
  
});