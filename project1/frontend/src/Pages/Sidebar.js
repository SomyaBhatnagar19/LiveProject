import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar-container ${open ? 'open' : 'closed'}`}>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Navbar.Toggle onClick={toggleSidebar} aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container fluid className="sidebar-content">
        <Nav className="flex-column">
          <Nav.Link href="/products">Product Master</Nav.Link>
          <Nav.Link href="/vendor">Vendor Master</Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default Sidebar;
