import { useContext } from "react";
import { userContext } from "./AuthContext";

function NavBar() {
  let { user, login, logout } = useContext(userContext);
  console.log(user)
  return (
    <><div style={{ padding: "10px", background: "#eee" }}>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <><button onClick={login}>Login</button></>
        )}
      </div></>
  );
}

export default NavBar;
