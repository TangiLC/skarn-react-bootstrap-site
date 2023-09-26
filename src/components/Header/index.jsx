import React,{ useState }  from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Spiral as Hamburger } from 'hamburger-react'
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/skarn_logo120.png";

function Header() {
	const [isOpen, setOpen] = useState(false)

  return (
    <Navbar className="row" collapseOnSelect expand="md" bg="dark"  onToggle={() => setOpen(!isOpen)}>
      
        <Navbar.Brand href="/"><img src={Logo} alt="Skarn Studio" className="skarn-logo"/></Navbar.Brand>
        <Navbar.Toggle>
          <Hamburger toggled={isOpen} toggle={setOpen} color="rgba(255, 221, 148,1)" rounded distance="md" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Accueil</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;
