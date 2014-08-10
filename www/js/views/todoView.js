App.Views.TodoView = Backbone.View.extend({
	events: {
		'click .delete-button': 'destroy',
		'mouseenter .todoView': 'showDeleteButton',
		'mouseleave .todoView': 'hideDeleteButton',
	},

	getTemplate: function () {
		return _.template($('#todo-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		return this;
	},

	showDeleteButton: function () {
		this.$('.delete-button').css('visibility', 'visible');
	},

	hideDeleteButton: function () {
		this.$('.delete-button').css('visibility', 'hidden' );
	},

	destroy: function () {
		this.model.destroy();
		this.remove();	
	}
});