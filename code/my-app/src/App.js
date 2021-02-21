import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Single Button
//import Button from 'react-bootstrap/Button'

//Whole Library
import { Container, Row, Column, Button, Alert, Breadcrumb, Card, Form, Col } from 'react-bootstrap'

//Notes
//<Container>  makes it fit to the page, fluid will make sure max room
//<Container fluid> 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container> 
        <Form>
          <Row>
            <Col md>
            <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com"></Form.Control>
            <Form.Text className="text=muted">We will never see your email</Form.Text>
          </Form.Group>
            </Col>
            <Col md>
            <Form.Group ontrolId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>
          <Button variant="secondary" type="submit">Login</Button>
            </Col>
          </Row>
        </Form>
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
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item active>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}
export default App;
