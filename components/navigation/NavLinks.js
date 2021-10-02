import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function NavLinks() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  function logOut() {
    setAuth(null);
    router.push("/");
  }

  return (
    <>
      <Nav className="ml-auto">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/contact" passHref>
          <Nav.Link>Contact</Nav.Link>
        </Link>
        {auth ? (
          <>
            <Link href="/admin" passHref>
              <Nav.Link>Admin</Nav.Link>
            </Link>
            <Button onClick={logOut} variant="link" className="text-white">
              <i className="fas fa-sign-out-alt"></i>
            </Button>
          </>
        ) : (
          <Link href="/login" passHref>
            <Nav.Link>Login</Nav.Link>
          </Link>
        )}
      </Nav>
    </>
  );
}
