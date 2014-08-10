App.Models.TodoModel = Backbone.Model.extend({
	defaults: {
		completed : false
	},

	validate: function (attributes, options) {
		if(!attributes.title)
		{
			return 'Message not used but needed for the validation to work. Might show the message in the future.';
		}
	}
});