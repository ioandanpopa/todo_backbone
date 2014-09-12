App.Views.NotificationView = Backbone.View.extend({
	events: {
		'click .undo-button': 'restoreDeletedTodo'
	},

	initialize: function () {
		this.listenTo(this.collection, 'remove', this.showHandler, this);
	},

	getTemplate: function () {
		return _.template($('#notification-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		return this;
	},

	showHandler: function (todo) {
		this.storeDeletedTodo(todo);
		this.showView();
	},

	showView: function () {
		if($(this.el).parent().css('display') == 'none'){
			$(this.el).parent().fadeIn(1000);
			$(this.el).parent().fadeOut(4000);
		}
		else{
			$(this.el).parent().fadeOut(4000);	
		}
	},

	storeDeletedTodo: function (todo) {		
		this.deletedTodo = todo;
	},

	restoreDeletedTodo: function () {
		this.collection.add(this.deletedTodo);
		this.deletedTodo = undefined;
	}
});