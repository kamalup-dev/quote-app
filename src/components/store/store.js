import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice"

const store = configureStore({
    reducer: quoteReducer
})

export default store