import {combineReducers} from 'redux'
import {FILTER_BY_GENRE} from '../actions'
import * as TYPES from "../types";
import {header} from '../components/Header/reducer'


const inittialAppState = {
    width: 0,
    height:0
};

const app = (state, action) => {


    return state;
};

const currentRate = (state = 3 , action) => {
    if(action.payload) {
        return action.payload
    }
    return state;
};

function genres(state = [], action) {
    switch (action.type) {
        case TYPES.FETCH_GENRES_SUCCESS :
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
        case TYPES.FETCH_MOVIES_SUCCESS :
            return action.movies;
        default :
            return state
    }
}

const rootReducer = combineReducers({
    selectedGenres,
    movies,
    currentRate,
    genres,
    header
});

export default rootReducer
