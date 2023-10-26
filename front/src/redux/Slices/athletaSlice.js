import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  atletas: 1,
};

export default athletaSlice = createSlice({
  name: "athletas",
  initialState,
  reducers: {
    setAtletas: (state, action) => {
      state.atletas = action.payload;
    },
  },
});

export const { setAtletas } = atletasSlice.actions;