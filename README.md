# Actor Lookup Application

## Overview

This is a simple web application that allows users to search for actors or actresses based on movies they have appeared in and find movies based on actor or actress names.

## Functionality

The application has two main features:

1. **Search Actors by Movie:**
   - Users can enter the name of a movie, and the application will fetch and display the actors or actresses who have appeared in that movie.

2. **Search Movies by Actor:**
   - Users can enter the name of an actor or actress, and the application will fetch and display the movies in which the actor or actress has appeared.

## Usage

To use the application:

1. Clone this repository to your local machine.

    ```bash
 [   git clone https://github.com/your-username/actor-lookup-app.git](https://github.com/omkundu/Zentosys-Solutions-Pvt-Ltd/tree/master)
    ```

2. Open the `index.html` file in a web browser.

3. Enter the movie name or actor name in the respective input fields.

4. Click the "Search" button to get the results.

## File Structure

- **index.html:** The main HTML file containing the structure of the web page.
- **script.js:** JavaScript file with functions for searching actors and movies.
- **style.css:** CSS file for styling the web page.
- **README.md:** Documentation file providing information about the application.

## Dependencies

This application relies on the Fetch API to make requests to a backend server. Ensure that the backend server is running on your local machine with command line: npm start this will start the backend server on the port of http://localhost:3000 and configured to handle requests for actors and movies.

## Backend Server

The application assumes the presence of a backend server with the following API endpoints:

- `/actors?movie=<movieName>`: Search for actors based on a given movie name.
- `/movies?actor=<actorName>`: Search for movies based on a given actor name.

for installing the backend server in the terminal write npm "init -y" this will install package-lock.json after that install "npm i" this will install  node-modules to run the backend server.



## Known Issues

- The application may display a 404 error if the backend server or API endpoints are not correctly configured.


