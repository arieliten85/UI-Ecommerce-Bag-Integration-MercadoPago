import { ChangeEvent } from "react";
import { Container, Card, Form, Alert } from "react-bootstrap";
import { CustomSpinner } from "../utils/utils";
import { UserSessionServices } from "../services/UserSessionServices";
import { IFormData, IMessage } from "../interfaces/interfaces";

export const SendResetPasswordPage = () => {
  const {
    handleChange,
    formData,
    handleSendResetPassword,
    message,
    sendEmail,
  } = UserSessionServices();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendResetPassword();
  };

  return (
    <Container className=" mt-5 vh-100 d-flex justify-content-center center align-items-center">
      <div className="d-flex mt-5 justify-content-center align-items-start h-100">
        <Card className="border-0 p-3">
          <Card.Body>
            <SendResetPasswordItemTitle />
            <SendResetPasswordItemForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              sendEmail={sendEmail}
            />
            <SendResetPasswordItemMessage message={message} />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

interface SendResetPasswordItemFormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  formData: IFormData;
  sendEmail: boolean;
}
interface SendResetPasswordItemMessageProps {
  message?: IMessage;
}
function SendResetPasswordItemMessage(
  props: SendResetPasswordItemMessageProps
) {
  const { message } = props;
  return (
    <>
      {message && (
        <Alert
          variant={message.status ? "success" : "danger"}
          className="mt-2 p-2 text-center"
        >
          {message.message}
        </Alert>
      )}
    </>
  );
}
function SendResetPasswordItemForm(props: SendResetPasswordItemFormProps) {
  const { handleSubmit, handleChange, formData, sendEmail } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          type="submit"
          className="px-3 customButtom"
          disabled={sendEmail}
        >
          {sendEmail ? <CustomSpinner /> : "Enviar"}
        </button>
      </div>
    </Form>
  );
}
function SendResetPasswordItemTitle() {
  return (
    <>
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "700",
          color: "#ccc8aa",
        }}
        className=" mb-3 text-center"
      >
        Cambiar Contraseña
      </h1>

      <p className="mb-5">
        Vamos a enviarte un email para que puedas cambiar tu contraseña.
      </p>
    </>
  );
}
