App.Views.TodosCollectionView = Backbone.View.extend({
	events: {
		'click #add-button': 'addTodo'
	},
	initialize: function() {
		this.collection.on('add', this.render, this);
	},
	getTemplate: function () {
		return _.template($('#todosCollection-template').html());
	},
	render: function() {
		this.$el.html(this.getTemplate()());
		this.collection.forEach( function (todo) {
				var todoView = new App.Views.TodoView({model: todo});
				this.$('.todos').append(todoView.$el);
				todoView.render();
		}, this);
		return this;
	},
	addTodo: function (){
		var title = this.$('#title-input').val();
		var todoModel = new App.Models.TodoModel({ 'title': title, 'completed': false});
		this.collection.add(todoModel);
	}
});