import React, { useRef } from "react";

const Ex1 = () => {
  let refElement = useRef();
  // console.log("RefElement: ", refElement)

  function handleClick() {
    refElement.current.focus();
  }

  return (
    <div>
      <input ref={refElement} type="text" placeholder="Enter name" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default Ex1;
