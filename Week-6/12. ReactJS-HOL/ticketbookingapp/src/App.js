import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>Ticket Booking Application</h1>

      {isLoggedIn ? (
        <>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
          <UserPage />
        </>
      ) : (
        <>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;
