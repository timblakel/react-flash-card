import React, { useState } from 'react';
import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FlashCardViewer } from './components/FlashCardViewer';
import { ControlButtons } from './components/ControlButtons';
import { flashCard } from './interfaces/flashCard';

const INITIAL_CARD: flashCard = {
  id: 1,
  front: 'Front',
  back: 'Back',
  isFront: true
}

function App() {
  const [currentCard, setCurrentCard] = useState<flashCard>(INITIAL_CARD);

  return (
    <Container className="App">
      <Row>
        <h1>Study Flash Cards</h1>
      </Row>
      <Row>
        <ControlButtons setCurrentCard={setCurrentCard} currentCard={currentCard}></ControlButtons>
        <FlashCardViewer currentCard={currentCard}></FlashCardViewer>
      </Row>
    </Container>
  );
}

export default App;
