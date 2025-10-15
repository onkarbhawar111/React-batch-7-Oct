import { useState } from "react";

function Ex3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
  }
  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome Back !</h2>
            <p>You are logged in successfully !!!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Please Login</h2>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Ex3;
