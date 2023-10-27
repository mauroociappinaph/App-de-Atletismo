import {
  GET_ATLETAS,
  GET_ATLETA_BY_ID,
  DELETE_ATLETA,
  UPDATE_ATLETA,
  CREATE_ATLETA,
} from "./action-types";

const initialState = {
  allAthletas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ATLETAS:
      return { ...state, allAthletas: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
