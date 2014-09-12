App.Views.NewTodoHeaderView = Backbone.View.extend({	
	events: {
		'click .add-button': 'addTodo',
		'click #checkAll-button': 'toggleAll'
	},

	bindings: {
		'.title-input': 'title'
	},

	getTemplate: function () {
		return _.template($('#newTodo-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		this.stickit();

		return this;
	},

	addTodo: function (){
		if (!this.model.isValid())
			return;
		this.collection.add(new App.Models.TodoModel({ title: this.model.get('title') }));
		this.model.set('title', '');
	},

	toggleAll: function () {
		this.model.set('allChecked', !this.model.get('allChecked'));

		this.collection.each( function (todo) {
			todo.set('completed', this.model.get('allChecked'));
		}, this);
	}
});