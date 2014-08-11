App.Collections.TodosCollection = Backbone.Collection.extend({
	model: App.Models.TodoModel,

	getAll: function () {
		return this;
	},

	getActive: function () {
		return new App.Collections.TodosCollection(this.where({ completed: false }));
	},

	getCompleted: function () {
		return new App.Collections.TodosCollection(this.where({ completed: true }));
	}
});