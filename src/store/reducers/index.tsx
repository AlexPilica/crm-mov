const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return state;

    default:
      return state;
  }
};

export default moviesReducer;