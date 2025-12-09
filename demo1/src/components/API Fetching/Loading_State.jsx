import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Loading_State = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <Loader></Loader>
          <p>Loading</p>
        </>
      ) : (
        <ul>
          {users.map((x, i) => {
            return <li key={x.id}>{x.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Loading_State;

const spin = keyframes`
    100%{transform: rotate(360deg)}
`;
const Loader = styled.div`
  height: 50px;
  width: 50px;
  border: 5px solid #ddd;
  border-radius: 50%;
  border-top: 5px solid blue;
  animation: ${spin} 1s linear infinite;
`;
