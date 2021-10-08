import NextHead from "../components/layout/NextHead";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/forms/ContactForm";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <Layout>
      <NextHead title="Contact" />
      <Container className="text-center mt-5">
        <Heading title="Contact" />
      </Container>
      <Row>
        <Col />
        <Col xs={10} md={6} xl={6}>
          <div className="message-container"></div>
          <ContactForm />
        </Col>
        <Col />
      </Row>
    </Layout>
  );
}
