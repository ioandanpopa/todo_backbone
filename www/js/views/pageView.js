App.Views.PageView = Backbone.View.extend({
	getTemplate: function () {
		return _.template($('#page-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());		
		this.$('.notification-area').html(new App.Views.NotificationView({ model: new App.Models.NotificationModel(), collection: this.collection }).render().el);
		this.$('.newTodo-area').html(new App.Views.NewTodoHeaderView({ model: new App.Models.NewTodoHeaderModel(), collection: this.collection }).render().el);
		this.$('.status-area').html(new App.Views.StatusView({ model: new App.Models.StatusModel(), collection: this.collection }).render().el);
		this.renderTodoCollectionView(App.Views.TodosCollectionView);

		return this;
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