import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { BellFill, GearFill, Grid3x3GapFill, PersonCircle } from 'react-bootstrap-icons';
import logo from '../images/logo.png';
import { imageStyle, navbarStyle, iconStyle } from '../styles/styles';

// Definición de la interfaz para las props del componente Header
interface HeaderProps {
  isMobile: boolean;
  onShowSidebar: () => void;
}

function Header({ isMobile, onShowSidebar }: HeaderProps) {
  return (
    <Navbar bg="white" expand={false} style={navbarStyle}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Icono de menú, clickeable solo en móvil */}
          <Grid3x3GapFill
            size={44}
            color="#666667"
            onClick={onShowSidebar}
            className="me-2"
            style={{ cursor: isMobile ? 'pointer' : 'default' }}
          />
          {/* Logo de la aplicación */}
          <Image src={logo} alt="Logo" style={imageStyle} />
        </div>
        {/* Iconos de navegación */}
        <Nav className="flex-row">
          <Nav.Link href="#notifications" className="px-2" style={iconStyle}>
            <BellFill size={24} />
          </Nav.Link>
          <Nav.Link href="#settings" className="px-2" style={iconStyle}>
            <GearFill size={24} />
          </Nav.Link>
          <Nav.Link href="#profile" className="px-2" style={iconStyle}>
            <PersonCircle size={24} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;