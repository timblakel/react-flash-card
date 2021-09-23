import { Col, Card } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

export function FlashCardViewer({currentCard}: {currentCard: flashCard}): JSX.Element {
    return <Col>
        <Card>
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