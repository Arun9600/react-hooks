import { useRef } from "react";
const UseRef = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.style.border = "3px solid red";
    }
  };
  return (
    <>
      <div className="container">
        <h1>useRef</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
