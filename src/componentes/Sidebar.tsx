import React from 'react';
import { Nav } from 'react-bootstrap';
import { StyledNav, StyledNavLink } from '../styles/styles';

function Sidebar() {
  return (
    <StyledNav variant="pills" className="flex-column">
      <Nav.Item>
        <StyledNavLink eventKey="first">Menu item 1</StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink eventKey="second" disabled>Menu item 2</StyledNavLink>
      </Nav.Item>
    </StyledNav>
  );
}

export default Sidebar;