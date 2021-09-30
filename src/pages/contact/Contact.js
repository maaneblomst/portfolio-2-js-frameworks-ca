import Heading from "../../components/common/Heading";
import ContactForm from "../../components/forms/ContactForm";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <Container>
      <Heading size="1" content="Contact" />
      <ContactForm />
    </Container>
  );
}
