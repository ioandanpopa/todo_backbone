App.View.TodosCollectionView = Backbone.View.extend({
	template: _.template($('#todosCollection-template').html()),
	render: function () {
		this.$el.html(this.template());
		this.collection.forEach( function (todo) {
				var todoView = new App.View.TodoView({model: todo});
				this.$('.todos').append(todoView.$el);
				todoView.render();
		}, this);
		return this;
	}
});