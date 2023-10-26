import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAtletas = createAsyncThunk(
  "atletas/axiosAtletas",
  async () => {
    const backendURL = "http://localhost:4000/atletas";
    console.log("Estado antes de la solicitud:", current()); // Registro del estado antes de la solicitud
    const response = await axios.get(backendURL);
    console.log("Datos recibidos del backend:", response.data); // Registro de los datos del backend
    console.log("Estado después de la solicitud:", current()); // Registro del estado después de la solicitud
    return response.data;
  }
);

export const axiosCrearAtleta = createAsyncThunk(
  "atletas/axiosCrearAtleta",
  async (nuevoAtleta) => {
    try {
      const backendURL = "http://localhost:4000/atletas";
      const response = await axios.post(backendURL, nuevoAtleta);
      return response.data;
    } catch (error) {
      throw error;
    }
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
    builder.addCase(axiosAtletas.fulfilled, (state, action) => {
      state.atletas = action.payload;
    });
  },
});

export const { setAtletas } = atletasSlice.actions;
export default atletasSlice.reducer;
