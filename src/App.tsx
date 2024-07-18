import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Row, Col } from 'react-bootstrap';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import MainContent from './componentes/MainContent';
import MobileSidebar from './componentes/MobileSidebar';
import './App.css'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [activeKey, setActiveKey] = useState("first");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => {
    if (isMobile) {
      setShowSidebar(true);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className='App'>
      <Header isMobile={isMobile} onShowSidebar={handleShowSidebar} />
      <Container fluid style={{ flex: 1, overflow: 'hidden' }}>
        <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => k && setActiveKey(k)}>
          <Row style={{ height: '100%' }}>
            {!isMobile && (
              <>
                <Col lg={2} style={{ background: 'white', height: '100%', overflowY: 'auto' }}>
                  <Sidebar />
                </Col>
                <Col lg="auto" className="d-none d-lg-block px-0">
                  <div style={{
                    width: '1.5px',
                    backgroundColor: '#979797',
                    height: '100%'
                  }}></div>
                </Col>
              </>
            )}
            
            <Col xs={12} lg={isMobile ? 12 : 9} style={{ height: '100%', overflowY: 'auto' }}>
              <MainContent isMobile={isMobile} activeKey={activeKey} />
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <MobileSidebar show={showSidebar} onHide={handleCloseSidebar} />
    </div>
  );
}

export default App;