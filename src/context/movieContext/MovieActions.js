export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (movies) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: movies,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});

