import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FlashCardViewer } from './components/FlashCardViewer';
import { ControlButtons } from './components/ControlButtons';

function App() {
  return (
    <Container className="App">
      <Row>
        <ControlButtons></ControlButtons>
        <FlashCardViewer></FlashCardViewer>
      </Row>
    </Container>
  );
}

export default App;
