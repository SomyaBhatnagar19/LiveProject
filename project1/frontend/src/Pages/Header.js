/* /frontend/Pages/Header.js */

import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const Header = () => {
    const customNavbarStyle = {
        backgroundColor: '#3498db', 
      };

      const buttonContainerStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
      };

      return (
        <>
        <Navbar style={customNavbarStyle} className='mb-2'>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          
          
        </Navbar>
        <div style={buttonContainerStyle}>
        <Button variant="primary" type="submit">
          Logout
        </Button>
      </div>
      </>
  );
};

export default Header;
