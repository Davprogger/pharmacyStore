import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";


const reducers = combineReducers({
    main: productsSlice
})

export const store = configureStore({
    reducer: reducers
})