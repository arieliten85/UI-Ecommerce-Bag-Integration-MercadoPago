import { ChangeEvent } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

import queryString from "query-string";

import { IFormData, IMessage } from "../interfaces/interfaces";
import { UserSessionServices } from "../services/UserSessionServices";

export const ResetPasswordPage = () => {
  const { resetSuccess, handleResetPassword, message, handleChange, formData } =
    UserSessionServices();

  const params = queryString.parse(window.location.search);
  const token = params.token as string;

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleResetPassword(token);
  };

  return (
    <Container className="mt-5 vh-100 d-flex justify-content-center center  align-items-center">
      <div
        className="d-flex mt-5 justify-content-center align-items-start h-100  "
        style={{ width: !resetSuccess ? "450px" : "" }}
      >
        <Card style={{ maxWidth: "400px" }} className="border-0 w-100">
          <Card.Body>
            <ResetPasswordPageItemTitle />

            <ResetPasswordPageItemForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <ResetPasswordPageItemMessage message={message} />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

interface ResetPasswordPageItemFormProps {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: IFormData;
}
interface ResetPasswordPageItemMessage {
  message?: IMessage;
}

function ResetPasswordPageItemMessage(props: ResetPasswordPageItemMessage) {
  const { message } = props;
  return (
    <>
      {message?.status && (
        <Alert
          variant={`${message.error ? "danger" : "success"}`}
          className="mt-3 p-2 text-center"
        >
          {message?.message}
        </Alert>
      )}
    </>
  );
}
function ResetPasswordPageItemForm(props: ResetPasswordPageItemFormProps) {
  const { handleSubmit, handleChange, formData } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <Form.Control
            type="password"
            name="newPassword"
            placeholder="Nueva contraseña"
            value={formData.newPassword}
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
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
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
function ResetPasswordPageItemTitle() {
  return (
    <>
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "700",
          color: "#ccc8aa",
        }}
        className=" mb-5 text-center"
      >
        Restablecer Contraseña
      </h1>
      <p className="text-center">
        Por favor, ingresa tu nueva contraseña a continuación:
      </p>
    </>
  );
}
