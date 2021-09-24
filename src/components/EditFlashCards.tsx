import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

const LOCAL_STORAGE_CARDS = 'flash-cards';

export function EditFlashCards({cardPile, setCardPile}: {cardPile: flashCard[], setCardPile: (f: flashCard[])=>void}): JSX.Element {

    function saveCards(): void {
        localStorage.setItem(LOCAL_STORAGE_CARDS,JSON.stringify(cardPile));
    }

    function addCard(): void {
        console.log('Add card');
    }

    return <Container className="border border-info p-2 m-4 ml-auto">
        <Row>
            <Col style={{textAlign: "left"}}>
                <Form>
                    <Form.Group className="mb-1" controlId="newCardFront">
                        <Form.Label>Front</Form.Label>
                        <Form.Control type="text" placeholder="card front" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="newCardBack">
                        <Form.Label>Back</Form.Label>
                        <Form.Control type="text" placeholder="card back" />
                    </Form.Group>
                    <Button variant="secondary">Add Flash Card</Button>
                </Form>
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