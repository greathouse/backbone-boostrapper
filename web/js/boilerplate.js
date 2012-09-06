define([
	'jquery',
	'mustache',
	'backbone',
	'foundation',
	'text!templates/home/main'
], function($, mustache, Backbone, foundation, template){	
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
	
	return new view;
});
