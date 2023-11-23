import { ChangeEvent } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import confirmEmail from "../assets/confirmEmail.jpg";
import { IFormData, IMessage } from "../interfaces/interfaces";
import { UserSessionServices } from "../services/UserSessionServices";

export const AccountConfirmationPage = () => {
  const {
    message,
    handleResendConfirmation,
    handleChange,
    formData,
    setShowModal,
  } = UserSessionServices();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleResendConfirmation();
    setShowModal(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <div className="w-100 max-w-sm">
        <Card className="border-0 ">
          <Card.Body className="p-0">
            <AccountConfirmationPageItemImages />

            <AccountConfirmationPageItemTitle />
            <AccountConfirmationPageItemForm
              formData={formData}
              handleChange={handleChange}
              message={message}
              handleSubmit={handleSubmit}
            />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

interface AccountConfirmationPageItemFormProps {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  formData: IFormData;
  message?: IMessage;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function AccountConfirmationPageItemForm(
  prop: AccountConfirmationPageItemFormProps
) {
  const { handleSubmit, formData, handleChange, message } = prop;
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

      {message && (
        <Alert variant={message.status ? "success" : "danger"} className="mt-3">
          <p className="m-0 text-center">{message.message}</p>
        </Alert>
      )}
      <div className="d-flex justify-content-end">
        <Button type="submit" className="mt-4 customButtom">
          Enviar
        </Button>
      </div>
    </Form>
  );
}
function AccountConfirmationPageItemImages() {
  return (
    <div className="d-flex justify-content-center mb-4">
      <img
        src={confirmEmail}
        alt="imagesconfirmEmail"
        data-test="image-confirmEmail"
        className="img-fluid"
        style={{ maxWidth: "50%" }}
      />
    </div>
  );
}
function AccountConfirmationPageItemTitle() {
  return (
    <>
      <h2 className="mb-2 fs-1 text-center">Confirme su cuenta</h2>
      <p className="mb-4 ">
        Por favor, verifique su correo electrónico antes de iniciar sesión. Si
        no a recibido ningún correo de verificación, por favor revise en correo
        no deseado o spam.
      </p>
    </>
  );
}
