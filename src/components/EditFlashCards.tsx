import React, { useState } from "react";
import { Modal, Button, Col, Container, Form, Row } from "react-bootstrap";
import { flashCard } from "../interfaces/flashCard";
// import { FlashCardViewer } from "./FlashCardViewer";

const LOCAL_STORAGE_CARDS = 'flash-cards';

export function EditFlashCards({cardPile, setCardPile, currentCard, setCurrentCard}: {
    cardPile: flashCard[], 
    setCardPile: (f: flashCard[])=>void,
    currentCard: flashCard,
    setCurrentCard: (f: flashCard)=>void}): JSX.Element {

    // Adding new card with form
    const [newFront, setNewFront] = useState<string>("Front");
    const [newBack, setNewBack] = useState<string>("Back");

    // Editing current card with form
    const [newCurrCard, setNewCurrCard] = useState<flashCard>({...currentCard});
    const [currCardIsEdit, setCurrCardIsEdit] = useState<boolean>(false);

    // Boolean, true when only one card is left in the pile
    const [oneCard, setOneCard] = useState<boolean>(false);

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

        // Set current card to new card
        setCurrentCard(newCard);
    }

    // Set newCurrCard state as form is editted
    function editNewCurrCard(newContent: string, frontOrBack: boolean): void {
        let tmpCard: flashCard = {...newCurrCard};
        if (frontOrBack) {
            tmpCard.front = newContent;
        } else {
            tmpCard.back = newContent;
        }
        setNewCurrCard(tmpCard);
        setCurrCardIsEdit(true);
    }
    
    // Push changes to current card (setCurrentCard and setCardPile)
    function saveNewCurrCard() {
        if (!currCardIsEdit) {
            // Don't save new card if it was not editted
            return;
        }
        let tmpCard: flashCard = {...newCurrCard};
        let currInd: number = cardPile.indexOf(currentCard,0);
        let newPile: flashCard[] = [...cardPile];
        newPile[currInd] = tmpCard;
        setCardPile(newPile);     
        setCurrentCard(tmpCard);  
        setCurrCardIsEdit(false); 
    }

    // Delete current card
    // set current card to next index and update cardPile
    function deleteCurrCard() {
        if (cardPile.length > 1) {
            let currInd: number = cardPile.indexOf(currentCard,0);
            let nextInd: number = (currInd + 1) % cardPile.length;
            setCurrentCard(cardPile[nextInd]);

            let tmpPile: flashCard[] = [...cardPile];
            tmpPile.splice(currInd,1);
            setCardPile(tmpPile);
        } else {
            // some warning about being on the last card
            setOneCard(true);
        }
    }

    return <Container className="mt-4 border border-4 p-2 rounded">
        <Row>
            {/* Add new card */}
            <Col style={{textAlign: "left"}}>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h4>Add a new card</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-1" controlId="newCardFront">
                                <Form.Label>Front</Form.Label>
                                <Form.Control type="text" placeholder="card front" data-testid="newCardFrontIn"
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setNewFront(event.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="newCardBack">
                                <Form.Label>Back</Form.Label>
                                <Form.Control type="text" placeholder="card back" data-testid="newCardBackIn" 
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setNewBack(event.target.value);
                                }} />
                            </Form.Group>
                            <Button onClick={addCard} variant="secondary" type="reset">Add Flash Card</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>

            {/* Edit Current Card */}
            <Col style={{textAlign: "left"}}>
                <Row>
                <Col style={{textAlign: "center"}}>
                        <h4>Edit the current card</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-1" controlId="newCurrFront">
                                <Form.Label>Front</Form.Label>
                                <Form.Control type="text"
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    editNewCurrCard(event.target.value,true);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="newCurrBack">
                                <Form.Label>Back</Form.Label>
                                <Form.Control type="text"
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    editNewCurrCard(event.target.value,false);
                                }} />
                            </Form.Group>
                            <Button onClick={saveNewCurrCard} variant="secondary" type="reset">Save Current Card</Button>
                            <Button onClick={deleteCurrCard} variant="secondary" className="ms-2 me-2" type="reset">Delete Current Card</Button>
                        </Form>
                    </Col>
                </Row>            
            </Col>
        </Row>
        <Row>
        <Col></Col>
            <Col xs={8}>
                <div className="d-grid gap-2">
                    <Button onClick={saveCards} variant="primary" className="mt-4">Save Cards</Button>
                </div>
            </Col>
            <Col></Col>
        </Row>   
    
        <Modal show={oneCard} onHide={()=>{setOneCard(false)}}>
            <Modal.Header closeButton>
            <Modal.Title>Only one card left!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You cannot delete the current card. It is the only remaining card.</Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>{setOneCard(false)}} variant="secondary">
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </Container>    
}