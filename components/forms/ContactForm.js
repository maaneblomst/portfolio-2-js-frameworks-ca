import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import displayMessage from "../messages/displayMessage";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your name must be at least ${min} characters."),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Your name must be at least ${min} characters."),
  email: yup
    .string()
    .email("Must be a valid e-mail")
    .required("Please enter your e-mail"),
  subject: yup
    .string()
    .oneOf(["feedback", "suggestions"], "Please pick a subject")
    .required("Please pick a subject"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Your message must be at least 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data, e) {
    console.log(data);
    e.target.reset(); // reset after form submit
    displayMessage(
      "success",
      "Thank you. Your form was successfully submitted.",
      ".message-container"
    );
  }

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName" className="d-sm-block">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your first name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <Alert className="alert-warning mt-2">
              {errors.firstName.message}
            </Alert>
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
            <Alert className="alert-warning mt-2">
              {errors.lastName.message}
            </Alert>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your e-mail"
            {...register(
              "email",
              { required: true },
              {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }
            )}
          />
          {errors.email && (
            <Alert className="alert-warning mt-2">{errors.email.message}</Alert>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="select"
            data={["feedback", "suggestions"]}
            name="subject"
            {...register("subject", { required: true })}
          >
            <option defaultValue>Click to pick a subject</option>
            <option value="feedback">Feedback</option>
            <option value="suggestions">Suggestions</option>
          </Form.Control>
          {errors.subject && (
            <Alert className="alert-warning mt-2">
              {errors.subject.message}
            </Alert>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          {...register("message", { required: true })}
        ></Form.Control>
        {errors.message && (
          <Alert className="alert-warning mt-2">{errors.message.message}</Alert>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-2">
        Submit
      </Button>
    </Form>
  );
}
