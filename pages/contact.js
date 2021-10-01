import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Navigation from "../components/navigation/Navigation";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <Navigation>
      <Head title="Contact" />
      <Heading title="Contact" />
      <div className="message-container"></div>
      <ContactForm />
    </Navigation>
  );
}
