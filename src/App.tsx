//import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "./context/userContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <div id="pages">
            <NavBar />
            {<Outlet />}
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
