import NextHead from "../components/layout/NextHead";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <NextHead title="Contact" />
      <Heading title="Contact" />
      <div className="message-container"></div>
      <ContactForm />
    </Layout>
  );
}
