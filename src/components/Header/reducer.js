import {MENU_OPEN} from "./actions";

const initialState = {
    isOpen : false,
    height: 0
};

export function header(state = initialState , action) {
    switch (action.type) {
        case MENU_OPEN :
            return {...state, isOpen : !state.isOpen, height: action.menu.offsetHeight};
        default:
            return state
    }
}
