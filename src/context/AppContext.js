import { createContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const contextValue = { future: "some value" }; // Replace with actual value
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
