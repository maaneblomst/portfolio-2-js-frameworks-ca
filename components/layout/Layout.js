import Navigation from "../navigation/Navigation";
import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
}
