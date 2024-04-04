let first = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log("This is our first View");
    }
});

let second = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log("This is our second View");
    }
});

let third = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log("This is our third View");
    }
});

let routeExample = Backbone.Router.extend({
    routes: {
        'view1': 'firstView',   //http://127.0.0.1:5500/index.html#/view1
        'view2': 'secondView',
        '': 'thirdView'         //http://127.0.0.1:5500/index.html
    },
    firstView: function(){
        // console.log("This is example of URL");
        let fv = new first();
    },
    secondView: function(){
        // console.log("second");
        let sv = new second();

    },
    thirdView: function(){
        // console.log("third");
        let tv = new third();
    }
});

let router = new routeExample();
Backbone.history.start();