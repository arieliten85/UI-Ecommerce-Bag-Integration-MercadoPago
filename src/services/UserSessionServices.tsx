import axios, { AxiosError } from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userContext";
import { IFormData, IMessage, IServerResponse } from "../interfaces/interfaces";

export const UserSessionServices = () => {
  const formDataInitial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [message, setMessage] = useState<IMessage>();
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const { getAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState(formDataInitial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendConfirmationEmail = async (formData: IFormData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/resend-confirm-email`,
        formData
      );

      setMessage({
        status: true,
        error: false,
        message: response.data.message,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;
        if (axiosError.response) {
          setMessage({
            status: true,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      }
    }
  };
  const handleSignUp = async (formData: IFormData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        setRegisterSuccess(true);
        setMessage({
          status: true,
          error: false,
          message: "Registro exitoso",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;
        if (axiosError.response) {
          setMessage({
            status: true,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      }
    }
  };
  const handleSignIn = async (formData: IFormData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);

      if (response.status === 201) {
        getAuth(response.data.access_token);
        setLoginSuccess(true);
        setMessage({
          status: true,
          error: false,
          message: "Inicio de sesión exitoso. ¡Bienvenido!",
        });

        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;

        if (axiosError.response) {
          const errorMessage = axiosError.response.data.message;

          if (errorMessage === "Please verify your email before logging in.") {
            setShowModal(true);
            setMessage({
              status: true,
              error: true,
              message:
                "Por favor verifique su correo electrónico antes de iniciar sesión.",
            });
          } else {
            setMessage({
              status: true,
              error: true,
              message: "Por favor verifique sus datos",
            });
          }
        }
      }
    }
  };
  const handleSendResetPassword = async () => {
    try {
      setSendEmail(true);

      const response = await axios.post(
        `${API_BASE_URL}/auth/send-password-reset-email`,
        formData
      );

      if (response.status === 201) {
        setMessage({
          status: true,
          error: false,
          message: "Envío exitoso, por favor revise su correo",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;
        if (axiosError.response) {
          setMessage({
            status: false,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      }
    } finally {
      setSendEmail(false);
    }
  };
  const handleResetPassword = async (token: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
        password: formData.newPassword,
        token: token,
      });

      if (response.status === 201) {
        setResetSuccess(true);
        setMessage({
          status: true,
          error: false,
          message: "Tu contraseña ha sido restablecida con éxito.",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;
        if (axiosError.response) {
          setMessage({
            status: true,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      }
    }
  };
  const handleConfirmEmail = async (token: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/confirm-email`, {
        token,
      });

      if (response.status === 201) {
        setMessage({
          status: true,
          error: false,
          message: "Tu contraseña ha sido restablecida con éxito.",
        });
        navigate("/signin");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;

        if (axiosError.response) {
          setMessage({
            status: true,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      } else {
        setMessage({
          status: true,
          error: true,
          message: "Error request",
        });
      }
    }
  };
  const handleResendConfirmation = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/resend-confirm-email`,
        formData
      );

      if (response.status === 201) {
        setMessage({
          status: true,
          error: false,
          message:
            "Se ha enviado un correo electrónico con éxito. Por favor revise su bandeja de entrada para validar su cuenta.",
        });
        setShowModal(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;

        if (axiosError.response?.data.message === "Email does not exist") {
          setMessage({
            status: false,
            error: true,
            message: "El correo no existe",
          });
        }
      }
    }
  };
  return {
    showModal,
    setShowModal,
    handleChange,
    formData,
    sendConfirmationEmail,
    registerSuccess,
    loginSuccess,
    message,
    handleSignUp,
    handleSignIn,
    handleSendResetPassword,
    setSendEmail,
    sendEmail,
    handleResetPassword,
    resetSuccess,
    handleConfirmEmail,
    handleResendConfirmation,
  };
};
