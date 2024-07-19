import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { StyledNav, StyledNavLink } from '../styles/styles';

/* Definimos la interfaz para las props del componente */
interface MobileSidebarProps {
  show: boolean; // Controla si el sidebar está visible
  onHide: () => void; // Función para cerrar el sidebar
  activeKey: string; // Clave del ítem actualmente seleccionado
  onSelect: (eventKey: string | null) => void; // Función para manejar la selección de ítems
}

function MobileSidebar({ show, onHide, activeKey, onSelect }: MobileSidebarProps) {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <StyledNav variant="pills" className="flex-column" activeKey={activeKey} onSelect={onSelect}>
          <Nav.Item>
            <StyledNavLink eventKey="first">Menu item 1</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink eventKey="second" disabled>Menu item 2</StyledNavLink>
          </Nav.Item>
        </StyledNav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileSidebar;