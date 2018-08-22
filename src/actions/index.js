import * as TYPES from '../types';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_RATE = 'FILTER_BY_RATE';
export const RECEIVE_API_DATA_MOVIES = 'RECEIVE_API_DATA_MOVIES';
export const RECEIVE_API_DATA_GENRES = 'RECEIVE_API_DATA_GENRES';

export const filterByRate = rate => ({type: FILTER_BY_RATE, payload: rate});

export const requestApiData = data => ({type: TYPES.FETCH_DATA_REQUEST, data});
export const receiveMovies = (data) => ({type: RECEIVE_API_DATA_MOVIES, data});
export const receiveGenres = (data) => ({type: RECEIVE_API_DATA_GENRES, data});

export const onAppResize = size => ({type: TYPES.APP_ON_RESIZE, size});
export const onAppScroll = position => ({type: TYPES.APP_ON_SCROLL, position});
