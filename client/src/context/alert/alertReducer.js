import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => {
        return alert.id !== payload;
      });
    default:
      return state;
  }
};
