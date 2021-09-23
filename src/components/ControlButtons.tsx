import { Button, Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

export function ControlButtons({setCurrentCard}: {setCurrentCard: (f: flashCard) => void}): JSX.Element {
    function flipCard(flashCard: flashCard) {

    }

    return <Col>
        <Container>
            <Row>
                <Button variant="primary" className="m-2">Flip Card</Button>
            </Row>
            <Row>
                <Button variant="secondary" className="m-2">Next Card</Button>
            </Row>
        </Container>
    </Col>
}