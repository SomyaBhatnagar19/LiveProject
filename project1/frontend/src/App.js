import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Pages/Header";
import ProductMaster from "./Pages/ProductMaster";
import Vendor from "./Pages/Vender";
import LoginSignUp from "./Pages/LoginSignUp";
import Sidebar from "./Pages/Sidebar";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const handleUserLogin = () => {
    setIsUserLoggedIn(true);
  };

  return (
    <Router>
      {isUserLoggedIn && (
        <div>
          <Header />
          <Row>
            {/* Sidebar */}
            <Col sm={3} className="sidebar-col">
              <Sidebar />
            </Col>

            {/* Main Content */}
            <Col sm={isUserLoggedIn ? 9 : 12} className="content-col">
              {/* Routes */}
              <Routes>
                <Route path="/products" element={<ProductMaster />} />
                <Route path="/vendor" element={<Vendor />} />
              </Routes>
            </Col>
          </Row>
        </div>
      )}

      {!isUserLoggedIn && (
        <Row>
          <Col sm={12}>
            {/* Login page */}
            <LoginSignUp onUserLogin={handleUserLogin} />
          </Col>
        </Row>
      )}
    </Router>
  );
}

export default App;
