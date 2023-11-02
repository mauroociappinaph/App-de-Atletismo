import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000'
import {
  GET_ATLETAS,
  GET_ATLETA_BY_ID,
  DELETE_ATLETA,
  UPDATE_ATLETA,
  CREATE_ATLETA,
} from "./action-types";
//!SECTION - Atletas

export const getAtletas = () => {
  return async function (dispatch) {
    try {
      const atletas = await axios.get("/atletas");
      const jsonAtletas = atletas.data;

      return dispatch({
        type: GET_ATLETAS,
        payload: jsonAtletas,
      })
    } catch (error) {
      console.log("Error:", error.data);
    }
  };
};

export const getAtletaById = (id) => {
  return async function (dispatch) {
    try {
      const atleta = await axios.get(`/atletas/${id}`);
      const jsonAtleta = atleta.data;
      return dispatch({
        type: GET_ATLETA_BY_ID,
        payload: jsonAtleta
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const deleteAtleta = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`/atletas/${id}`);
      return dispatch({
        type: DELETE_ATLETA,
        payload: id
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const updateAtleta = (atleta) => {
  return async function (dispatch) {
    try {
      const updatedAtleta = await axios.put(`/atletas/${atleta.id}`, atleta);
      return dispatch({
        type: UPDATE_ATLETA,
        payload: updatedAtleta.data
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const createAtleta = (atleta) => {
  return async function (dispatch) {
    try {
      const createdAtleta = await axios.post("/atletas", atleta);
      return dispatch({
        type: CREATE_ATLETA,
        payload: createdAtleta.data
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

//!SECTION - Competiciones
