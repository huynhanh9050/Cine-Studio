// Sample actor data (replace with your own data)
const actorData = {
    name: "Actor Name",
    image: "actor.jpg",
    movies: [
        { title: "Movie 1", year: "2020", image: "movie1.jpg" },
        { title: "Movie 2", year: "2018", image: "movie2.jpg" },
        { title: "Movie 3", year: "2022", image: "movie3.jpg" },
        // Add more movie data here
    ]
};

// Display actor details and movies on the web page
const actorDetailsElement = document.getElementById("actor-details");
const moviesListElement = document.getElementById("movies-list");

// Display actor details
const actorInfoElement = document.createElement("div");
actorInfoElement.classList.add("actor-info");

const actorImageElement = document.createElement("img");
actorImageElement.src = actorData.image;
actorImageElement.alt = actorData.name;

const actorNameElement = document.createElement("h2");
actorNameElement.textContent = actorData.name;

actorInfoElement.appendChild(actorImageElement);
actorInfoElement.appendChild(actorNameElement);

actorDetailsElement.appendChild(actorInfoElement);

// Display actor's movies
actorData.movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.year;

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieYear);

    moviesListElement.appendChild(movieCard);
});
