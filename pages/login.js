import NextHead from "../components/layout/NextHead";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/forms/LoginForm";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Login() {
  return (
    <Layout>
      <NextHead title="Login" />
      <Container className="text-center mt-5">
        <Heading title="Login" />
      </Container>
      <Row>
        <Col />
        <Col xs={9} md={9} xl={4}>
          <Container className="p-1 m-1">
            <LoginForm />
          </Container>
        </Col>
        <Col />
      </Row>
    </Layout>
  );
}
