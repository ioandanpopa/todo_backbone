App.Views.PageView = Backbone.View.extend({
	getTemplate: function () {
		return _.template($('#page-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());

		var notificationModel = new App.Models.NotificationModel();	
		this.$('.notification-area').html(new App.Views.NotificationView({ model: notificationModel, collection: this.collection }).render().el);
		this.$('.newTodo-area').html(new App.Views.NewTodoView({ collection: this.collection }).render().el);
		this.$('.status-area').html(new App.Views.StatusView({ model: new App.Models.StatusModel(), collection: this.collection }).render().el);
		this.renderAllTodos();

		return this;
	},

	renderAllTodos: function () {
		this.renderTodoCollectionView(App.Views.TodosCollectionView);
	},

	renderActiveTodos: function () {
		this.renderTodoCollectionView(App.Views.ActiveTodosCollectionView);
	},

	renderCompletedTodos: function () {
		this.renderTodoCollectionView(App.Views.CompletedTodosCollectionView);
	},

	renderTodoCollectionView: function (type) {
		this.destroyGlobalTodosCollectionView();
		this.globalTodosCollectionView = new type({ collection: this.collection});
		this.$('.todosCollection-area').html(this.globalTodosCollectionView.render().el);	
	},

	destroyGlobalTodosCollectionView: function (){
		if(this.globalTodosCollectionView){
			this.globalTodosCollectionView.remove();
		}
	}
});