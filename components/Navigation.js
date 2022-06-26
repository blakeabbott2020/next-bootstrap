import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="primary" className='bg-gradiant' expand="lg">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>Next-Bootstrap</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <NavLink href="/about" text="About" />
                        <NavLink href="/contact" text="Contact" />
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