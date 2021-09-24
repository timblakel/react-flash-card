import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FlashCardViewer } from './components/FlashCardViewer';
import { ControlButtons } from './components/ControlButtons';
import { flashCard } from './interfaces/flashCard';
import { EditFlashCards } from './components/EditFlashCards';

const INITIAL_CARDS: flashCard[] = [{
    id: 1,
    front: 'Front',
    back: 'Back',
    isFront: true
  },
  {
    id: 2,
    front: 'Up side',
    back: 'Down side',
    isFront: true
  }]

const LOCAL_STORAGE_CARDS = 'flash-cards';

function getLocalCards(): flashCard[] {
  let rawCards: string | null = localStorage.getItem(LOCAL_STORAGE_CARDS);
  if (rawCards === null) {
    return INITIAL_CARDS;
  } else {
    return JSON.parse(rawCards);
  }
}

function App() {
  const [currentCard, setCurrentCard] = useState<flashCard>(INITIAL_CARDS[0]);
  const [cardPile, setCardPile] = useState<flashCard[]>(INITIAL_CARDS);

  return (
    <Container className="App">
      <Row>
        <h1>Study Flash Cards</h1>
      </Row>
      <Row>
        <ControlButtons 
        setCurrentCard={setCurrentCard} currentCard={currentCard} 
        setCardPile={setCardPile} cardPile={cardPile}></ControlButtons>
        <FlashCardViewer currentCard={currentCard}></FlashCardViewer>
      </Row>
      <EditFlashCards cardPile={cardPile}></EditFlashCards>
      {/* <Row>
        <Button onClick={()=>{
          console.log(`cardPile: ${JSON.stringify(cardPile)}`);
        }
        }>Testing button</Button>
      </Row> */}
    </Container>
  );
}

export default App;
