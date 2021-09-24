import { Button, Col, Container, Row } from "react-bootstrap";


export function EditFlashCards(): JSX.Element {

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