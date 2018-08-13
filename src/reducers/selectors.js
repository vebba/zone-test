export const moviesSelector = state => state.movies;
export const currentRate = state => state.currentRate;
export const getSelectedGenres = state => state.selectedGenres;
export const genres = state => state.genres;

export const getFilteredMovies = state => {
    const {movies} = state;
    const filteredByGenre = movies.filter(movie => compare(movie['genre_ids'], getSelectedGenres(state)));
    if(filteredByGenre.length)
        return filteredByGenre.filter(movie => movie.vote_average >= currentRate(state));
    else {
        return filteredByGenre
    }

};



const compare = (ar1, ar2) => {
    return ar2.every(item => ar1.indexOf(item) >= 0)
};
