App.Models.TodoModel = Backbone.Model.extend({
	defaults: {
		completed : false
	},

	validate: function (attributes, options) {
		if(!attributes.title)
		{
			return '';
		}
	}
});