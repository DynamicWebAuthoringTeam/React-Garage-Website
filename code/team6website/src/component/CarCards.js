import React from 'react'
import { 
    Container, Row, Col, 
    Card, Button
} from 'react-bootstrap'
function CarCards() {
    return (
        <>
        <Container>
            <Row>
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
        </Container>
        </>
    )
}

export default CarCards
