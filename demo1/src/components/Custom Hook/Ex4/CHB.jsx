import React from "react";
import useLocalStorage from "./CHA";

const CHB = () => {
  const { value, setStoredValue } = useLocalStorage("username", "");
  return (
    <div>
      <h1>Welcome: {value}</h1>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setStoredValue(e.target.value)}
      />
      <button onClick={() => localStorage.removeItem("username")}>
        Remove from localstorage
      </button>
    </div>
  );
};

export default CHB;
