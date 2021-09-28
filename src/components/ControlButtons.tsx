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

    // Go to next card by index in cardPile
    function nextCard() {
        let tmpCard: flashCard = currentCard;

        // console.log(`card pile: ${JSON.stringify(cardPile)}`);

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
                <Button onClick={flipCard} variant="primary" className="m-2">Flip Card</Button>
            </Row>
            <Row>
                <Button onClick={nextCard} variant="primary" className="m-2">Next Card</Button>
            </Row>
        </Container>
    </Col>
}