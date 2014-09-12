describe('App.Views.StatusViewSpec', function () {
	var statusView, statusModel, todosCollection, todoModel;
	
	beforeEach( function (){
		todoModel = new App.Models.TodoModel({ title: 'Test', completed: true });
		todosCollection = new App.Collections.TodosCollection();
		todosCollection.add(todoModel);
		todosCollection.add(new App.Models.TodoModel({ title: 'Test2' }));
		statusModel = new App.Models.StatusModel();
		statusView = new App.Views.StatusView({ model: statusModel, collection: todosCollection });		
	});

	describe('when updating the model values', function () {
		beforeEach( function () {
			statusView.updateModelValues();
		});

		it('shows the correct active todos number', function () {
			expect(statusModel.get('remainingTodosNr')).toEqual(1);
		});

		it('shows the correct completed todos number', function () {
			expect(statusModel.get('completedTodosNr')).toEqual(1);
		});
	});
});