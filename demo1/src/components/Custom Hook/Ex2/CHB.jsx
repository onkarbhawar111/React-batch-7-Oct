import React from "react";
import useFetch from "./CHA";

const CHB = () => {
  const { loading, error, data } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading....</p>;
  if (error) return <p>erorr....</p>;

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CHB;
