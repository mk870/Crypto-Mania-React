import { createSlice } from "@reduxjs/toolkit";

export const coinsSlice = createSlice({
  name:"coins",
  initialState:{value:''},
  reducers:{
    coinsAction:(state,action) =>{
      state.value = action.payload
    }
  }
})
export const {coinsAction} = coinsSlice.actions
export default coinsSlice.reducer

