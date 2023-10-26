import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAtletas = createAsyncThunk(
  "atletas/axiosAtletas",
  async () => {
    const backendURL = "http://localhost:4000/atletas"; 
    console.log("Realizando solicitud a:", backendURL);  
    const response = await axios.get(backendURL); 
    return response.data;
  }
);

const initialState = {
  atletas: [],
};

const atletasSlice = createSlice({
  name: "athletas",
  initialState,
  reducers: {
    setAtletas: (state, action) => {
      state.atletas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosAtletas.fulfilled, (state, action) => {
        state.atletas = action.payload;
      });
  },
});

export const { setAtletas } = atletasSlice.actions;
export default atletasSlice.reducer;
