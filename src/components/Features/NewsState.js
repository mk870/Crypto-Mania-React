import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name:"news",
  initialState:{value:''},
  reducers:{
    newsAction:(state,action) =>{
      state.value = action.payload
    }
  }
})
export const {newsAction} = newsSlice.actions
export default newsSlice.reducer