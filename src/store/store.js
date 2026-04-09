const GET_ALL = "get_all";
const GET_ONE = "get_one";
const initState = {
  products: [],
  product: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ONE:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

const getAllActionCreator = (data) => {
  return { type: GET_ALL, payload: data };
};

const getOneActionCreator = (data) => {
  return { type: GET_ONE, payload: data };
};

export { reducer, initState, getAllActionCreator, getOneActionCreator };
