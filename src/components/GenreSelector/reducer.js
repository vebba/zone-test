import * as TYPES from "../../types";
import {ON_GENRE_SELECTED} from "../../types";

export function genres(state = [], action) {
    switch (action.type) {
        case TYPES.FETCH_GENRES_SUCCESS :
            return action.genres;
        default :
            return state
    }
}
export function selectedGenres(state = [], action) {
    switch (action.type) {
        case ON_GENRE_SELECTED :
            if (!state.includes(action.id)) {
                return [...state, action.id]
            } else {
                return state.filter(item => item !== action.id)
            }

        default :
            return state
    }
}
