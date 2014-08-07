App.View.TodosCollectionView = Backbone.View.extend({
	template: _.template($('#todosCollection-template').html()),
	events: {
		'click #add-button': 'addTodo'
	},
	initialize: function() {
		this.collection.on('all', this.render, this);
	},
	render: function() {
		this.$el.html(this.template());
		this.collection.forEach( function (todo) {
				var todoView = new App.View.TodoView({model: todo});
				this.$('.todos').append(todoView.$el);
				todoView.render();
		}, this);
		return this;
	},
	addTodo: function (){
		var title = $('#title-input').val();
		var nextId = this.collection.nextId();
		var todoModel = new App.Model.TodoModel({ 'id': nextId, 'title': title, 'completed': false});
		this.collection.add(todoModel);
	}

});