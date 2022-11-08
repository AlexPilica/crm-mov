import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: {
    loading: false, 
    data: []
  },
  top10: {
    loading: false, 
    data: []
  },
  genres: {
    loading: false,
    data: []
  }
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setHomeMovies: (state, action) => {
      state.movies.data = action.payload
    },
    setHomeMoviesLoading: (state, action) => {
      state.movies.loading = action.payload
    },
    setTop10Movies: (state, action) => {
      state.top10.data = action.payload
    },
    setTop10MoviesLoading: (state, action) => {
      state.top10.loading = action.payload
    },
    setGenres: (state, action) => {
      state.genres.data = action.payload
    },
    setGenresLoading: (state, action) => {
      state.genres.loading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHomeMovies, setHomeMoviesLoading, setTop10Movies, setTop10MoviesLoading, setGenres, setGenresLoading } = moviesSlice.actions

export default moviesSlice.reducer