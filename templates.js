let View = Backbone.View.extend({
    // Iniline Template - underscore js 
    // template: _.template("This is template example"),
    template: _.template($('#demoTemplate').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        // console.log("working");
        // this.$el.html("Template in backbonejs");
        this.$el.html(this.template);
    }
});

let v = new View({
    el: "#demo"
});