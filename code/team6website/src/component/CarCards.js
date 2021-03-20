import React from 'react'
import { 
    Container, Row, Col, Card, Button
} from 'react-bootstrap'


// All <Col> component here with in each row should have 'md' example: <Col md>
// Might be able to move all this into css
function CarCards() {
    return (
        <>
        <Button variant="primary" onClick={event =>  window.location.href='/singlecar?id=1'}>1</Button>
        <Button variant="primary" onClick={event =>  window.location.href='/singlecar?id=2'}>2</Button>
        <Button variant="primary" onClick={event =>  window.location.href='/singlecar?id=2'}>3</Button>
        <Button variant="primary" onClick={event =>  window.location.href='/singlecar?id=2'}>4</Button>
        <Container>
            <Row>
                <Col md>
                    <Card className="mb-3" style={{color: "#000"}}>
                    <Card.Img src="https://picsum.photos/200/50"></Card.Img>
                    <Card.Body>
                        <Card.Title>Card Example</Card.Title>
                        <Card.Text>
                        This is a example of react bootstrap cards
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                    </Card></Col>
                    <Col md>
                        <Card className="mb-3" style={{color: "#000"}}>
                <Card.Img src="https://picsum.photos/200/50"></Card.Img>
                <Card.Body>
                    <Card.Title>Card Example</Card.Title>
                    <Card.Text>
                    This is a example of react bootstrap cards
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
                </Card></Col>
                    </Row>
                    <Row>
                <Col md>
                    <Card className="mb-3" style={{color: "#000"}}>
                    <Card.Img src="https://picsum.photos/200/50"></Card.Img>
                    <Card.Body>
                        <Card.Title>Card Example</Card.Title>
                        <Card.Text>
                        This is a example of react bootstrap cards
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md>
                    <Card className="mb-3" style={{color: "#000"}}>
                    <Card.Img src="https://picsum.photos/200/50"></Card.Img>
                    <Card.Body>
                        <Card.Title>Card Example</Card.Title>
                        <Card.Text>
                        This is a example of react bootstrap cards
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md>
                    <Card className="mb-3" style={{color: "#000"}}>
                        <Card.Img src="https://picsum.photos/200/50"></Card.Img>
                        <Card.Body>
                            <Card.Title>Card Example</Card.Title>
                            <Card.Text>
                            This is a example of react bootstrap cards
                            </Card.Text>
                        <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CarCards
