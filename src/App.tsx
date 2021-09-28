import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
  // console.log(`rawCards: ${rawCards}`);
  if (rawCards === null) {
    return INITIAL_CARDS;
  } else {
    return JSON.parse(rawCards);
  }
}

function App() {
  const [cardPile, setCardPile] = useState<flashCard[]>(getLocalCards);
  const [currentCard, setCurrentCard] = useState<flashCard>(cardPile[0]);

  return (
    <Container className="App">
      <Row>
        <h1 className="mb-5">Study Flash Cards</h1>
      </Row>
      <Row>
        <ControlButtons 
        setCurrentCard={setCurrentCard} currentCard={currentCard} 
        setCardPile={setCardPile} cardPile={cardPile}></ControlButtons>
        <FlashCardViewer currentCard={currentCard}></FlashCardViewer>
      </Row>
      <EditFlashCards cardPile={cardPile} setCardPile={setCardPile} 
        currentCard={currentCard} setCurrentCard={setCurrentCard}></EditFlashCards>
      {/* <Row>
        <Button onClick={()=>{
          console.log(`cardPile: ${JSON.stringify(cardPile)}`);
        }
        }>Testing button</Button>
      </Row> */}
      <Row className="App-footer">
        <p>
          Tim's Portfolio
        </p>
      </Row>
    </Container>
  );
}

export default App;
