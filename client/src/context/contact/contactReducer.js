import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    default:
      return state;
  }
};
