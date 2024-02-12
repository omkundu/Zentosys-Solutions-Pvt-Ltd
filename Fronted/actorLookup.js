// Function to search for actors based on a given movie name
function findMoviesByActorName(actorName) {
    // Get the value entered in the 'movieInput' element
    const movieName = document.getElementById('movieInput').value;
  
    // Make a fetch request to the backend API to search for actors by movie name
    fetch(`http://localhost:3000/actors/${encodeURIComponent(movieName)}`)
      // Handle the response from the server
      .then(response => response.text())
      // Update the 'actorsResult' element with the result from the server
      .then(result => document.getElementById('actorsResult').innerText = result);
  }
  
  // Function to search for movies based on a given actor name
  function findActorByMoviesName(movieName) {
    // Get the value entered in the 'actorInput' element
    const actorName = document.getElementById('actorInput').value;
  
    // Make a fetch request to the backend API to search for movies by actor name
    fetch(`http://localhost:3000/movies/${encodeURIComponent(actorName)}`)
      // Handle the response from the server
      .then(response => response.text())
      // Update the 'moviesResult' element with the result from the server
      .then(result => document.getElementById('moviesResult').innerText = result);
  }
  


