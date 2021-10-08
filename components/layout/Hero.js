import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="bgimage mb-3">
      <Container fluid className="pt-5 text-center text-primary">
        <Row>
          <Col sm={12} md={12} lg={12} className="intro">
            <Jumbotron>
              <p className="display-1 h1">Juicy Fruits</p>
              <p>Your go-to blog about fruits and vegetables</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
