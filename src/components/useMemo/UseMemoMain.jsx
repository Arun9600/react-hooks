import { useState, useMemo } from "react";
import UseMemoChild from "./UseMemoChild";
const UseMemoMain = () => {
  const [state, setState] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setState(state + 1);
  };
  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);
  return (
    <>
      <div className="container">
        <button onClick={handleSubmit}>Parent</button>
        <p>Parent is clicked {state} times</p>
        <UseMemoChild value={numbers} />
      </div>
    </>
  );
};

export default UseMemoMain;
