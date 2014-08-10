App.Views.PageView = Backbone.View.extend({
	getTemplate: function () {
		return _.template($('#page-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());

		var notificationModel = new App.Models.NotificationModel();
		new App.Views.NotificationView({ model: notificationModel, collection: this.collection, el: this.$('.notification-area') }).render();
		new App.Views.NewTodoView({ collection: this.collection, el: this.$('.newTodo-area') }).render();
        new App.Views.TodosCollectionView({ collection: this.collection,  el: this.$('.todosCollection-area') }).render();

		return this;
	}
});