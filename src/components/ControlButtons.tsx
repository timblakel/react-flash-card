import { Button, Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

export function ControlButtons({setCurrentCard, currentCard, setCardPile, cardPile}: {
        setCurrentCard: (f: flashCard) => void, 
        currentCard: flashCard,
        setCardPile: (f: flashCard[]) => void,
        cardPile: flashCard[]
    }): JSX.Element {
    
    function flipCard() {
        let flippedCard: flashCard = {...currentCard};
        flippedCard.isFront = !flippedCard.isFront;
        setCurrentCard(flippedCard);
        // console.log(`flipped card: ${JSON.stringify(flippedCard)}`);
        // console.log(`cardPile ${JSON.stringify(cardPile)}`);
        // console.log(`currentCard: ${JSON.stringify(currentCard)}`);
        let currInd: number = cardPile.indexOf(currentCard,0);
        let newPile: flashCard[] = [...cardPile];
        newPile[currInd] = flippedCard;
        setCardPile(newPile);
    }

    function nextCard() {
        let currInd: number = cardPile.indexOf(currentCard,0);
        let nextInd: number = (currInd + 1) % cardPile.length;
        setCurrentCard(cardPile[nextInd]);
    }

    return <Col>
        <Container>
            <Row>
                <Button onClick={flipCard} variant="primary" className="m-2">Flip Card</Button>
            </Row>
            <Row>
                <Button onClick={nextCard} variant="primary" className="m-2">Next Card</Button>
            </Row>
        </Container>
    </Col>
}