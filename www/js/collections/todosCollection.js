App.Collection.TodosCollection = Backbone.Collection.extend({
	url: './test/spec/fixtures/todo_list.json',
	model: App.Model.TodoModel
});