"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
    return (
        <Navbar expand="lg" className="bg-dark shadow" variant="dark" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand href="/">Arizona Cactus Sales</Navbar.Brand>


                <Navbar.Toggle aria-controls="navbar-nav" />


                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/shop">ONLINE SHOP</Nav.Link>
                        <Nav.Link href="/care-and-tips">CARE & TIPS</Nav.Link>
                        <Nav.Link href="/cactus-links">CACTUS LINKS</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/more">MORE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigation;