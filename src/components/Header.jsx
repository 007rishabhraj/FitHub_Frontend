import {
    Button,
    ButtonGroup,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar
                bg="dark"
                data-bs-theme="dark"
                expand="lg"
                className="bg-body-tertiary"
            >
                <Container>
                    <Navbar.Brand>Fithub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/scores"}>
                                Scores
                            </Nav.Link>
                            <NavDropdown
                                title="Accessories"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item as={Link} to={"/exercise"}>
                                    Exercise
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/calorie"}>
                                    Calorie
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/yoga"}>
                                    Yoga
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    as={Link}
                                    to={"/mentalhealth"}
                                >
                                    Mental Health
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <ButtonGroup>
                                <Button as={Link} to="/signup">
                                    Signup
                                </Button>
                                <Button as={Link} to="/login">
                                    Login
                                </Button>
                            </ButtonGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Header;
