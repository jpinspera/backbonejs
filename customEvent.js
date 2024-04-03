let person = {
    name: "Jai Parkash",
    test: function(){
        this.trigger("demo");
    }
}

_.extend(person, Backbone.Events)
person.on("demo", function(){
    console.log("Custom event log");
})