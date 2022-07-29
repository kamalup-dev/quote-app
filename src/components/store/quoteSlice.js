import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    id: "1",
    author: "Test",
    text: "This is test quote",
  },
  reducers: {
    addQuote (state, action){
        state.id = action.id
        state.author = action.author
        state.text = action.text
    }
  }
});

export default quoteSlice.reducer
export const quoteSliceActions = quoteSlice.actions
