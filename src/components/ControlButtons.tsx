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
        let currInd: number = cardPile.indexOf(currentCard,0);
        let newPile: flashCard[] = [...cardPile];
        newPile[currInd] = flippedCard;
        setCardPile(newPile);
    }

    // Go to next card by index in cardPile
    function nextCard() {
        let tmpCard: flashCard = currentCard;
        let currInd: number = cardPile.indexOf(currentCard,0);
        let nextInd: number = (currInd + 1) % cardPile.length;
        setCurrentCard(cardPile[nextInd]);

        // Reset previous card to be face up
        tmpCard.isFront = true;
        let tmpPile: flashCard[] = [...cardPile];
        tmpPile[currInd] = tmpCard;
        setCardPile(tmpPile);
    }

    return <Col>
        <Container>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <div className="d-grid gap-2">
                        <Button onClick={flipCard} variant="primary" className="m-2 p-2">Flip Card</Button>
                    </div>
                </Col>
                <Col></Col>            
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}>
                    <div className="d-grid gap-2">
                        <Button onClick={nextCard} variant="primary" className="m-2 p-2">Next Card</Button>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </Col>
}