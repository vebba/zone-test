import {combineReducers} from 'redux'
import * as TYPES from "../types";
import {header} from '../components/Header/reducer'
import {sideBar} from "../components/SideBars/reducer";
import {pagination} from "../components/Pagination/reducer";
import {genres , selectedGenres} from '../components/GenreSelector/reducer'

const initialAppState = {
    size: {
        width: 0,
        height: 0
    },
    position: {
        posX: 0,
        posY: 0
    },
    sideBar: {
        isOpen: false
    }


};

const app = (state = initialAppState, action) => {
    switch (action.type) {
        case TYPES.APP_ON_RESIZE :
            return {...state, size: action.size};
        case TYPES.APP_ON_SCROLL :
            return {...state, position: action.position};

        default :
            return state
    }
};

const currentRate = (state = 3, action) => {
    if (action.payload) {
        return action.payload
    }
    return state;
};





function movies(state = [], action) {
    switch (action.type) {
        case TYPES.FETCH_MOVIES_SUCCESS :
            return action.movies;
        default :
            return state
    }
}

const rootReducer = combineReducers({
    app,
    sideBar,
    pagination,
    selectedGenres,
    movies,
    currentRate,
    genres,
    header
});

export default rootReducer
