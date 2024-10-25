import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Counter
      </button>

      <h1>{count}</h1>
    </>
  );
}
