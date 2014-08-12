App.Views.StatusView = Backbone.View.extend({
	events: {
		'click #completedTodosNr-text': 'clearCompletedTodos'
	},

	model: App.Models.StatusModel,

	initialize: function () {
		this.listenTo(this.collection, 'add remove change:completed', this.refreshStatistics, this);
	},

	getTemplate: function () {
		return _.template($('#status-template').html());
	},

	render: function () {
		this.updateModelValues();
		this.$el.html(this.getTemplate()(this.model.attributes));
		return this;
	},

	refreshStatistics: function () {
		this.render();
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
