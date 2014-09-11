describe('App.Views.NewTodoHeaderView', function () {
	var newTodoHeaderView, todosCollection, newTodoHeaderModel;

	beforeEach( function (){
		todosCollection = new App.Collections.TodosCollection();
		newTodoHeaderModel = new App.Models.NewTodoHeaderModel();
		newTodoHeaderView = new App.Views.NewTodoHeaderView({ model: newTodoHeaderModel , collection: todosCollection });
	});

	describe('adding a new todo', function () {		
		var subject;

		beforeEach(function () {
			subject = function () {
				newTodoHeaderView.addTodo();
			};
		});

		it('adds a new element to collection', function () {
			newTodoHeaderModel.set('title', 'New todo.');
			subject();

			expect(todosCollection.at(0).get('title')).toBe('New todo.');
		});
	});

	describe('when pressing the check/uncheck all button', function () {
		beforeEach( function () {			
			todosCollection.add(new App.Models.TodoModel({ title: 'Title1'}));
			todosCollection.add(new App.Models.TodoModel({ title: 'Title2'}));
			todosCollection.add(new App.Models.TodoModel({ title: 'Title3'}));
			newTodoHeaderView.toggleAll();
		});

		it('can check all todos', function () {
			expect(todosCollection.getCompleted().length).toEqual(3);
		});

		it('can uncheck all todos', function () {
			newTodoHeaderView.toggleAll();
			expect(todosCollection.getCompleted().length).toEqual(0);
		});
	});
});
