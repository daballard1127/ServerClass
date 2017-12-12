// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};


// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
var jedi = {

	name:"DB Jedi",
	role:"Masetr Jedi",
	age: 100,
	forcePoints: 4000
};
//

// Routes
// ===========================================================
// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Page!");
// });

// app.get("/yoda", function(req, res) {
//   res.json(yoda);
// });

// app.get("/darthmaul", function(req, res) {
//   res.json(darthmaul);
// });

// // Create a new Express route that leads users to the new Obi Wan Kenobi Data
// // Follow the same format as the Yoda and Darth Maul routes
// //

// // YOUR CODE GOES HERE
// app.get("/jedi", function(req, res) {
//   res.json(jedi);
// });
//
//
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:characters?", function(req, res) {
  // What does this code do?
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    return res.send("No character found");
  }

  // What does this code do?
  return res.json(characters);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



