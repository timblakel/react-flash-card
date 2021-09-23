import { Button, Col, Container, Row } from "react-bootstrap";


export function ControlButtons(): JSX.Element {
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