import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Whole Library
import { Container, Carousel, Row, Column, Button, Alert, Breadcrumb, Card, Form, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2015/12/6f112bbafabd5ed6981333d03eb25d7f/172858197156680a0ce3aca.jpg?itok=sAZQJRvS"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/02/13154541/Subaru07Por.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2015/12/6f112bbafabd5ed6981333d03eb25d7f/172858197156680a0ce3aca.jpg?itok=sAZQJRvS"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 
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
