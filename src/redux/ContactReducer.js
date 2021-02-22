export const SELECT_CONTACT = 'SELECT_CONTACT';

const initialState = {selectedNumber: null};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CONTACT:
      return {selectedNumber: action.payload};
  }
  return state;
};

export default contactReducer;
