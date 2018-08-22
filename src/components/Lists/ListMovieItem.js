import React from 'react';
import * as styles from './ListMovieItem.css'
import {BASE_IMG_URL} from "../../const";
import Ratings from "./Ratings";
import {Poster} from '../Media/'

export const getGenresForIDs = (id, genres) => {
    const result = genres.find(genre => genre.id === id);
    if (result) {
        return ` ${result.name}`;
    }
    return ""
};


const Genres = ({genres, genreIds}) => genreIds.map(id => <span key={id}>{getGenresForIDs(id, genres)}</span>);


const ListMovieItem = ({movie, genres}) => {

    return (
        <div style={{transform:"translateZ(1px)", boxShadow: "0px 13px 22px -12px rgba(0,0,0,0.5)"}} >
            <Poster url={BASE_IMG_URL + movie.poster_path}/>
            <div className="w3-container w3-padding" style={{minHeight:"110px"}}>
                <div className={styles.listItemTitle}>{movie.title.toUpperCase()}</div>
                <Ratings rating={movie.vote_average} popularity={movie.popularity}/>
                <Genres genres={genres} genreIds={movie.genre_ids}/>
            </div>

        </div>
    )
};

export default ListMovieItem;
