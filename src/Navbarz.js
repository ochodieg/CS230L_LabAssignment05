import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// needed to install 'react-bootstrap' instead of just 'bootstrap'

function Navbarz() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav  //opening tag attributes
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Contact</Nav.Link>
            
            <NavDropdown title="links" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              
              <NavDropdown.Divider /> 
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#" disabled>placeholder</Nav.Link>
         
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarz;