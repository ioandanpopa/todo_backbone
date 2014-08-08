App.Views.NewTodoView = Backbone.View.extend({
	events: {
		'click #add-button': 'addTodo'
	},

	getTemplate: function () {
		return _.template($('#newTodo-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()());
		return this;
	},

	addTodo: function (){
		var title = this.$('#title-input').val();
		var todoModel = new App.Models.TodoModel({ 'title': title, 'completed': false});
		this.collection.add(todoModel);
		this.$('#title-input').val('');
	}
});