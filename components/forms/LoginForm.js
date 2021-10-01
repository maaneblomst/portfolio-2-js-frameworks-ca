import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../messages/formError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submit, setSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmit(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      router.push("/admin");
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmit(false);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError variant="danger">{loginError}</FormError>}
        <FormGroup disabled={submit}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("username")}
            name="username"
            placeholder="username"
          />
          {errors.username && (
            <FormError variant="warning">{errors.username.message}</FormError>
          )}
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            name="password"
            placeholder="password"
          />
          {errors.password && (
            <FormError variant="warning">{errors.password.message}</FormError>
          )}
          <Button type="submit" className="mt-3">
            {submit ? "Logging in..." : "Login"}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}