export const ADD_LIST = 'ADD_LIST';

export function addItem(title) {
  return {
    type: ADD_LIST,
    title,
  };
}
