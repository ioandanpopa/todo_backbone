App.Views.PageView = Backbone.View.extend({
	getTemplate: function () {
		return _.template($('#page-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());

		new App.Views.NotificationView({ model: new App.Models.NotificationModel(), collection: this.collection, el: this.$('.notification-area') }).render();
		new App.Views.NewTodoView({ collection: this.collection, el: this.$('.newTodo-area') }).render();
        new App.Views.TodosCollectionView({ collection: this.collection,  el: this.$('.todosCollection-area') }).render();
		new App.Views.StatusView({ model: new App.Models.StatusModel(), collection: this.collection,  el: this.$('.status-area') }).render();

		return this;
	}
});