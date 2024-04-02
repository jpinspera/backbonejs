let Player = Backbone.Model.extend();

let player = new Player({
    Name: "Dhoni",
    PlayedFrom: "India"
});

let PlayerView = Backbone.View.extend({
    render: function(){
        console.log("Working");
        this.$el.html("Passing Data Demo");
        this.$el.html(this.model.get("Name"));
    }
});

let pv = new PlayerView({
    el: '#demo',
    model: player
});
pv.render();