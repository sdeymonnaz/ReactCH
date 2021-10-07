import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Apolloni</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">New arrivals</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Components</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Devices</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Monitors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

