import {
  GET_ATLETAS,
  GET_ATLETA_BY_ID,
  DELETE_ATLETA,
  UPDATE_ATLETA,
  CREATE_ATLETA,
  GET_COMPETICIONES,
  GET_COMPETICION_BY_ID,
  DELETE_COMPETICION,
  UPDATE_COMPETICION,
  CREATE_COMPETICION,
} from "./action-types";

const initialState = {
  allAthletas: [],
};


//!SECTION - Atletas

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ATLETAS:
      return { ...state, allAthletas: action.payload };
    case GET_ATLETA_BY_ID:
      return { ...state, allAthletas: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;


//!SECTION - Competiciones

//NOTE -  Acción para obtener todas las competiciones
export const getCompeticiones = (competiciones) => ({
  type: GET_COMPETICIONES,
  payload: competiciones,
});

// Acción para obtener una competición por ID
export const getCompeticionById = (competicion) => ({
  type: GET_COMPETICION_BY_ID,
  payload: competicion,
});

// Acción para eliminar una competición
export const deleteCompeticion = (competicionId) => ({
  type: DELETE_COMPETICION,
  payload: competicionId,
});

// Acción para actualizar una competición
export const updateCompeticion = (competicion) => ({
  type: UPDATE_COMPETICION,
  payload: competicion,
});

// Acción para crear una nueva competición
export const createCompeticion = (nuevaCompeticion) => ({
  type: CREATE_COMPETICION,
  payload: nuevaCompeticion,
});

