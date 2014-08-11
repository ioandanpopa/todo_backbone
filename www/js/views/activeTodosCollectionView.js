App.Views.ActiveTodosCollectionView = App.Views.TodosCollectionView.extend({
	getTodos: function () {
		return this.collection.getActive();
	}
});
