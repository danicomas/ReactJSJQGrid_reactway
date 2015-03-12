define([
  'underscore',
  'backbone',
], function(_, Backbone) {
	var NavViewModel = Backbone.Model.extend({
		defaults: {
			option: "#"
		}
	});
	return NavViewModel;
});
