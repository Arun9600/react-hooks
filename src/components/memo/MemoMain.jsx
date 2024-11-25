import { useState } from "react";
import MemoChild from "./MemoChild";
const MemoMain = () => {
  const [state, setState] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setState(state + 1);
  };
  return (
    <>
      <div className="container">
        <p>Count:{state}</p>
        <button onClick={handleClick}>Count Button</button>
        <MemoChild value="Message" />
      </div>
    </>
  );
};

export default MemoMain;
