
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cardStyles.css';
/*
Note: editing index.css to set rules for card headers doesn't work
it looks like maybe all bootstrap css is taken from 'bootstrap/dist/css/bootstrap.css' only
probably because of the JSX used?
Work-around is I have to create a separate css file and import it here 

Note: "justify-content-between" class isn't working for CardGroup parent element, when it should?
Have to use a container element instead

Addendum: it looks like i CAN add css rules to the index.css file but 'internal' class names need to be used
and only certain ones work. For example, the only way i can set the Card text color is with inline CSS.
Tried custom class name "className="custom-card-text"" to use for external css file but didn't work
*/
function CardContainer() {
    /*className="d-flex justify-content-center align-items-center vh-100" is used to keep
    cards equidistant and equal size, relevant to browser window. vh-100 ensures that the 
    container takes up 100% of the viewport height. This helps in centering the content both horizontally and vertically,
    but it seems like it centers the cards towards the bottom instead of the vertical center 
    all cards must have the same width in order to horizontally center */

    //className="d-flex flex-wrap justify-content-between justify-content-center align-items-center "
    //className="d-flex flex-wrap justify-content-between" 
  return (
    <Container className="d-flex justify-content-center align-items-center " >
        <Row xs={1} md={3} className="g-5">
        <Col>
      <Card bg="primary" text="white" style={{ width: '20rem' }}>
        <Card.Header>Card 01</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card bg="danger" text="white" style={{ width: '20rem' }}>
        <Card.Header>Card 02</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>


      <Col>
      <Card className="custom-card-text" text="white" bg="success" style={{ width: '20rem' }}>
        <Card.Header>Card 03</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      </Row>
    </Container>
    
  );
}

export default CardContainer;