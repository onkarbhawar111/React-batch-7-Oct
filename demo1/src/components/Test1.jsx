import { useEffect } from "react";

function Test1() {
  useEffect(() => {
    async function handleData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = result.json()
      console.log(data);
    }
    handleData()
  });

  return (
    <>
      {/* <button onClick={handleData}>Get Data</button> */}
    </>
  );
}

export default Test1;
