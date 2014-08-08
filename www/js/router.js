App.TodoRouter = Backbone.Router.extend({
    routes: {
    	
        '*actions': 'defaultAction'
    },

    defaultAction: function () {
        var todoCollection = new App.Collections.TodosCollection();
        new App.Views.NewTodoView({ collection: todoCollection, el: $('.container') }).render();
        new App.Views.TodosCollectionView({ collection: todoCollection,  el: $('.todosCollection') });
    }
});