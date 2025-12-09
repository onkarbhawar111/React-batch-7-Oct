import { useEffect, useState } from "react";

function Test1() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    async function handleData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json()
      setApiData(data)
      // console.log(apiData);
    }
    handleData()
  });

  return (
    <>
      <ul>
        {apiData.map((item)=>{
          return <li key={item.id}>{item.id}. {item.name}</li>
        })}
      </ul>
    </>
  );
}

export default Test1;
