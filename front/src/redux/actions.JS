import {
  GET_ATLETAS,
  GET_ATLETA_BY_ID,
  DELETE_ATLETA,
  UPDATE_ATLETA,
  CREATE_ATLETA,
} from "./action-types";

//!Actions atletas

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

console.log("hla");
console.log(getAtletas());
