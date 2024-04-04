let pizza = Backbone.View.extend({
    render: function(){
        this.$el.html("You ordered pizza");
    }
});

let momos = Backbone.View.extend({
    render: function(){
        this.$el.html("You ordered momos");
    }
});

let burger = Backbone.View.extend({
    render: function(){
        this.$el.html("You ordered burger");
    }
});

let routerDemo = Backbone.Router.extend({
    routes: {
        'firstOrder': 'pizzaOrder',
        'secondOrder': 'momosOrder', //http://127.0.0.1:5500/index.html#/secondOrder
        'thirdOrder': 'burgerOrder',
        '*other': 'default'         //http://127.0.0.1:5500/index.html
    },
    pizzaOrder: function(){
        let view = new pizza({
            el: '#demo'
        });
        
        view.render();
    },
    momosOrder: function(){
        let view = new momos({
            el: '#demo'
        });
        
        view.render();
    },
    burgerOrder: function(){
        let view = new burger({
            el: '#demo'
        });
        
        view.render();
    },
    default: function(){
        console.log("You ordered nothing");
    }
})

let router = new routerDemo();
Backbone.history.start();

let foodCourt = Backbone.View.extend({
    events: {
        "click": "onClick"
    },
    onClick: function(e){
        let $li = $(e.target);
        router.navigate($li.attr("data-url"),{trigger: true});
    }
})

let v = new foodCourt({
    el: "#orderNav"
})