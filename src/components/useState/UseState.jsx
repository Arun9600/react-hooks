import { useState } from "react";
const UseState = () => {
  const [state, setState] = useState(0);
  const IncrementFunc = () => {
    setState((prev) => prev + 1);
  };
  const DecrementFunc = () => {
    setState(state - 1);
  };
  const ResetFunc = () => {
    setState(0);
  };

  return (
    <>
      <div className="container use-state">
        <h1>useState Hook</h1>
        <p>Count: {state}</p>
        <button onClick={IncrementFunc}>Increment</button>
        <button onClick={DecrementFunc} disabled={state === 0}>
          Decrement
        </button>
        <button onClick={ResetFunc}>Reset</button>
      </div>
    </>
  );
};

export default UseState;
