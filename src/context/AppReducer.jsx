// reducer specifies application state changes in response to certain action to our context

export default (state, action) => {
  // checks for the type of action and then proceeds according to type dispatched in GlobalState.jsx
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
