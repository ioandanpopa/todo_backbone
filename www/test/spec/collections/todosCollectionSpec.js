describe("App.Collections.TodosCollection", function () {
	var todosCollection;

	beforeEach( function (){
		todosCollection = new App.Collections.TodosCollection();
	});

	describe('fetch', function () {
		beforeEach( function (done) {
			todosCollection.fetch({ url: 'spec/fixtures/todo_list.json' })
				.done( function () {
					done();
				});
		});

		it('has correct size', function (done) {
			expect(todosCollection.length).toBe(2);

			done();
		});
	});

	describe('Number of completed todos', function () {
		var todoModel;
		
		beforeEach( function () {
			todoModel = new App.Models.TodoModel({ title: 'Title2'});
			todosCollection.add(new App.Models.TodoModel({ title: 'Title1', completed: true }));
			todosCollection.add(todoModel);
		});

		it('can be calculated correctly', function () {			
			todosCollection.updateTodosNr();	
			expect(todosCollection.getAttr('completedTodosNr')).toEqual(1);
		});

		it('can be updated by the change event of the model', function () {
			todoModel.set('completed', true);
			expect(todosCollection.getAttr('completedTodosNr')).toEqual(2);
		});

	});

	describe('Number of remaining todos', function () {
		var todoModel;
		
		beforeEach( function () {
			todoModel = new App.Models.TodoModel({ title: 'Title2'});
			todosCollection.add(new App.Models.TodoModel({ title: 'Title1', completed: true }));
			todosCollection.add(todoModel);
		});

		it('can be calculated correctly', function () {			
			todosCollection.updateTodosNr();	
			expect(todosCollection.getAttr('remainingTodosNr')).toEqual(1);
		});

		it('can be updated by the change event of the model', function () {
			todoModel.set('completed', true);
			expect(todosCollection.getAttr('remainingTodosNr')).toEqual(0);
		});

	});
});