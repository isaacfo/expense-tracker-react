import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
};

// Create context
//  helps bring global state into other components when needed
export const GlobalContext = createContext(initialState);

// for other components to have access to global state, they need to be wraped in a provider in app.js

// Provider component
// children are the other components
export const GlobalProvider = ({ children }) => {
  // for using useReducer, dispatch is needed
  //   usedReducer takes in where the reducer is found in files
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   Actions: make calls to reducer
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      // have to put action in provider to use it
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
