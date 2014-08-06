describe("TodoModel", function() {
	var todoModel;

	beforeEach(function(){
		todoModel = new TodoModel({"id": 21, "title": "A text.", "completed": false});
	});

	it("can be instantiated", function() {
		expect(todoModel).not.toBeNull();
	});

	it("has content", function(){
		expect(todoModel.get('attributes')).not.toBeNull();
	});

	it("has the correct content", function(){
		expect(todoModel.get('id')).toBe(21);
		expect(todoModel.get('title')).toBe("A text.");
		expect(todoModel.get('completed')).toBe(false);
	});
});
 