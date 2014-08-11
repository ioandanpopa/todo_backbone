App.Views.TodosCollectionView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add change:completed', this.render, this);
	},

	getTemplate: function () {
		return _.template($('#todosCollection-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());
		this.renderAllElements();
		return this;
	},

	renderNewElement: function (todo) {
		var todoView = new App.Views.TodoView({model: todo});
		this.$('.todos').append(todoView.$el);
		todoView.render();
	},

	renderAllElements: function () {
		this.getTodos().each( function (todo) {
			this.renderNewElement(todo);
		}, this);
	},

	getTodos: function () {
		return this.collection.getAll();
	}
});
