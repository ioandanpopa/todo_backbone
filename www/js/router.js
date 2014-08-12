App.TodoRouter = Backbone.Router.extend({
    routes: {
        'all': 'all',
        'active': 'active',
        'completed': 'completed',
        '*actions': 'defaultRoute'
    },

    getGlobalPageViewInstance: function () {
        if(!this.globalPageView){
            this.globalPageView = new App.Views.PageView({ collection: new App.Collections.TodosCollection(), el: $('.container') }).render();    
        }
        return this.globalPageView;
    },

    defaultRoute: function () {
        this.getGlobalPageViewInstance();
    },

    all: function () {
        this.getGlobalPageViewInstance().renderTodoCollectionView(App.Views.TodosCollectionView);
    },

    active: function () {
    	this.getGlobalPageViewInstance().renderTodoCollectionView(App.Views.ActiveTodosCollectionView);
    },

    completed: function () {
        this.getGlobalPageViewInstance().renderTodoCollectionView(App.Views.CompletedTodosCollectionView);
    }    
});