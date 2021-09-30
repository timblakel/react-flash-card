import { Col, Container, Row } from "react-bootstrap";

export function CardTable() {

    return (<Container className="mt-2">
        <Row>
        <Col style={{textAlign: "center"}}>
            <h4>List of Flashcards</h4>
        </Col>
        </Row>
        <Row>
        <Col>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Front</th>
                <th scope="col">Back</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                </tr>
                <tr>
                <td>Larry</td>
                <td>the Bird</td>
                </tr>
            </tbody>
            </table>
        </Col>
        </Row>
    </Container> );
}