import {requestApiData} from "../actions";

export const initStore = (dispatch) => {
    return new Promise((resolve)=>{
        dispatch(requestApiData("MOVIES"));
        resolve();
    });
};
