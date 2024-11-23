import { createContext } from "react";
export const Value = createContext("");
const ContextComponent = ({ children }) => {
  return (
    <>
      <Value.Provider value="useContext Method of passing data">
        {children}
      </Value.Provider>
    </>
  );
};

export default ContextComponent;
