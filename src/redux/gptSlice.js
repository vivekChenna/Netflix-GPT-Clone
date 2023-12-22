import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTPage: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
  },
});

export const { toggleGPT } = gptSlice.actions;

export default gptSlice.reducer;
