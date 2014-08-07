App.TodoRouter = Backbone.Router.extend({
    routes: {
        '*actions': 'defaultAction'
    },
    defaultAction: function () {
        var todoCollection = new App.Collection.TodosCollection();

        todoCollection.fetch().done( function () {
            new App.View.TodosCollectionView({collection: todoCollection, el: $('.container')}).render();
        });
    }
});