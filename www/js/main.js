//Create aliases for files from the lib folder
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min'
    }
});

require(
    function(App){
    App.initialize();
});
