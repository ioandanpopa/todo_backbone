App.TodoRouter = Backbone.Router.extend({
    routes: {
        '*actions': 'defaultAction'
    },

    defaultAction: function () {
        var todoCollection = new App.Collections.TodosCollection();
       	new App.Views.TodosCollectionView({ collection: todoCollection, el: $('.container') }).render();
    }
});