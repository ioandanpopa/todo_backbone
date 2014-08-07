App.View.TodoView = Backbone.View.extend({
	template: _.template($('#todo-template').html()),
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});