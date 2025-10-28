import { useState } from "react";

function ObjectEx() {
  const per = {
    name: "Onkar",
    city: "Pune",
    gender: "male"
  };
  const [person, setPerson] = useState(per);  

  function handleClick() {
    setPerson({ ...person, city1: "Mumbai" });
    // setPerson({ 
      
    //    city: "Mumbai"
       
    // });
  }
  console.log('component rendered !!!')
  console.log(person)

  return (
    <>
      <div>
        <h2> Name: {person.name} </h2>
        <h2> City: {person.city} </h2>
        <h2> City1: {person.city1} </h2>
        <p> gender: {person.gender} </p>
      </div>
      <button onClick={handleClick}> Change city </button>
    </>
  );
}
export default ObjectEx
