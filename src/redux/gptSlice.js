import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTPage: false,
    gptMovies: null,
    tmdbMovieSearchSuggestions: null,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
    addMoviesData: (state, actions) => {
      const { gptMovieNames, tmdbMoviesData } = actions.payload;
      state.gptMovies = gptMovieNames;
      state.tmdbMovieSearchSuggestions = tmdbMoviesData;
    },
  },
});

export const { toggleGPT, addMoviesData } = gptSlice.actions;

export default gptSlice.reducer;
