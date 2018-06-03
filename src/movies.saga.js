import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FAV_MOVIE_REQUESTED, FAV_MOVIE_SUCCEEDED, FAV_MOVIE_FAILED } from './reducers/movies.reducer';

const fetchMoviesApi = () => axios.get('http://www.omdbapi.com/?i=tt4682786&apikey=303bee43');

function* fetchFavouriteMovie() {
  try {
    const response = yield call(fetchMoviesApi);
    const { data } = response;
    yield put({ type: FAV_MOVIE_SUCCEEDED, payload: { data } });
  } catch (error) {
    yield put({ type: FAV_MOVIE_FAILED, payload: { error } });
  }
}

export function* moviesSaga() {
  yield takeLatest(FAV_MOVIE_REQUESTED, fetchFavouriteMovie);
}

export default {
  moviesSaga,
};
