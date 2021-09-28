import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";
import { FlashCardViewer } from "./FlashCardViewer";

const LOCAL_STORAGE_CARDS = 'flash-cards';

export function EditFlashCards({cardPile, setCardPile, currentCard}: {
    cardPile: flashCard[], 
    setCardPile: (f: flashCard[])=>void,
    currentCard: flashCard}): JSX.Element {
    const [newFront, setNewFront] = useState<string>("Front");
    const [newBack, setNewBack] = useState<string>("Back");

    function saveCards(): void {
        localStorage.setItem(LOCAL_STORAGE_CARDS,JSON.stringify(cardPile));
    }

    function addCard(): void {
        let newId: number = cardPile[cardPile.length-1].id + 1;
        let newCard: flashCard = {
            id: newId,
            front: newFront,
            back: newBack,
            isFront: true
        }
        setCardPile([...cardPile, newCard]);
    }

    return <Container className="border border-info p-2 m-4 ml-auto">
        <Row>
            {/* Add new card */}
            <Col style={{textAlign: "left"}}>
                <Form>
                    <Form.Group className="mb-1" controlId="newCardFront">
                        <Form.Label>Front</Form.Label>
                        <Form.Control type="text" placeholder="card front"
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setNewFront(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="newCardBack">
                        <Form.Label>Back</Form.Label>
                        <Form.Control type="text" placeholder="card back" 
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setNewBack(event.target.value);
                        }} />
                    </Form.Group>
                    <Button onClick={addCard} variant="secondary" type="reset">Add Flash Card</Button>
                </Form>
            </Col>

            {/* Edit Current Card */}
            <Col style={{textAlign: "left"}}>
                <Form>
                    <Form.Group className="mb-1" controlId="newCurrFront">
                        <Form.Label>Front</Form.Label>
                        <Form.Control type="text" placeholder="card front"
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setNewFront(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="newCurrBack">
                        <Form.Label>Back</Form.Label>
                        <Form.Control type="text" placeholder="card back" 
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setNewBack(event.target.value);
                        }} />
                    </Form.Group>
                    <Button variant="secondary">Edit Current Card placeholder</Button>
                </Form>            
            </Col>
        </Row>
        <Row>
            <Col>
                <Button onClick={saveCards} variant="secondary" className="mt-4">Save Cards</Button>
            </Col>
        </Row>
    </Container>
}