let firstView = Backbone.View.extend({
    events:{
        'click #btnEvent': 'Onclick'
    },
    Onclick: function(){
        // console.log("Welcome to backbonejs");
        this.$el.html("Welcome to backbonejs");
    },
    template: _.template($('#eventContainer').html()),
    render: function(){
        this.$el.html(this.template);
    }
});

let fv = new firstView({
    el: "#demo",
    el: "#testing"
});

fv.render();