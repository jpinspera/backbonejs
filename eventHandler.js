let FirstModel = Backbone.Model.extend();

let fm = new FirstModel({
    title: "Jugnu",
    artist: "Baadshah"
});

let Song = Backbone.View.extend({
    events: {
        "click": 'OnClick',
        'click .btnStop': 'OnClickStop'
    },

    OnClick: function(){
        console.log("Song Playing")
    },

    OnClickStop: function(e){
        e.stopPropagation(); //This is used to not apply generic function (in this case OnClick is running on stop)
        console.log("Song Stopped")
    },

    render: function(){
        this.$el.html(this.model.get("title") + "<button class='btnPlay'>Play</button> <button class='btnStop'>Stop</button>");
    }
})

let song = new Song({
    el: '#demo',
    model: fm
});

song.render();