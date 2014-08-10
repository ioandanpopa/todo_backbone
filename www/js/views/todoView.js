App.Views.TodoView = Backbone.View.extend({
	events: {
		'click .delete-button': 'destroy',
		'click .check-button': 'changeState',		
		'mouseenter .todoView': 'showDeleteButton',
		'mouseleave .todoView': 'hideDeleteButton',
	},

	initialize: function () {
		this.model.on( "change:completed", this.render, this);
	},

	getTemplate: function () {
		return _.template($('#todo-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		this.changeTextDecoration();
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
	},

	changeState: function () {
		this.model.set('completed', !this.model.get('completed'));
		this.changeTextDecoration();
	},

	changeTextDecoration: function () {
		var checked = this.model.get('completed');
		var textDecoration = checked ? 'line-through' : 'none';
		this.$el.find('.title-label').css('text-decoration', textDecoration);
	}
});
