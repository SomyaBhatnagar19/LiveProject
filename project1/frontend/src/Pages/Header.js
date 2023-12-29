/* /frontend/Pages/Header.js */

import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    const customNavbarStyle = {
        backgroundColor: '#3498db', 
      };
    
      return (
        <Navbar style={customNavbarStyle} className='mb-2'>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
        </Navbar>
  );
};

export default Header;
