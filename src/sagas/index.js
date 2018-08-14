import {call, put, takeLatest} from 'redux-saga/effects'
import * as TYPES from '../types';

export const api = (url) => fetch(url).then(response => response.json());

const MOVIES_API_KEY = process.env.REACT_APP_API_KEY || process.env.API_KEY;
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_API_KEY}&language=en-US`;
const MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIES_API_KEY}&language=en-US&page=1`;


function* fetchMovies(action) {
    try {
        const response = yield call(api, MOVIES_URL);
        //here state could be normalized
        yield put({type: TYPES.FETCH_MOVIES_SUCCESS, movies: response.results})
    } catch (e) {
        console.log('FETCH MOVIES ERROR : ', e);
    }
}

function* fetchGenres(action) {
    try {
        const response = yield call(api, GENRES_URL);
        //here state could be normalized
        yield put({type: TYPES.FETCH_GENRES_SUCCESS, genres: response.genres})
    } catch (e) {
        console.log('FETCH GENRES ERROR : ', e);
    }
}


function* fetchApiData() {
    try {
        yield call(fetchGenres);
        yield call(fetchMovies);
        yield put({type: TYPES.FETCH_DATA_SUCCESS})
    } catch (e) {
        console.log(e);
    }
}


export default function* mainSaga() {
    yield takeLatest(TYPES.FETCH_DATA_REQUEST, fetchApiData)
}
