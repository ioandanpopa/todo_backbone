App.Views.CompletedTodosCollectionView = App.Views.TodosCollectionView.extend({
	getTodos: function () {
		return this.collection.getCompleted();
	}
});
