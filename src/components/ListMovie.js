import React from 'react';
import ListMovieItem from './ListMovieItem';


const ListMovie = ({items , genres}) => {
    return items.map((item, index) => (
        <ListMovieItem genres={genres} key={index} movie={item}/>
    ))
};

export default ListMovie;
