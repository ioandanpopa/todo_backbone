App.Collection.TodosCollection = Backbone.Collection.extend({
	url: './test/spec/fixtures/todo_list.json',
	model: App.Model.TodoModel,
	nextId: function() {
		return this.length ? this.last().get('id') + 1 : 1;
	}
});