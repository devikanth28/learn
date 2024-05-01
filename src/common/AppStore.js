import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
const AppStore = configureStore({
    reducer:{
        counter:CounterSlice
    }
})
export { AppStore };