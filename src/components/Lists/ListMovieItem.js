import React from 'react';
import * as styles from './ListMovieItem.css'
import {BASE_IMG_URL} from "../const";
import Ratings from "./Ratings";

const Poster = ({url}) => (
    <div className={styles.poster}>
        <figure style={{backgroundImage: `url("${url}")`, ...styles}}/>
    </div>
);

export const getGenresForIDs = (id, genres) => {
    const result = genres.find(genre => genre.id === id);
    if (result) {
        return ` ${result.name}`;
    }
    return ""
};


const Genres = ({genres, genreIds}) => genreIds.map(id => <span key={id}>{getGenresForIDs(id, genres)}</span>);


const ListMovieItem = ({movie, genres}) => (
    <div className={styles.listItem}>
        <Poster url={BASE_IMG_URL + movie.poster_path}/>
        <div className={styles.listItemTitle}>{movie.title.toUpperCase()}</div>
        <Ratings rating={movie.vote_average} popularity={movie.popularity}/>
        <Genres genres={genres} genreIds={movie.genre_ids}/>
    </div>
);

export default ListMovieItem;
