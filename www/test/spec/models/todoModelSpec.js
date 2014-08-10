describe("App.Models.TodoModel", function() {
	var todoModel;

	beforeEach(function(){
		todoModel = new App.Models.TodoModel({ title: "A text." });
	});

	it("has the correct content", function(){
		expect(todoModel.get('title')).toBe("A text.");
		expect(todoModel.get('completed')).toBe(false);
	});

	it("validates correctly the title attribute when its a good value", function () {		
		expect(todoModel.isValid()).toBe(true);
	});

	it("validates correctly the title attribute when its a bad value", function () {
		todoModel.set('title', '');
		expect(todoModel.isValid()).toBe(false);
	});
});
