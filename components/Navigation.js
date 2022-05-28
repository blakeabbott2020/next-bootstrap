import { Navbar, Container, Nav } from "react-bootstrap"

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">link</Nav.Link>
                        <Nav.Link href="#home">link</Nav.Link>
                        <Nav.Link href="#home">link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}