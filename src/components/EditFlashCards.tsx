import { Button, Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

const LOCAL_STORAGE_CARDS = 'flash-cards';

export function EditFlashCards({cardPile}: {cardPile: flashCard[]}): JSX.Element {

    function saveCards(): void {
        localStorage.setItem(LOCAL_STORAGE_CARDS,JSON.stringify(cardPile));
    }

    return <Container className="border border-info p-2 m-4">
        <Row>
            <Col>
                <Button variant="secondary">Add Flash Card</Button>
            </Col>
            <Col>
                <Button variant="secondary">Edit Current Card placeholder</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="secondary">Save placeholder</Button>
            </Col>
        </Row>
    </Container>
}