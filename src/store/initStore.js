import {requestApiData} from "../actions";

export const initStore = (dispatch) => {
    return new Promise((resolve, reject)=>{
        dispatch(requestApiData("MOVIES"));
        resolve();
        //reject();
    });
};
