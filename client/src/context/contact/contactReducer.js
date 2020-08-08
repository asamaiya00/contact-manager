import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === payload._id ? payload : contact
        ),
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact._id !== payload;
        }),

        loading: false,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        current: null,
        error: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
