import { ChangeEvent } from "react";
import { Container, Card, Form, Modal, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AccountConfirmationPage } from "./AccountConfirmationPage ";
import { UserSessionServices } from "../services/UserSessionServices";
import { IFormData, IMessage } from "../interfaces/interfaces";

export const SignInPage = () => {
  const {
    handleChange,
    formData,
    showModal,
    handleSignIn,
    message,
    setShowModal,
  } = UserSessionServices();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignIn(formData);
  };

  return (
    <Container className=" mt-5 vh-100 d-flex justify-content-center center align-items-center">
      <div
        className="d-flex mt-5 justify-content-center align-items-start h-100"
        style={{ width: "450px" }}
      >
        <Card style={{ maxWidth: "400px" }} className="border-0 w-100">
          <Card.Body className="p-4">
            <SignInPageItemTitle />
            <SignInPageItemForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <SignInPageItemMessage message={message} />
            <SignInPageItemHelpers />
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="border-0 mt-3 mx-3" closeButton />
        <Modal.Body>
          <AccountConfirmationPage />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

interface SignInPageItemFormProps {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: IFormData;
}
interface SignInPageItemMessageProps {
  message?: IMessage;
}
function SignInPageItemHelpers() {
  return (
    <div className="mt-3 text-center">
      <p className=" m-0" style={{ fontSize: "15px" }}>
        Don't have an account?
        <Link to="/signUp" className="text-black">
          <span
            style={{
              color: "#ccc8aa",
            }}
            className=" px-2"
          >
            Registarse.
          </span>
        </Link>
      </p>

      <p className=" m-0" style={{ fontSize: "15px" }}>
        Recuperar contraseña?
        <Link to="/user/sendResetPassword" className="text-black">
          <span
            style={{
              color: "#ccc8aa",
            }}
            className="px-2"
          >
            Click aquí.
          </span>
        </Link>
      </p>
    </div>
  );
}
function SignInPageItemMessage(props: SignInPageItemMessageProps) {
  const { message } = props;
  return (
    <>
      {message?.status && (
        <Alert variant="danger" className="mt-3 p-2 text-center">
          {message?.message}
        </Alert>
      )}
    </>
  );
}
function SignInPageItemForm(props: SignInPageItemFormProps) {
  const { handleSubmit, handleChange, formData } = props;
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
      <Form.Group className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </Form.Group>
      <button type="submit" className="px-4 w-100 customButtom">
        Iniciar seción
      </button>
    </Form>
  );
}
function SignInPageItemTitle() {
  return (
    <h1
      style={{
        fontSize: "50px",
        fontWeight: "700",
        color: "#ccc8aa",
      }}
      className=" mb-5 text-center"
    >
      Iniciar sesión
    </h1>
  );
}
