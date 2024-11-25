import { memo } from "react";
const UseMemoChild = memo(({ value }) => {
  console.log("Memo child component is  rendering");
  const output = value.reduce((acc, item) => acc + item, 0);
  return (
    <>
      <p>Sum is {output}</p>
    </>
  );
});

export default UseMemoChild;
