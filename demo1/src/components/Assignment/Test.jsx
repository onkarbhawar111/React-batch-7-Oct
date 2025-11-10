import { useState } from "react";

export default function Test() {
  const per = {
    fname: "",
    email: "",
  };
  const [person, setPerson] = useState(per);

  function handleChange(e) {  //event object
    setPerson({...person, [e.target.name]:e.target.value })
  }                      //         email:xzz

  return (
    <>
      <form>
        <input type="text" name="fname" placeholder="Enter name" onChange={handleChange} />
        <input type="text" name="email" placeholder="Enter mail" onChange={handleChange} />
      </form>

      <h2>Name: {person.fname}</h2>
      <h2>Email : {person.email}</h2>
    </>
  );
}
