import NavLinks from "./NavLinks";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Navigation({ children }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container className="container-fluid">
          <Navbar.Brand href="/">JS Frameworks CA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">{children}</div>
    </>
  );
}
