const initialState = {
  favourite: null,
  isLoading: false,
};

export const FAV_MOVIE_REQUESTED = 'FAV_MOVIE_REQUESTED';
export const FAV_MOVIE_FAILED = 'FAV_MOVIE_FAILED';
export const FAV_MOVIE_SUCCEEDED = 'FAV_MOVIE_SUCCEEDED';

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FAV_MOVIE_SUCCEEDED:
      return {
        ...state,
        favourite: action.payload.data,
        isLoading: false,
      };
    case FAV_MOVIE_REQUESTED:
      return {
        ...state,
        favourite: null,
        isLoading: true,
      };
    case FAV_MOVIE_FAILED:
      return {
        ...state,
        favourite: null,
        isLoading: false,
      };
    default:
      return state;
  }
}


export function fetchFavouriteMovie() {
  return { type: FAV_MOVIE_REQUESTED, payload: { } };
}
