import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FlashCardViewer } from './components/FlashCardViewer';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          Placeholder
          This will be control buttons
        </Col>
        <FlashCardViewer></FlashCardViewer>
      </Row>
    </Container>
  );
}

export default App;
