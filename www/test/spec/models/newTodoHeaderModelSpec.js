describe('App.Models.NewTodoHeaderModel', function () {
	var newTodoHeaderModel, subject;

	beforeEach( function () {
		newTodoHeaderModel = new App.Models.NewTodoHeaderModel();
		
		subject = function () {
			return newTodoHeaderModel.isValid()
		};
	});

	describe('validation', function () {
		it('validates correctly a bad value', function () {
			expect(subject()).toEqual(false);
		});

		it('validates correctly a good value', function () {
			newTodoHeaderModel.set('title', 'Something');

			expect(subject()).toEqual(true);
		});
	});
});