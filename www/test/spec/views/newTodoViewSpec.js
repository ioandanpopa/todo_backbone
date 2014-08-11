describe('App.Views.NewTodoView', function () {
	var newTodoView;
	var todosCollection;

	beforeEach( function (){
		todosCollection = new App.Collections.TodosCollection();
		newTodoView = new App.Views.NewTodoView({ collection: todosCollection });
	});

	describe('when adding a new todo', function () {
		var fixture;
		var subject;

		beforeEach(function () {
			fixture = $('<input type="text" id="title-input"/>');
			newTodoView.$el.append(fixture);

			subject = function () {
				newTodoView.addTodo();
			};
		});

		describe('input has value', function () {
			beforeEach(function () {
				fixture.val('test');
			});

			it('adds new element to collection', function () {
				subject();

				expect(todosCollection.length).toEqual(1);
			});
		});
	});

	describe('when pressing the complete all button', function () {
		var todoModel;

		beforeEach( function () {
			todoModel = new App.Models.TodoModel({ title: 'Title1'})
			todosCollection.add(todoModel);
		});

		it('can complete all todos', function () {
			newTodoView.checkAllTodos();
			expect(todoModel.get('completed')).toBe(true);
		});
	});
});
