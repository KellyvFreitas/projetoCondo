export const initalState = {

};

export const UserReducer = (state, action) => {
  switch (action.type) {

    case 'CLEAR_USER': {
      return initalState;
    }
    default:
      return state;
  }
};
