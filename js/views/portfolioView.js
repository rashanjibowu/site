define(["backbone", "text!../../templates/portfolio.html", "handlebars", "d3", "bootstrap"], function(Backbone, template, Handlebars, d3, Bootstrap) {

	return Backbone.View.extend({

		initialize: function(options) {
			this.options = options;
		},

		tagName: "section",

		className: "content",

		render: function() {

			// render the HTML
			var compiled = Handlebars.compile(template);
			var html = compiled(this.options);
			this.$el.html(html);

			// initialize popovers
  			this.$('[data-toggle="popover"]').popover();

			return this;
		}

	});

});
