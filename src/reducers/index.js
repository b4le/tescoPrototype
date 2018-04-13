import { combineReducers } from 'redux';
import { ADD_LIST } from '../actions/index';

function lists(state = [], action) {
  switch (action.type) {
    case ADD_LIST: {
      const newList = {
        id: state.length,
        title: action.title,
      };
      return [...state, newList];
    }
    default:
      return state;
  }
}

function internalLists(state = []) {
  return state;
}

const rootReducer = combineReducers({
  lists,
  internalLists,
});

export default rootReducer;
