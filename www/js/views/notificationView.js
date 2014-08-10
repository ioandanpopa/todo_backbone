App.Views.NotificationView = Backbone.View.extend({
	deletedTodo: undefined,

	events: {
		'click .undo-button': 'restoreDeletedTodo'
	},

	initialize: function () {
		this.collection.on('remove', this.show, this);
		this.collection.on('remove', this.storeDeletedTodo, this);
	},

	getTemplate: function () {
		return _.template($('#notification-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		this.$el.fadeOut(0);
		return this;
	},

	show: function () {
		this.$el.fadeIn(1000);
		this.$el.fadeOut(4000);
	},

	storeDeletedTodo: function (todo) {
		this.deletedTodo = todo;
	},

	restoreDeletedTodo: function () {
		this.collection.add(this.deletedTodo);
		this.deletedTodo = undefined;
	}
});