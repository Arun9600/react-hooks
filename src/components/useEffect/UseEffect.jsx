import { useState, useEffect } from "react";
const UseEffect = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="container">
        <h1>UseEffect Hook</h1>
        <p>Automatic Counter: {state}</p>
      </div>
    </>
  );
};

export default UseEffect;
