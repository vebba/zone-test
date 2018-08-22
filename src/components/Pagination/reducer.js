import * as TYPES from "../../types";

const initialState = {
    currentPage : 1
};

export function pagination(state = initialState , action) {
    switch (action.type) {
        case TYPES.ON_PAGE_SELECTED:
            return{...state, currentPage: action.pageID};
        default:
            return state
    }
}
