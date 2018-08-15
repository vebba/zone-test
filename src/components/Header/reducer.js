import {MENU_OPEN} from "./actions";
import {BUTTON_CLICKED} from "../Buttons/actions";

const initialState = {
    isOpen : false,
    height: 0
};

export function header(state = initialState , action) {
    switch (action.type) {
        case BUTTON_CLICKED:
            return{...state, isOpen: !state.isOpen};
        case MENU_OPEN :
            return {...state, isOpen : !state.isOpen, height: action.menu.offsetHeight};
        default:
            return state
    }
}
