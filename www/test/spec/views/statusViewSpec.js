describe('App.Views.StatusViewSpec', function () {
	var statusView;
	var statusModel;
	var todosCollection;
	var todoModel;
	
	beforeEach( function (){
		todosCollection = new App.Collections.TodosCollection();
		statusModel = new App.Models.StatusModel();
		statusView = new App.Views.StatusView({ model: statusModel, collection: todosCollection });		
	});

	describe('when changing the state of items in the collection', function () {
		beforeEach( function () {
			todoModel = new App.Models.TodoModel({ title: 'Test', completed: true });
			todosCollection.add(todoModel);
			todosCollection.add(new App.Models.TodoModel({ title: 'Test2' }));
		});

		it('shows the correct active todos number', function () {
			expect(statusModel.get('remainingTodosNr')).toEqual(1);
		});

		it('shows the correct completed todos number', function () {
			todoModel.set('completed', false);
			expect(statusModel.get('completedTodosNr')).toEqual(0);
		});
	});
});