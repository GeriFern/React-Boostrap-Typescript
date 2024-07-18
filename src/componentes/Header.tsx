import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { BellFill, GearFill, Grid3x3GapFill, PersonCircle } from 'react-bootstrap-icons';
import logo from '../images/logo.png';
import { imageStyle, navbarStyle, iconoBellFill, iconoGearFill, iconoPersonCircle } from '../styles/styles'; // Importa los estilos desde styles.tsx


interface HeaderProps {
  isMobile: boolean;
  onShowSidebar: () => void;
}

function Header({ isMobile, onShowSidebar }: HeaderProps) {

  return (
    <Navbar bg="white" expand="lg" style={navbarStyle}>
      <Container fluid className="d-flex justify-content-between align-items-center" >
        <div className="d-flex align-items-center">
          <Grid3x3GapFill
            size={44}
            color="#666667"
            onClick={onShowSidebar}
            className="me-2"
            style={{ cursor: isMobile ? 'pointer' : 'default' }}
          />
          <Image src={logo} alt="Logo" style={imageStyle} />
        </div>
        <Nav className="flex-row">
          <Nav.Link href="#notifications" className="px-2" style={iconoBellFill}>
            <BellFill size={24} />
          </Nav.Link>
          <Nav.Link href="#settings" className="px-2" style={iconoGearFill} >
            <GearFill size={24} />
          </Nav.Link>
          <Nav.Link href="#profile" className="px-2" style={iconoPersonCircle}>
            <PersonCircle size={24} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;