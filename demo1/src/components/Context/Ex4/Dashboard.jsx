import { useContext } from "react";
import { userContext } from "./AuthContext";

function Dashboard() {
  const { user, login, logout } = useContext(userContext);
  return (
    <><div style={{ textAlign: "center" }}>
        {user ? (
          <>
            <h2>Dashboard: Access granted ✔</h2>
          </>
        ) : (
          <>
            <h2>Please Login to access the dashboard</h2>
          </>
        )}
      </div></>
  );
}
export default Dashboard;
