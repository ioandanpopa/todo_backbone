define([
    'jquery',
    'underscore',
    'backbone',
    'views/active',
    'views/completed'
],
    function($, _, Backbone, ToDoListView) {
        var AppRouter = new Backbone.Router.extend({
            routes: {
                '*actions': 'defaultAction'
            }
        });

        var initialize = function() {
            var app_router = new AppRouter;

            app_router.on('defaultAction', function() {
                var toDoListView = new ToDoListView();
                toDoListView.render();
            });

            Backbone.history.start();
        };

        return {
            initialize: initialize
        };
    }
)