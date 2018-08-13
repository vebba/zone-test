import {combineReducers} from 'redux'
import {FILTER_BY_GENRE, RECEIVE_API_DATA_GENRES, RECEIVE_API_DATA_MOVIES} from '../actions'


const currentRate = (state = 3 , action) => {
    if(action.payload) {
        return action.payload
    }
    return state;
};

function genres(state = [], action) {
    switch (action.type) {
        case RECEIVE_API_DATA_GENRES :
            return action.data;
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
        case RECEIVE_API_DATA_MOVIES :
            return action.data;
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
