import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import Sidebar from './Sidebar';

interface MobileSidebarProps {
  show: boolean;
  onHide: () => void;
}

function MobileSidebar({ show, onHide }: MobileSidebarProps) {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Sidebar />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileSidebar;