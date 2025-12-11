import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer_Hook = () => {
  const [count, dispath] = useReducer(reducer, initialValue);
  return (
    <div>
      <button onClick={() => dispath("increment")}>+</button>
      <div>{count}</div>
      <button onClick={() => dispath("decrement")}>-</button>
    </div>
  );
};

export default UseReducer_Hook;
