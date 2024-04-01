
// Create Model
let Tutorial = Backbone.Model.extend({
    initialize: function(){
        console.log("Welcome to backbone js");
    }
});

// Create Object of model
let backbone = new Tutorial();