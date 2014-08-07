describe("App.Models.TodoModel", function() {
	var todoModel;

	beforeEach(function(){
		todoModel = new App.Models.TodoModel({"id": 21, "title": "A text.", "completed": false});
	});

	it("has the correct content", function(){
		expect(todoModel.get('id')).toBe(21);
		expect(todoModel.get('title')).toBe("A text.");
		expect(todoModel.get('completed')).toBe(false);
	});
});
