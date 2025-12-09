import React, { useMemo, useState } from "react";

const Ex2 = () => {
  let [input, setInput] = useState("");
  let [count, setCount] = useState(0);
  let list = ["dnyanda", "suraj", "suraj1", "vaishnavi", "rohit"];

  const filteredUsers = useMemo(() => {
    return list.filter((key) => {
      console.log("fn called....");
      return key.toLowerCase().includes(input.toLowerCase());
    });
  }, [input]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button> <br /><br />
      <input type="text" placeholder="Search name" onChange={(e)=>setInput(e.target.value)} />
      <ol>{filteredUsers.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}</ol>
    </div>
  );
};

export default Ex2;
