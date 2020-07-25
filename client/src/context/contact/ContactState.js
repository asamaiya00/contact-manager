import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '9184801948',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Dara Watson',
        email: 'dara@gmail.com',
        phone: '9234453248',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry white',
        email: 'harry@gmail.com',
        phone: '9184801948',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   add contact

  // delete contact

  // set contact

  // clear contact

  // update contact

  // filter contact

  // clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
