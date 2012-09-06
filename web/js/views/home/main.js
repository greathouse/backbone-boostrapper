define([
	'jquery',
	'jqueryValidate',
	'mustache',
	'backbone',
	'foundation',
	'text!templates/home/main.html'
], function($, validate, mustache, Backbone, foundation, template){

  var view = Backbone.View.extend({
		el: $("#page"),
		initialize: function(){
		},
		render: function(){
			var data = {"greetings":"Hello", "who":"World"};
			var compiledTemplate = mustache.to_html( template, data );
			this.el.html( compiledTemplate );
    }
	});	
	return new view;
});
