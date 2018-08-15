import {MENU_OPEN} from "./actions";

const initialState = {
    isOpen : true,
    height: 0
};

export function header(state = initialState , action) {
    console.log(action.menu);
    switch (action.type) {
        case MENU_OPEN :
            return {...state, isOpen : !state.isOpen, height: action.menu.offsetHeight};
        default:
            return state
    }
}
