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
		var todoModel = new App.Models.TodoModel({ title: this.$('#title-input').val() });

		if(todoModel.isValid())
		{
			this.collection.add(todoModel);
			this.$('#title-input').val('');
		}
		else
		{
			todoModel.destroy();
		}
	}
});