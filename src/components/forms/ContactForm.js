import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your name must be at least 3 characters."),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Your name must be at least 4 characters."),
  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Please enter a valid e-mail"),
  subject: yup.string().required("Please enter the subject"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Your message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data, e) {
    try {
      console.log(data);
      e.target.reset(); // reset after form submit
      setSubmit(true);
    } catch (error) {
      setSubmit(false);
      console.log(error);
      console.log(errors);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {submit && (
        <DisplayAlert variant="success">
          Thank you! Your form has been submitted.
        </DisplayAlert>
      )}
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName" className="d-sm-block">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your first name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <FormError variant="warning">{errors.firstName.message}</FormError>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="formLastName" className="d-sm-block">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your last name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <FormError variant="warning">{errors.lastName.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            {...register(
              "email",
              { required: true },
              { pattern: /^\S+@\S+$/i }
            )}
          />
          {errors.email && (
            <FormError variant="warning">{errors.email.message}</FormError>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="select"
            {...register("subject", { required: true })}
          >
            <option value="feedback">Feedback</option>
            <option value="suggestions">Suggestions</option>
            <option value="complaints">Complaints</option>
          </Form.Control>
          {errors.subject && (
            <FormError variant="warning">{errors.subject.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your message here (at least 10 characters)"
          {...register("message", { required: true })}
        ></Form.Control>
        {errors.message && (
          <FormError variant="warning">{errors.message.message}</FormError>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
