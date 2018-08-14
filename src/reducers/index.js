import {combineReducers} from 'redux'
import {FILTER_BY_GENRE} from '../actions'
import {FETCH_GENRES_SUCCESS, FETCH_MOVIES_SUCCESS} from "../types";

const currentRate = (state = 3 , action) => {
    if(action.payload) {
        return action.payload
    }
    return state;
};

function genres(state = [], action) {
    switch (action.type) {
        case FETCH_GENRES_SUCCESS :
            return action.genres;
        default :
            return state
    }
}

function selectedGenres(state = [], action) {
    switch (action.type) {
        case FILTER_BY_GENRE :
            if (!state.includes(action.id)) {
                return [...state, action.id]
            } else {
                return state.filter(item => item !== action.id)
            }

        default :
            return state
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS :
            return action.movies;
        default :
            return state
    }
}


const rootReducer = combineReducers({
    selectedGenres,
    movies,
    currentRate,
    genres
});

export default rootReducer
