describe('App.Views.NewTodoView', function () {
	var newTodoView;
	var todosCollection;
	var fixture;
	var subject;

	beforeEach( function (){
		todosCollection = new App.Collections.TodosCollection();
		fixture = $('<input type="text" id="title-input"/>');
		newTodoView = new App.Views.NewTodoView({ collection: todosCollection });
		newTodoView.$el.append(fixture);
	});

	describe('when adding a new todo', function () {
		beforeEach(function () {
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
		beforeEach( function () {
			todosCollection.remove();
			todosCollection.add(new App.Models.TodoModel({ title: 'Title1'}));
			todosCollection.add(new App.Models.TodoModel({ title: 'Title2'}));
		});

		it('can complete all todos', function () {
			newTodoView.checkAllTodos();
			expect(todosCollection.getAttr('completedTodosNr')).toEqual(todosCollection.length);
		});
	});
});
