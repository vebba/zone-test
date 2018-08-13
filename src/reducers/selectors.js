import {createSelector} from 'reselect/es'

export const getMovies = state => state.movies;
export const currentRate = state => state.currentRate;
export const getSelectedRating = state => state.currentRate;
export const getSelectedGenres = state => state.selectedGenres;

export const moviesByAverageVote = createSelector(
    getMovies,
    getSelectedRating,
    (movies, currentRate) => movies.filter(movie => movie['vote_average'] >= currentRate)
);
export const getFilteredMovies = createSelector(
    moviesByAverageVote,
    getSelectedGenres,
    (movies, selectedGenres) => movies.filter(movie => compare(movie['genre_ids'], selectedGenres))
);
export const moviesByPopularity = createSelector(
    getFilteredMovies,
    movies => {
        return movies.sort((a,b) => a['popularity'] - b['popularity']).reverse();
    }
    );


const compare = (ar1, ar2) => {
    return ar2.every(item => ar1.indexOf(item) >= 0)
};

