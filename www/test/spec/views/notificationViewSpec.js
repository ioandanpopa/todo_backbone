describe('App.Views.NotificationView', function () {
	var todoModel;
	var todosCollection;
	var notificationView;

	beforeEach( function () {
		todoModel = new App.Models.TodoModel({ title: 'Test.' });
		todosCollection = new App.Collections.TodosCollection();
		notificationView = new App.Views.NotificationView({ model: new App.Models.NotificationModel(), collection: todosCollection});
	});

	describe('after a todo has been deleted', function () {
		beforeEach( function () {
			todosCollection.add(todoModel);
			todosCollection.remove(todoModel);
		});
		
		it('can store the deleted todo', function () {
			expect(notificationView.getAttr('deletedTodo').get('title')).toEqual('Test.');
		});

		it('can restore the deleted todo', function () {
			notificationView.restoreDeletedTodo();
			expect(todosCollection.at(0).get('title')).toEqual('Test.');
		});
	});
});