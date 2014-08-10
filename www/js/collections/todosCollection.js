App.Collections.TodosCollection = Backbone.Collection.extend({
	model: App.Models.TodoModel,

	initialize: function () {
		this.on( "change:completed", this.updateCompletedTodosNr, this);
		this._attributes = {};
	},

	getAttr: function (attr_name) {
		return this._attributes[attr_name];
	},

	setAttr: function (attr_name, value) {
		this._attributes[attr_name] = value;
	},

	updateCompletedTodosNr: function () {
		this._attributes['completedTodosNr'] = 0

		_.each(this.models, _.bind( function(todoModel) {
			if(todoModel.get('completed'))
				this._attributes['completedTodosNr']++;
		}, this));		
	}
});