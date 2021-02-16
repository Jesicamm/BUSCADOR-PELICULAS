//variables globales
let inputValue = document.getElementById("search");
let inputId = document.getElementById("searchid");

// OBTENER Y PINTAR LISTAS DE PELICULAS EN LA PANTALLA PRINCIPAL
const getFilms = (path) => {
    fetch(`https://api.themoviedb.org/3/movie/${path}?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es`)
    .then(response => response.json())
    .then(data => {
     let movies =  data.results;
    renderMovies(movies, path)
    })
}

const renderMovies = (movies, path) => {
    
    movies.forEach(
        movie => document.querySelector(`#printed-${path}`).innerHTML+=
    `<div id="film-Container">
          <h2 id="tittle-film">${movie.original_title}</h2>
         <img id="photo-film" src="https://image.tmdb.org/t/p/w185${movie.poster_path}">
         </div>`
)};

getFilms('popular')
getFilms('top_rated') 
getFilms('upcoming') 

//BUSCAR PELÍCULAS X NOMBRE
const searchFilms = () => {
    let query = inputValue.value
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es&query=${query}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
    })   
}

//BUSCAR PELÍCULAS X id
const searchId = () => {
    let id = inputId.value;
    fetch(`https://api.themoviedb.org/3/find/${id}?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es&external_source=imdb_id`)
    .then(response => response.json())
    .then(data => {
        console.log(data.movie_results[0].original_title);
    })   
}