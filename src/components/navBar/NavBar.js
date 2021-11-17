import {Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaBookOpen } from 'react-icons/fa';
import { NavLink , Link} from "react-router-dom";
import CartWidget from '../widgets/CartWidget.js';
import './NavBar.css'

const NavBar = () =>{
    return(

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="d-flex">
                    <IconContext.Provider
                        value={{size: '2.5rem' }}><FaBookOpen className="m-2 navBarItem" />
                    </IconContext.Provider>
                    <Link to="/" className="navBarItem" id="navBarHome">Apolloni Books</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink exact to="/" activeClassName="selected" className="navBarItem">Home</NavLink>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavLink exact to="/category/novels" activeClassName="selected" className="navBarItem">Novels</NavLink>
                        <NavLink exact to="/category/fiction" activeClassName="selected" className="navBarItem">Fiction</NavLink>
                        <NavLink exact to="/category/biography" activeClassName="selected" className="navBarItem">Biography</NavLink>
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

