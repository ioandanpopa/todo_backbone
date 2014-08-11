App.Views.StatusView = Backbone.View.extend({
	model: App.Models.StatusModel,

	initialize: function () {
		this.collection.on( 'add remove change:completed', this.updateRemainingNr, this);
	},

	getTemplate: function () {
		return _.template($('#status-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		return this;
	},

	updateRemainingNr: function () 
	{
		this.updateModelValues();
		this.render();
	},

	updateModelValues: function () {
		this.model.set('remainingTodosNr', this.collection.getAttr('remainingTodosNr'));
		this.model.set('completedTodosNr', this.collection.getAttr('completedTodosNr'));
	}
});
