import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((n) => n + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((n) => n - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
          alert("ReSet Success");
        }}
      >
        ReSet
      </button>
    </>
  );
}
