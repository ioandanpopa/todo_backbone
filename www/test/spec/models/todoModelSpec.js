describe("App.Models.TodoModel", function() {
	var todoModel;

	beforeEach(function(){
		todoModel = new App.Models.TodoModel({ title: "A text." });
	});

	it("has the correct default completed value", function(){
		expect(todoModel.get('completed')).toBe(false);
	});

	it("validates correctly the title attribute when its a good value", function () {		
		expect(todoModel.isValid()).toBe(true);
	});
});
