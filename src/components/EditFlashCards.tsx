import { Button, Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

const LOCAL_STORAGE_CARDS = 'flash-cards';

export function EditFlashCards({cardPile, setCardPile}: {cardPile: flashCard[], setCardPile: (f: flashCard[])=>void}): JSX.Element {

    function saveCards(): void {
        localStorage.setItem(LOCAL_STORAGE_CARDS,JSON.stringify(cardPile));
    }

    function addCard(): void {
        console.log('Add card');
    }

    return <Container className="border border-info p-2 m-4">
        <Row>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            Add flash card form
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="secondary">Add Flash Card</Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col>
                <Button variant="secondary">Edit Current Card placeholder</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button onClick={saveCards} variant="secondary">Save Cards</Button>
            </Col>
        </Row>
    </Container>
}