import React from 'react';
import { Col, Row, Container, Tab, Button, Badge } from 'react-bootstrap';
import { FileEarmarkFill } from 'react-bootstrap-icons';
import Tableradios from './Tableradios';
import CheckboxSelector from './CheckboxSelector';
import { containerStyle, buttonStyle1, buttonStyle2 } from '../styles/styles'; // Importa los estilos desde styles.tsx


interface MainContentProps {
    isMobile: boolean;
    activeKey: string;
}

function MainContent({ isMobile, activeKey }: MainContentProps) {
    const badges = new Array(30).fill('Badge');


    return (
        <Tab.Content>
            <Tab.Pane eventKey="first" active={activeKey === "first"}>
                <Container fluid style={{ minHeight: '100%', paddingBottom: '20px' }}>
                    <p style={{ color: '#979797' }}>Breadcrumb 1 / Breadcrumb 1.1</p>
                    <h1 style={{ color: '#538E9C' }}> Heading 1</h1>
                    <Row>
                        {/* Columna 1 */}
                        <Col md={4} >
                            {/* Fila 1: Texto */}
                            <Row className="mb-3">
                                <Col>
                                    <h2 style={{ color: '#1A1A1A' }}>Heading 2</h2>
                                    <p style={{ color: '#1A1A1A', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et luctus lectus, sit amet congue libero. Sed mauris massa, rhoncus nec semper a, accumsan in tellus. Suspendisse potenti. Aenean iaculis non nibh eu ultrices. Pellentesque quis risus dictum, interdum enim at, faucibus turpis. Suspendisse a dictum quam. Vestibulum nisi massa, tempor sit amet elit et, sagittis vehicula eros. Nulla id faucibus sem, interdum maximus lorem. In id elit et ipsum vulputate accumsan.</p>
                                </Col>
                            </Row>

                            {/* Fila 2: Otra columna */}
                            <Row className="mb-3">
                                <Col>
                                    <h2>Heading 2</h2>
                                    <Row>
                                        <Col md={4} style={{ color: '#1A1A1A', fontSize: '14px' }}>
                                            <p ><FileEarmarkFill size={24} color="#538E9C" />file-one.pdf</p>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-two.pdf</p>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-three.pdf</p>
                                        </Col>
                                        <Col md={4} style={{ color: '#1A1A1A', fontSize: '14px' }}>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-four.pdf</p>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-five.pdf</p>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-six.pdf</p>
                                        </Col>
                                        <Col md={4} style={{ color: '#1A1A1A', fontSize: '14px' }}>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-seven.pdf</p>
                                            <p><FileEarmarkFill size={24} color="#538E9C" />file-eight.pdf</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {/* Fila 3: Checkbox */}
                            <Row className="mb-3">
                                <Col>
                                    {/* Componente Checkbox */}
                                    <CheckboxSelector />
                                </Col>
                            </Row>
                        </Col>

                        {/* Columna para la línea vertical */}
                        <Col md="auto" className="d-none d-md-block">
                            <div style={{
                                width: '1px',
                                backgroundColor: '#e0e0e0',
                                height: '100%',
                                margin: '0 15px',
                                border: '1px solid #979797'
                            }}></div>
                        </Col>

                        {/* Columna 2 */}
                        <Col md={7}>
                            {/* Fila 1: Tabla */}
                            <Row className="mb-3">
                                <Col md={12}>
                                    <h2>Heading 2</h2>
                                    <p style={{ color: '#666667', fontSize: '16px' }}>Roin nunc quam, auctor placerat iaculis eu, vulputate eu mi.</p>
                                    {/* Componente de tabla con botones de radio */}
                                    <Tableradios />
                                </Col>
                            </Row>

                            {/* Fila 2: badge */}
                            <Row>
                                <p>Subtitle</p>
                                {badges.map((badge, index) => (
                                    <Col key={index} xs="auto" className="mb-2">
                                        <Badge
                                            bg="info"
                                            style={containerStyle}
                                        >{badge}</Badge>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row >
                    {/* Fila 3: Botones */}
                    <Row style={{ justifyContent: 'end', marginTop: '10px' }}>
                        <Button style={buttonStyle1}> Button </Button>
                        <Button style={buttonStyle2}> Button </Button>
                    </Row>
                </Container>
            </Tab.Pane>

            {/* Tab para el segundo ítem del menú */}
            <Tab.Pane eventKey="second" active={activeKey === "second"}>
                <Container fluid style={{ minHeight: '100%', paddingBottom: '20px' }}>
                    {/* Contenido*/}
                </Container>
            </Tab.Pane>
        </Tab.Content>
    );
}

export default MainContent;