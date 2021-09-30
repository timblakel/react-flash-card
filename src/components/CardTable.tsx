import { Col, Container, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";

export function CardTable({cardPile}: {cardPile: flashCard[]}) {

    return (<Container className="mt-4">
        <Row>
        <Col style={{textAlign: "center"}}>
            <h4 className="fw-bold">List of Flashcards</h4>
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
                {cardPile.map( (card: flashCard) =>
                    <tr>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    </tr>
                )}
            </tbody>
            </table>
        </Col>
        </Row>
    </Container> );
}