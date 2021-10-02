import NextHead from "../components/layout/NextHead";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  return (
    <Layout>
      <NextHead title="Login" />
      <Heading title="Login" />
      <LoginForm />
    </Layout>
  );
}
