import NavLinks from "./NavLinks";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container className="container-fluid">
          <Navbar.Brand href="/">JS Frameworks CA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
