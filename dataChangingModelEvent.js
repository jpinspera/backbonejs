let Students = Backbone.Model.extend({
    initialize: function(){
        // console.log("working")
        this.bind("change:name", function(model){
            console.log("Model changed");
        })
    }
})

let student = new Students({
    name: "Jai Parkash",
    rollNo: 1
});