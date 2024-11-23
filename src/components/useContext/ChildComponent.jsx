import { useContext } from "react";
import { Value } from "./ContextComponent";
const ChildComponent = () => {
  const value = useContext(Value);
  return <>{value}</>;
};

export default ChildComponent;
