import {call, put, takeLatest} from 'redux-saga/effects'
import {
    RECEIVE_API_DATA_GENRES,
    RECEIVE_API_DATA_MOVIES,
    receiveGenres,
    receiveMovies,
    REQUEST_API_DATA
} from "../actions";

export const api = (url) => fetch(url).then(response => response.json());

const MOVIES_API_KEY = process.env.REACT_APP_API_KEY || process.env.API_KEY;
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_API_KEY}&language=en-US`;
const MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIES_API_KEY}&language=en-US&page=1`;

function* fetchApiData() {
    try {

        const moviesResponse = yield call(api, MOVIES_URL);
        const movies = moviesResponse.results;
        yield put(receiveMovies(movies,RECEIVE_API_DATA_MOVIES));
        const genresResponse = yield call(api, GENRES_URL);
        const genres = genresResponse.genres;
        yield put(receiveGenres(genres, RECEIVE_API_DATA_GENRES))


    } catch (e) {
        console.log(e);
    }
}


export default function* mainSaga() {
    yield takeLatest(REQUEST_API_DATA, fetchApiData);
}
