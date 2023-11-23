import axios from "axios";
import { useState, ReactNode, createContext } from "react";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isAuth: boolean;
  getAuth: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: false,
  setUser: () => {},
  getAuth: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuth, setIsAuth] = useState(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    return storedIsAuth ? JSON.parse(storedIsAuth) : false;
  });

  const getAuth = (token: string) => {
    axios
      .get("http://localhost:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        localStorage.setItem("auth-token", token);
        setUser(res.data);
        setIsAuth(true);

        localStorage.setItem("isAuth", JSON.stringify(true));
      })
      .catch((error) => {
        console.log("Error al obtener el perfil:", error);
      });
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("isAuth");
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, getAuth, isAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
