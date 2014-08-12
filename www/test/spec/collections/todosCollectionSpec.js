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

	describe('operations', function () {
		beforeEach( function () {
			todosCollection.add(new App.Models.TodoModel({ title: 'Get something' }));
			todosCollection.add(new App.Models.TodoModel({ title: 'Do something' , completed: true }));
			todosCollection.add(new App.Models.TodoModel({ title: 'Try something' }));
		});

		it('can return all todos', function () {			
			expect(todosCollection.getAll().length).toEqual(3);
		});

		it('can return all active todos', function () {			
			expect(todosCollection.getActive().length).toEqual(2);
		});

		it('can return all completed todos', function () {			
			expect(todosCollection.getCompleted().length).toEqual(1);
		});

		it('can remove all completed todos', function () {
			todosCollection.removeCompleted();
			expect(todosCollection.length).toEqual(2);
		});

	});
});