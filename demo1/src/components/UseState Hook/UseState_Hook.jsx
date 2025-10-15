import { useState } from "react";

function UseState_Hook() {
  let [count, setCount] = useState(0); 
  // syntax: const [stateVariable, setStateFunction] = useState(initialValue)

  function increase() {
    setCount(count + 1); //count = count + 1
  }
  const decrease = () =>{
    setCount(count - 1) //count = count - 1
  } 
  return (
    <>
      <button onClick={decrease}>-</button> 
      <div>Count: {count} </div>
      <button onClick={increase}>+</button> 
    </>
  );
}

export default UseState_Hook;
