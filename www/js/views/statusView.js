App.Views.StatusView = Backbone.View.extend({
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
		var completedTodosNr = 0;
		var remainingTodosNr = 0;

		_.each(this.collection.models, _.bind( function(todoModel) {
			if(todoModel.get('completed')){
				completedTodosNr++;
			}
			else{
				remainingTodosNr++;
			}
		}, this));

		this.model.set('remainingTodosNr', remainingTodosNr);
		this.model.set('completedTodosNr', completedTodosNr);
	}
});
