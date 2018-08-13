import React from 'react';
import * as styles from './ListMovieItem.css'

const Poster = ({url}) => (
    <div className={styles.poster}>
        <figure style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${url}")`, ...styles}}/>
    </div>
);

export const getGenresForIDs = (id, genres) => {
    const result = genres.find(genre => genre.id === id);
    if (result) {
        return ` ${result.name}, `;
    }
    return ""
};


const Genres = ({genres, genreIds}) => <span>{genreIds.map(id => getGenresForIDs(id, genres))}</span>;


const ListMovieItem = ({movie, genres}) => (
    <div className={styles.listItem}>
        <Poster url={movie.poster_path}/>
        <div><b>{movie.title}</b></div>
        <div>{`Rating: ${movie.vote_average}`}</div>
        <div>{`Popularity: ${movie.popularity}`}</div>
        Genres :
        <Genres genres={genres} genreIds={movie.genre_ids}/>
    </div>
);

export default ListMovieItem;
