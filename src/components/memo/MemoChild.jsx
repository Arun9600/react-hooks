import { memo } from "react";
const MemoChild = memo(({ value }) => {
  console.log(
    "This child  will not re-render untill the value prop is changed"
  );
  return (
    <>
      <div className="container">
        <p>{value}</p>
        <p>
          The above message comes from parent to child as a prop, there is an
          event handler in parent eventhough the event is triggered it will not
          re-render child component becuase of React.memo
        </p>
      </div>
    </>
  );
});

export default MemoChild;
