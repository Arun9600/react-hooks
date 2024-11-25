import { createContext } from "react";
export const Value = createContext("");
const ContextComponent = ({ children }) => {
  return (
    <>
      <Value.Provider value="useContext Method of passing data by keeping createContext Logic in a separate component">
        {children}
      </Value.Provider>
    </>
  );
};

export default ContextComponent;
