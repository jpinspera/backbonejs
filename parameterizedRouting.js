let view1 = Backbone.View.extend({
    render: function(){
        this.$el.html("My favourite player is Dhoni");
    }
});

let view2 = Backbone.View.extend({
    render: function(){
        this.$el.html("My favourite player is Virat Kohli");
    }
});

let view3 = Backbone.View.extend({
    render: function(){
        this.$el.html("My favourite player is Rinku Singh");
    }
});

let router = Backbone.Router.extend({
    routes: {
        'first/:tShirtNo': 'firstPlayer', //once we defined parameterized then it is mendatory to pass value else it won't work
        'second': 'secondPlayer',
        'third/:tShirtNumber/:playerName': 'thirdPlayer'
    },
    firstPlayer: function(tShirtNo){
        console.log(tShirtNo)
        let view = new view1({
            el: '#demo'
        });
        
        view.render();
    },
    secondPlayer: function(){
        let view = new view2({
            el: '#demo'
        });
        
        view.render();
    },
    thirdPlayer: function(tShirtNumber, playerName){
        console.log(tShirtNumber, playerName)
        let view = new view3({
            el: '#demo'
        });
        
        view.render();
    }
})

let r = new router();
Backbone.history.start();