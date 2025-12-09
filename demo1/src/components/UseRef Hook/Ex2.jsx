import React, { useState, useRef } from "react";

const Ex2 = () => {

  let [count, setCount] = useState(0);
  
  // let refCount = 0
  // refCount += 1
  let refCount = useRef(0);
  refCount.current += 1; 
  
  function increase() {
    setCount(count + 1);
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Count: {count}</h1>
      <h2>refCount: {refCount}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export default Ex2;
