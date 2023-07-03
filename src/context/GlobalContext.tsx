// GlobalContext.js

import React, { ReactNode } from "react";

const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = React.useState("");

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
