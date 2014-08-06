describe("TodosCollection", function () {
	var todosCollection;

	beforeEach( function (){
		todosCollection = new TodosCollection();
	});

	describe('todosCollection fetch', function () {
		beforeEach(function (done) {
			todosCollection.fetch({ url: 'spec/fixtures/todo_list.json' })
				.done(function () {
					done();
				});
		});

		it("has correct size", function (done) {
			expect(todosCollection.length).toBe(2);

			done();
		});
	});
});