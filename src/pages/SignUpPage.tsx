import { ChangeEvent, useState } from "react";
import { Container, Card, Form, Button, Col, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";

import { IFormData, IMessage } from "../interfaces/interfaces";
import { UserSessionServices } from "../services/UserSessionServices";

const formDataInitial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const SignUpPage = () => {
  const [formData, setFormData] = useState<IFormData>(formDataInitial);

  const { sendConfirmationEmail, message, handleSignUp, registerSuccess } =
    UserSessionServices();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp(formData);
  };
  const handleReSendEmailAuth = async () => {
    sendConfirmationEmail(formData);
  };

  return (
    <Container
      className=" vh-100 d-flex justify-content-center center  align-items-center"
      style={{
        marginTop: "50px",
      }}
    >
      <SignUpItemCardForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        registerSuccess={registerSuccess}
        handleReSendEmailAuth={handleReSendEmailAuth}
        message={message}
      />
    </Container>
  );
};

interface SignUpItemCardFormProps {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReSendEmailAuth: () => void;
  message?: IMessage;
  registerSuccess: boolean;
  formData: IFormData;
}
interface SignUpItemFormProps {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: IFormData;
}
interface SignUpItemMessageProps {
  handleReSendEmailAuth: () => void;
  message?: IMessage;
}

function SignUpItemCardForm(props: SignUpItemCardFormProps) {
  const {
    handleSubmit,
    handleChange,
    message,
    handleReSendEmailAuth,
    registerSuccess,
    formData,
  } = props;
  return (
    <div
      className="d-flex mt-5 justify-content-center align-items-start h-100  "
      style={{ width: !registerSuccess ? "450px" : "" }}
    >
      {!registerSuccess ? (
        <Card style={{}} className="border-0 w-100">
          <Card.Body className="p-4">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "700",
                color: "#ccc8aa",
              }}
              className=" mb-5 text-center"
            >
              Creat cuenta
            </h1>

            <SignUpItemForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <p className="text-center pt-3 text-danger">
              {" "}
              {message?.status ? <p>{message.message}</p> : ""}
            </p>

            <SignUpItemHaveAccount />
          </Card.Body>
        </Card>
      ) : (
        <SignUpItemMessage
          message={message}
          handleReSendEmailAuth={handleReSendEmailAuth}
        />
      )}
    </div>
  );
}
function SignUpItemForm(props: SignUpItemFormProps) {
  const { handleSubmit, formData, handleChange } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="ej: María"
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="ej: Gonzalez"
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i>
          </span>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            placeholder="ej: tunombre@email.com"
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <Form.Control
            type="password"
            name="password"
            placeholder="ej:123456"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>

      <Button type="submit" className="w-100 customButtom">
        Crear cuenta
      </Button>
    </Form>
  );
}
function SignUpItemMessage(props: SignUpItemMessageProps) {
  const { message, handleReSendEmailAuth } = props;
  return (
    <Col xs={12} md={8} style={{ maxWidth: "100%" }} className="border p-5">
      <h2 className="fs-1 text-center ">
        Gracias por registrarse en nuestra plataforma!
      </h2>

      <div className="text-center">
        <Alert variant="warning my-4">
          Le hemos enviado un correo a su direccion de email, por favor siga las
          intrucciones para finalizar el registro.
        </Alert>

        <p>No a recibido el correo?</p>

        <Button
          className="customButtom"
          onClick={() => handleReSendEmailAuth()}
        >
          Reenviar
        </Button>

        {message?.status ? <p>{message.message}</p> : ""}
      </div>
    </Col>
  );
}
function SignUpItemHaveAccount() {
  return (
    <div className="mt-3 text-center">
      <p>
        ¿Ya tenés una cuenta?
        <Link to="/signIn" className="text-black">
          <span
            style={{
              color: "#aaa68a",
            }}
            className="   px-2"
          >
            Inicia sesión
          </span>
        </Link>
      </p>
    </div>
  );
}
