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
      const atletas = await axios.get("http://localhost:4000/atletas");

      dispatch({ type: GET_ATLETAS, payload: atletas.data });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const getAtletaById = (id) => {
  return async function (dispatch) {
    try {
      const atleta = await axios.get(`http://localhost:4000/atletas/${id}`);
      dispatch ({ type: GET_ATLETA_BY_ID, payload: atleta.data });
    } catch (error) {
      console.log("Error:", error);
    }
}
};

export const deleteAtleta = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:4000/atletas/${id}`);
      dispatch({ type: DELETE_ATLETA, payload: id });
    } catch (error) {
      console.log("Error:", error);
    }
  };
}

export const updateAtleta = (atleta) => {
  return async function (dispatch) {
    try {
      const updatedAtleta = await axios.put(
        `http://localhost:4000/atletas/${atleta.id}`,
        atleta
      );
      dispatch({ type: UPDATE_ATLETA, payload: updatedAtleta.data });
    } catch (error) {
      console.log("Error:", error);
    }
  };
}

export const createAtleta = (atleta) => {
  return async function (dispatch) {
    try {
      const createdAtleta = await axios.post(
        "http://localhost:4000/atletas",
        atleta
      );
      dispatch({ type: CREATE_ATLETA, payload: createdAtleta.data });
    } catch (error) {
      console.log("Error:", error);
    }
  };
}



console.log("hla");
console.log(getAtletas());

//!SECTION - Competiciones
