export const getSelectedGenres = state => state.selectedGenres;
export const getGenres = state => state.genres;
export const getGenresForIDs = state => {
    const genres = getGenres(state);
    const genreIDs = getSelectedGenres(state);
    const result = genreIDs.map(id => genres.find(genre => genre.id === id ).name);
    return result.length === 0 ? 'All': result.join(', ');
};
