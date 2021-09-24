import { Button, Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

export function ControlButtons({setCurrentCard, currentCard}: {setCurrentCard: (f: flashCard) => void, currentCard: flashCard}): JSX.Element {
    function flipCard() {
        let flippedCard: flashCard = {...currentCard};
        flippedCard.isFront = !flippedCard.isFront;
        setCurrentCard(flippedCard);
    }

    return <Col>
        <Container>
            <Row>
                <Button onClick={flipCard} variant="primary" className="m-2">Flip Card</Button>
            </Row>
            <Row>
                <Button variant="secondary" className="m-2">Next Card</Button>
            </Row>
        </Container>
    </Col>
}