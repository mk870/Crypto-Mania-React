import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name:"theme",
  initialState:{value:'light'},
  reducers:{
    themeAction:(state,action) =>{
      state.value = action.payload
    }
  }
})
export const {themeAction} = themeSlice.actions
export default themeSlice.reducer