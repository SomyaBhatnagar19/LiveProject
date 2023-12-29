import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginSignUp = ({ onUserLogin }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform authentication logic here
    // For simplicity, assuming successful login
  
    // Create an object to store user information
    const user = {
      email: loginEmail,
      password: loginPassword,
    };
  
    // Convert the user object to a JSON string
    const userJSON = JSON.stringify(user);
  
    // Set the user information in local storage
    localStorage.setItem('user', userJSON);
  
    // Set isAuthenticated to true
    setIsAuthenticated(true);
  
    // Notify the parent component about the login
    onUserLogin();
  };
  

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here, for simplicity, just log the signup details
    console.log('Signup Username:', signupUsername);
    console.log('Signup Password:', signupPassword);
    console.log('Re-enter Password:', reenterPassword);
  };

  const showSignupForm = () => {
    setShowSignup(true);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        {/* Login Form */}
        {!showSignup ? (
          <Col md={6} className="order-1 order-md-0">
            <div className="p-4 rounded-lg shadow-lg bg-light">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="loginFormEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="loginFormPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
                <div className="mt-3 text-center">
                  <Button variant="link" onClick={showSignupForm}>
                    New User? Sign Up
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        ) : null}

        {/* Signup Form */}
        {showSignup ? (
          <Col md={6} className="order-0 order-md-1 mt-4 mt-md-0">
            <div className="p-4 rounded-lg shadow-lg bg-light">
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form onSubmit={handleSignup}>
                <Form.Group controlId="signupFormUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Choose a username"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="signupFormPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="signupFormReenterPassword">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter your password"
                    value={reenterPassword}
                    onChange={(e) => setReenterPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Sign Up
                </Button>
                <div className="mt-3 text-center">
                  <Button variant="link" onClick={() => setShowSignup(false)}>
                    Already have an account? Login
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default LoginSignUp;
