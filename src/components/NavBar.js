import {Navbar, Container, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget.js';

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Apolloni</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#new">New arrivals</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Navbar.Brand href="#cart"><CartWidget /></Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

