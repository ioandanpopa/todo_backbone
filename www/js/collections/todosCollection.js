App.Collections.TodosCollection = Backbone.Collection.extend({
	model: App.Models.TodoModel,

	initialize: function () {
		this.on( 'add remove change:completed', this.updateTodosNr, this);
		this._attributes = {};
	},

	getAttr: function (attr_name) {
		return this._attributes[attr_name];
	},

	setAttr: function (attr_name, value) {
		this._attributes[attr_name] = value;
	},

	updateTodosNr: function () {
		this._attributes['completedTodosNr'] = 0;
		this._attributes['remainingTodosNr'] = 0;

		_.each(this.models, _.bind( function(todoModel) {
			if(todoModel.get('completed')){
				this._attributes['completedTodosNr']++;
			}
			else{
				this._attributes['remainingTodosNr']++;
			}
		}, this));		
	}
});