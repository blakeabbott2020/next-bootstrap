import Link from "next/link"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="primary" expand="sm" collapseOnSelect>
            <Container>

                {/* Navbar Brand */}
                <Link href="/" passHref>
                    <Navbar.Brand>
                        Next-Bootstrap
                    </Navbar.Brand>
                </Link>



                {/* Mobile Nav Toggle Button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />



                {/* Expanded Nav Links */}
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">

                        <NavLink href="/docs" text="Docs" />

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

function NavLink({ href, text }) {
    return (
        <Link href={href} passHref>
            <Nav.Link>{text}</Nav.Link>
        </Link>
    )
}