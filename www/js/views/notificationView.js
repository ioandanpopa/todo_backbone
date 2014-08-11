App.Views.NotificationView = Backbone.View.extend({
	events: {
		'click .undo-button': 'restoreDeletedTodo'
	},

	initialize: function () {
		this.collection.on('remove', this.showHandler, this);
		this._attributes = {};
	},

	getAttr: function (attr_name) {
		return this._attributes[attr_name];
	},

	setAttr: function (attr_name, value) {
		this._attributes[attr_name] = value;
	},

	getTemplate: function () {
		return _.template($('#notification-template').html());
	},

	render: function () {
		this.$el.html(this.getTemplate()(this.model.attributes));
		return this;
	},

	showHandler: function (todo) {
		this.storeDeletedTodo(todo);
		this.showView();
	},

	showView: function () {
		if(this.$el.css('display') == 'none'){
			this.$el.fadeIn(1000);
			this.$el.fadeOut(4000);
		}
		else{
			this.$el.fadeOut(4000);	
		}
	},

	storeDeletedTodo: function (todo) {
		this.setAttr('deletedTodo', todo);
	},

	restoreDeletedTodo: function () {
		this.collection.add(this.getAttr('deletedTodo'));
		this.setAttr('deletedTodo', undefined);
	}
});