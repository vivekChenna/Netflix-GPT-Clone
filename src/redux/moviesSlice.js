import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo : null , 
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },

    addTrailerVideo : (state,actions) =>{
      state.TrailerVideo = actions.payload;
    }

  },
});

export const { addNowPlayingMovies , addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
