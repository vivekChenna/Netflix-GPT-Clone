import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
    popularMovies: null,
    TopRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },

    addTrailerVideo: (state, actions) => {
      state.TrailerVideo = actions.payload;
    },

    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addTopRatedMovies: (state, actions) => {
      state.TopRatedMovies = actions.payload;
    },
    addUpComingMovies: (state, actions) => {
      state.upComingMovies = actions.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies
} = movieSlice.actions;

export default movieSlice.reducer;
