import {Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import { NavLink , Link} from "react-router-dom";
import CartWidget from './CartWidget.js';
import './NavBar.css'

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="navBarItem" id="navBarHome">Apolloni Books</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink exact to="/" activeClassName="selected" className="navBarItem">Home</NavLink>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink exact to="/category/novels" activeClassName="selected" className="navBarItem">Novels</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink exact to="/category/fiction" activeClassName="selected" className="navBarItem">Fiction</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink exact to="/category/biography" activeClassName="selected" className="navBarItem">Biography</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <NavItem className="d-flex justify-content-end">
                    <NavLink exact to="/cart" className="navBarItem" activeClassName="selected"><CartWidget /></NavLink>
                </NavItem>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

