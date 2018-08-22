import React from 'react';
import {ReduxContainerHOC} from "../HOC";
import * as actionCreators from "./actions";

const GenreItem = ({name, id, onGenreSelected}) => {
    return (
        <li className="w3-container w3-button w3-block ">
            <span className="w3-left">{name}</span>
            <input className="w3-right w3-xxlarge" type="checkbox" id={id} name="genres"
                   value={name} onChange={() => onGenreSelected(id)}/>

        </li>
    )
};

const Genres = ({genres = [], onGenreSelected}) => {
    return (
        <div>
            <h1 className="w3-hide-small w3-padding ">Filter by genre</h1>
            <ul className="w3-ul w3-bar-item">
                {genres.map(item => <GenreItem key={item.id} onGenreSelected={onGenreSelected} name={item.name}
                                               id={item.id}/>)}
            </ul>
        </div>


    );
};

const mapStateToProps = state => ({genres: state.genres});

export default ReduxContainerHOC(Genres, mapStateToProps, actionCreators);
