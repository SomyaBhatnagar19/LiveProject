/* /frontend/App.js */
import React, { useState } from "react";
import Header from "./Pages/Header";
import LoginSignUp from "./Pages/LoginSignUp";
import ProductMaster from "./Pages/ProductMaster";
import Vender from "./Pages/Vender";

function App() {
  // State to check the login status
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Function to handle user login
  const handleUserLogin = () => {
    // Simulate successful login
    setIsUserLoggedIn(true);
  };

  return (
    <div>
      <Header />
      {/* Conditionally render components based on user login status */}
      {!isUserLoggedIn && (
        <LoginSignUp onUserLogin={handleUserLogin} />
      )}
      {isUserLoggedIn && (
        <div>
          <ProductMaster />
          <Vender />
        </div>
      )}
    </div>
  );
}

export default App;