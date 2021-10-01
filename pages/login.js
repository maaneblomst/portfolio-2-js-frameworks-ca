import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Navigation from "../components/navigation/Navigation";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  return (
    <Navigation>
      <Head title="Login" />
      <Heading title="Login" />
      <LoginForm />
    </Navigation>
  );
}
