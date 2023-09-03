import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartButton from './CartButton';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand ='lg'>
        <Container>
          <Navbar.Brand href="#home">E-commerce-website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;