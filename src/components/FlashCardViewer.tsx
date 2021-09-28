import { Col, Card } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";



export function FlashCardViewer({currentCard}: {currentCard: flashCard}): JSX.Element {

    function getCardHeader(): string {
        if (currentCard.isFront) {
            return "Flashcard Front";
        } else {
            return "Flashcard Back";
        }
    }

    function getCardBg(): string {
        if (currentCard.isFront) {
            return "primary";
        } else {
            return "danger";
        }
    }

    return <Col>
        <Card bg={getCardBg()} text="light">
            <Card.Header>{getCardHeader()}</Card.Header>
            <Card.Body>
                {currentCard.isFront && <Card.Text>
                    {currentCard.front}
                </Card.Text>}
                {!currentCard.isFront &&<Card.Text>
                    {currentCard.back}
                </Card.Text>}
            </Card.Body>
        </Card>
    </Col>
}