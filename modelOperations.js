let Tutorial = Backbone.Model.extend({
    defaults:{
        platform: "You tube"
    }
});

let backbone = new Tutorial();

backbone.set({
    name: "Jai Parkash",
    teach: "Java"
});

// let backbone = new Tutorial({
//     name: "Jai Parkash",
//     teach: "Backbone Js",
//     platform: "YouTube"
// });