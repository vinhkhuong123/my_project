import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css"

export function Header() {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("isLogin");
        navigate("/login");
    };

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/product">Products</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={logOut}>
                            <Link to="/logout">Log out</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default Header;