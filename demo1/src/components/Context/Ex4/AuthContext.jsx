import React, { useState } from "react";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

export let userContext = React.createContext();

function AuthContext() {
  const [user, setUser] = useState(null);
  const login = () => setUser({ name: "Onkar", email: "onkar@gmail.com" });
  const logout = () => setUser(null);
  return (
    <>
      <userContext.Provider value={{ user, login, logout }}>
        <NavBar />
        <Dashboard />
      </userContext.Provider>
    </>
  );
}
export default AuthContext;
// export {userContext}