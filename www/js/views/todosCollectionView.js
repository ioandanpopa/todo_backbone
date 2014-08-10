App.Views.TodosCollectionView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.renderNewElement, this);
	},

	getTemplate: function () {
		return _.template($('#todosCollection-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());
		return this;
	},

	renderNewElement: function (todo) {
		var todoView = new App.Views.TodoView({model: todo});
		this.$('.todos').append(todoView.$el);
		todoView.render();
	}
});
