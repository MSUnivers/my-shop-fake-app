import React, { createContext, useReducer } from "react";
import { reducer,initialState } from "../Reducers";
export const StorageContext = createContext();

export default function StorageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <StorageContext.Provider value={{state,dispatch}}>
          {children}
      </StorageContext.Provider>
    </div>
  );
}
