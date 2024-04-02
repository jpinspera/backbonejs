let Team = Backbone.Model.extend();

let player1 = new Team({
    Name: "Dhoni",
    PlayedFrom: "India",
    Performance: "Excellent",
    runs: 98
});

let player2 = new Team({
    Name: "Virat Kohli",
    PlayedFrom: "India",
    Performance: "Good",
    runs: 75
});

// Create collection
let Players = Backbone.Collection.extend();
let p = new Players([
    player1,
    player2
]); 

// collection operation
// add() 
p.add(new Team({Name: "Trent Bolt", PlayedFrom: "NewZeland", Performance: "Good"}))

// unshift()
p.unshift(new Team({Name: "Mark wood", PlayedFrom: "England", Performance: "Very Good"}))

// Store model at particular index
p.add(new Team({Name: "Yuvraj", PlayedFrom: "India", Performance: "Excellent"}), {at: 2})

// shift()
p.shift()

// pop()
p.pop()

// remove() - p.remove(<cid>) 
p.remove('c4')

// where()
p.where({Name: "Dhoni"})

// each()
p.each(function(player){
    console.log(player)
})

// filter()
let filteredData = p.filter(function(player){
    return player.get('runs') > 75;
})