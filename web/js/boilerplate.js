define([
	'jquery',
	'mustache',
	'backbone',
	'text!templates/home/main'
], function($, mustache, Backbone, template){	
	var view = Backbone.View.extend({
		el: $("#page"),
		initialize: function(){
		},
		render: function(){
			var data = {};
			var compiledTemplate = mustache.to_html( template, data );
			this.el.html( compiledTemplate );
		}
		
	});
	
	return view;
});
