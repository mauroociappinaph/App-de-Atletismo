import { configureStore } from "@reduxjs/toolkit";
import atletasReducer from "./Slices/athletaSlice";


export default store = configureStore({
  reducer: {
    atletas: atletasReducer,
  },
});
