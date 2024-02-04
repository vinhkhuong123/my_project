import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">trang chu</Navbar.Brand>
                    <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                    <Navbar.Collapse id = "basic-navbar-nav">
                        <Nav className = "me-auto">
                            <Nav.Link><Link to ="/"style={{textDeccoration:"none", color:"black"}}>Home</Link></Nav.Link>
                            <Nav.Link><Link to ="/detail"style={{textDeccoration:"none", color:"black"}}>Dat hang</Link></Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header