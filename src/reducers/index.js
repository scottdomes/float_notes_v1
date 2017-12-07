import { combineReducers } from 'redux';

const initialState = {
  isLoading: false,
  notes: []
};

function notes(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_NOTES':
      return Object.assign({}, state, { isLoading: true });
    case 'ORGANIZE_NOTES':
      return Object.assign({}, state, {
        isLoading: false,
        notes: action.payload
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notes
});

export default rootReducer;
