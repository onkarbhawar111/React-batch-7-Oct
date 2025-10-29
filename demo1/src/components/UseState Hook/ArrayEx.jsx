function ArrayEx() {
  //   const IPL = ["CSK", "MI", "RCB", "MI"];
  const students = [
    {
      id: 101,
      name: "Onkar",
      city: "Pune",
    },
    {
      id: 102,
      name: "Rohit",
      city: "Shrirampur",
    },
    {
      id: 103,
      name: "Rutuja",
      city: "Pune",
    },
    {
      id: 104,
      name: "Rohit",
      city: "Nagpur",
    }
  ]  ;
  return (
    <>
      {/* <ul>
        {IPL.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul> */}
      <ul>
        {students.map((x) => {
          return <li key={x.id}>id: {x.id}, Name: {x.name}, city: {x.city}</li>
        })}
      </ul>
    </>
  );
}

export default ArrayEx;
