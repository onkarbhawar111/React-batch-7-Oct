import { useEffect, useState } from "react";

function UseEffect_Hook() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(100)
  useEffect(() => {
    console.log("useEffect called....");
  }, []);
  return (
    <>
      <div>Counter Application</div>
        <button onClick={()=>setCount1(count1+1)}>+</button>
        <div>Count1: {count1}</div>
        <button onClick={()=>setCount1(count1-1)}>-</button>
        <hr />
        <button onClick={()=>setCount2(count2+1)}>+</button>
        <div>Count2: {count2}</div>
        <button onClick={()=>setCount2(count2-1)}>-</button>

    </>
  );
}

export default UseEffect_Hook;
