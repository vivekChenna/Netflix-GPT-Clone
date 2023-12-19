import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    AddUser: (state , actions) => {
      return actions.payload
    },
    RemoveUser: (state, actions) => {
      return null
    }
  }

})


export const {AddUser , RemoveUser} = userSlice.actions;
export default userSlice.reducer;