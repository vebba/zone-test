import {onAppResize, onAppScroll} from "../actions";


function resizeListener(dispatch) {
    window.addEventListener("resize", () => {
        dispatch(onAppResize({
            width: window.innerWidth,
            height: window.innerHeight
        }))
    }, false);
}

function scrollListener(dispatch) {
    window.addEventListener("scroll", () => {
        dispatch(onAppScroll({
            x: window.pageXOffset,
            y: window.pageYOffset
        }))
    }, false);
}

export const initListeners = dispatch => {
    if (window) {
        resizeListener(dispatch);
        scrollListener(dispatch);
    }
};
