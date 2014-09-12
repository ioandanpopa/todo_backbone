App.Views.StatusView = Backbone.View.extend({
	model: App.Models.StatusModel,

	events: {
		'click #completedTodosNr-text': 'clearCompletedTodos'
	},

	bindings: {
		'#remainingTodosNr-text': {
			observe: 'remainingTodosNr',
			updateMethod: 'text',
			onGet: function (value) {
				return 'Remaining (' + value +')';
			}
		},
		'#completedTodosNr-text': { 
			observe: 'completedTodosNr',
			updateMethod: 'text',
			onGet: function (value) {
				return value > 0 ? 'Clear Completed (' +  value +')' : '';
			} 
		}
	},

	initialize: function () {
		this.listenTo(this.collection, 'add remove change:completed', this.updateModelValues, this);
	},

	getTemplate: function () {
		return _.template($('#status-template').html());
	},

	render: function () {
		this.updateModelValues();
		this.$el.html(this.getTemplate()(this.model.attributes));
		this.stickit();

		return this;
	},

	updateModelValues: function () {		
		var defaultCounts = {
			completedTodosNr: 0,
			remainingTodosNr: 0
		};
		var counts = this.collection.countBy(function (todoModel) { 
			return todoModel.get('completed') ? 'completedTodosNr' : 'remainingTodosNr';
		});
		this.model.set(_.defaults(counts, defaultCounts));
	},

	clearCompletedTodos: function () {
		this.collection.removeCompleted();
	}
});
