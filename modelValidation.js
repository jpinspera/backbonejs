let Tutorial = Backbone.Model.extend({
    validate: function(attrs){
        if(attrs.age < 1){
            return "Age should not be negative";
        }
    }
});

let backbone = new Tutorial({
    name: "Jai Parkash",
    age: -1
});

