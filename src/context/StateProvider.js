import React from "react";

// Data Layer
export const StateContext = React.createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how it's used inside of a component
export const useStateValue = () => React.useContext(StateContext);
