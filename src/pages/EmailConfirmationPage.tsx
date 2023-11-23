import { useEffect } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { UserSessionServices } from "../services/UserSessionServices";
import { IMessage } from "../interfaces/interfaces";

export const EmailConfirmationPage = () => {
  const { handleConfirmEmail, message } = UserSessionServices();

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    const token = params.token as string;

    handleConfirmEmail(token);
  }, []);

  return (
    <Container className=" mt-5 vh-100 d-flex justify-content-center center align-items-center">
      <div
        className="d-flex mt-5 justify-content-center align-items-start h-100"
        style={{ width: "450px" }}
      >
        <EmailConfirmationPageItemMessage message={message} />
      </div>
    </Container>
  );
};
interface EmailConfirmationPageItemMessageProps {
  message?: IMessage;
}
function EmailConfirmationPageItemMessage(
  props: EmailConfirmationPageItemMessageProps
) {
  const { message } = props;
  return (
    <div className="container mt-5 text-center  w-100">
      {message?.error && (
        <>
          <Alert variant="danger">
            <p className="m-0">{message?.message}</p>
          </Alert>
          <Link to={"/signIn"}>
            <Button type="submit" className="w-25 customButtom">
              Ingresar
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
