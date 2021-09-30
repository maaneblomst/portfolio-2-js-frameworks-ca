import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logOut() {
    setAuth(null);
    history.push("/");
  }

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
      <Link to="/">
        <Navbar.Brand>JS Frameworks CA</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar" />
      <Navbar.Collapse id="basic-navbar">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          {auth ? (
            <>
              <Link to="/admin" className="p-2 nav-link">
                Admin
              </Link>
              <Button
                variant="link"
                onClick={logOut}
                className="text-white ml-1"
              >
                <i className="fas fa-sign-out-alt"></i>Log out
              </Button>
            </>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
