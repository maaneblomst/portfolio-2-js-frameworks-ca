import { useRouter, Router } from "next/router";
import { useState, useContext, useEffect } from "react";
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
  username: yup
    .string()
    .email("Must be a valid e-mail")
    .required("Please enter your e-mail address"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submit, setSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    const { pathname } = Router;
    if (auth) {
      setTimeout(function () {
        router.push("/admin");
      }, 1000);
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmit(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError("Wrong username or password. Please try again.");
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        {loginError && <FormError variant="danger">{loginError}</FormError>}
        <FormGroup disabled={submit}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("username")}
            name="username"
            placeholder="you@juicynews.blog"
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
