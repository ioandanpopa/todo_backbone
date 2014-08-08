describe('App.Views.NewTodoView', function () {
	var newTodoView;
	var todoCollection;
	var fixture;
	var subject;

	beforeEach( function (){
		todoCollection = new App.Collections.TodosCollection();
		fixture = $('<input type="text" id="title-input"/>');
		newTodoView = new App.Views.NewTodoView({ collection: todoCollection });
		newTodoView.$el.append(fixture);
	});

	describe('addTodo', function () {
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

				expect(todoCollection.length).toEqual(1);
			});
		});
	});
});