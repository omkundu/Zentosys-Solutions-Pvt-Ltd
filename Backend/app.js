// Importing required modules
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Array containing names of actors or actresses along with their movies
const actorsData = [
  { name: 'Tom Hanks', movies: ['Forrest Gump', 'Cast Away', 'Saving Private Ryan'] },
  { name: 'Meryl Streep', movies: ['The Devil Wears Prada', 'Mamma Mia!', 'Sophie\'s Choice'] },
  { name: 'Leonardo DiCaprio', movies: ['Inception', 'Titanic', 'The Revenant'] },
  { name: 'Jennifer Lawrence', movies: ['The Hunger Games', 'Silver Linings Playbook', 'Joy'] },
  { name: 'Denzel Washington', movies: ['Training Day', 'Glory', 'Malcolm X'] }
];

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Endpoint for searching actors based on movie name
app.get('/actors/:movieName', (req, res) => {
  // Extract movieName from the request parameters
  const movieName = req.params.movieName;
  // Array to store matching actor names
  const matchingActors = [];

  // Loop through actorsData to find actors who appeared in the specified movie
  for (const actor of actorsData) {
    if (actor.movies.includes(movieName)) {
      matchingActors.push(actor.name);
    }
  }

  // Check if any matching actors were found
  if (matchingActors.length === 0) {
    // If no matching actors found, send a 404 status with an error message
    res.status(404).json({ error: `No actors found for the movie: ${movieName}` });
  } else {
    // If matching actors found, send a success response with actor names
    res.send(`Actors in the movie '${movieName}': ${matchingActors.join(', ')}`);
  }
});

// Endpoint for searching movies based on actor name
app.get('/movies/:actorName', (req, res) => {
  // Extract actorName from the request parameters
  const actorName = req.params.actorName;
  // Find the actor object in actorsData with the specified name
  const actor = actorsData.find(actor => actor.name === actorName);

  // Check if the actor was found
  if (!actor) {
    // If actor not found, send a 404 status with an error message
    res.status(404).json({ error: `No movies found for the actor: ${actorName}` });
  } else {
    // If actor found, send a success response with movies featuring the actor
    res.send(`Movies featuring ${actorName}: ${actor.movies.join(', ')}`);
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
