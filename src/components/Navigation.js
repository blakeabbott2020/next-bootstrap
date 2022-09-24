import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="primary" expand="lg" collapseOnSelect>
            <Container>
                <NavBrand href="/" text="Next-Bootstrap" />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

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

function NavBrand({ href, text }) {
    return (
        <Link href={href} passHref>
            <Navbar.Brand>{text}</Navbar.Brand>
        </Link>
    )
}