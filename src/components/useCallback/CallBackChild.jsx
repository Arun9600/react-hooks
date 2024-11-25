import { memo } from "react";
const CallBackChild = memo(({ onClick }) => {
  console.log("Child Rendering");
  return (
    <>
      <button onClick={onClick}>Child Submit</button>
    </>
  );
});

export default CallBackChild;
