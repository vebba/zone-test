import * as TYPES from "../../types";

const initialState = {
    isOpen : false
};

export function sideBar(state = initialState , action) {
    switch (action.type) {
        case TYPES.MENU_OPEN:
        case TYPES.SIDE_BAR_OPEN:
            return{...state, isOpen: true};
        case TYPES.SIDE_BAR_CLOSE:
            return{...state, isOpen: false};
        default:
            return state
    }
}
