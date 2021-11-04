import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget.js';
import './NavBar.css'

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="navBarItem">Apolloni Books</NavLink>
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
                <Container className="d-flex justify-content-end">
                    <NavLink exact to="/cart" className="navBarItem" activeClassName="selected"><CartWidget /></NavLink>
                </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

