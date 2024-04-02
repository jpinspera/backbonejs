let kapilSharma = Backbone.Model.extend({
    show: function(){
        console.log("Colors Tv");
    }
})

let kapilSharmaShow = kapilSharma.extend({
    show: function(){
        kapilSharma.prototype.show.apply();
        console.log("Sony Tv");
    }
});

let k = new kapilSharmaShow();