import { createContext } from "react";
import { useProvideDetails } from "../hooks";

const initialState = {
  user: null,
  
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const useDetails = useProvideDetails();
  return (
    <UserContext.Provider value={useDetails}>{children}</UserContext.Provider>
  );
};
