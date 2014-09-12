describe('App.Views.TodoView', function () {
	var todoView, todosCollection;

	beforeEach(function () {
		var todoModel1 = new App.Models.TodoModel({ title: 'Sleep!' });
		var todoModel2 = new App.Models.TodoModel({ title: 'Wake up!' });

		todosCollection = new App.Collections.TodosCollection([todoModel1, todoModel2]);
		todoView = new App.Views.TodoView({ model: todoModel1 });
	});

	it('can be removed from the collection', function () {
		todoView.destroy();
		expect(todosCollection.length).toBe(1);
	});
});