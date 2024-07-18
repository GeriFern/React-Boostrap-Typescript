import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="first" className="custom-nav-link" >Menu item 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second" className="custom-nav-link" >Menu item 2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;