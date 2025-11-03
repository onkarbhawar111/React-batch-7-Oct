import { useEffect, useState } from "react";

function TimerExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log('Timer started....')
    let timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    
    return () => {
      clearInterval(timer);
      console.log("timer ended");
    };
  }, []);
  return (
    <>
      <div>{count}</div>
    </>
  );
}

export default TimerExample;
