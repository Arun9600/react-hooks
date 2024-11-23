import ChildComponent from "./ChildComponent";
import ContextComponent from "./ContextComponent";
const ParentComponent = () => {
  return (
    <>
      <div className="container">
        <h1>useContex</h1>
        <ContextComponent>
          <ChildComponent />
        </ContextComponent>
      </div>
    </>
  );
};

export default ParentComponent;
