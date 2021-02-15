// OBTENER Y PINTAR LISTAS DE PELICULAS EN LA PANTALLA PRINCIPAL
const getPopularFilms = (path) => {
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

getPopularFilms('popular')
getPopularFilms('top_rated') 
getPopularFilms('upcoming') 