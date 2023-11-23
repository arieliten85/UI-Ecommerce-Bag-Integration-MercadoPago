import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";

import { EmailConfirmationPage } from "./pages/EmailConfirmationPage";
import { SignInPage } from "./pages/SignInPage";
import { SendResetPasswordPage } from "./pages/SendResetPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPages";
import { AccountConfirmationPage } from "./pages/AccountConfirmationPage ";

import { ProductsPage } from "./pages/ProductsPage";

import Cart from "./components/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },

      {
        path: "/auth/confirm",
        element: <EmailConfirmationPage />,
      },

      {
        path: "/auth/validateAccount",
        element: <AccountConfirmationPage />,
      },

      {
        path: "/user/sendResetPassword",
        element: <SendResetPasswordPage />,
      },
      {
        path: "/auth/resetPassword",
        element: <ResetPasswordPage />,
      },

      {
        path: "/products",
        element: <ProductsPage />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
