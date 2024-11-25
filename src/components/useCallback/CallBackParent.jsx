import { useCallback, useState } from "react";
import CallBackChild from "./CallBackChild";
const CallBackParent = () => {
  const [state, setState] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(state + 1);
  };

  const handleChildSumbit = useCallback((e) => {
    e.preventDefault();
    console.log("Child Button is clicked");
  }, []);

  return (
    <>
      <div className="container use-state">
        <p>count:{state}</p>
        <button onClick={handleSubmit}>Parent Submit</button>
        <CallBackChild onClick={handleChildSumbit} />
      </div>
    </>
  );
};

export default CallBackParent;
