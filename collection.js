let Team = Backbone.Model.extend();

let player1 = new Team({
    Name: "Dhoni",
    PlayedFrom: "India",
    Performance: "Excellent"
});

let player2 = new Team({
    Name: "Virat Kohli",
    PlayedFrom: "India",
    Performance: "Good"
});

// Create collection
let Players = Backbone.Collection.extend();
let p = new Players([
    player1,
    player2
]); 