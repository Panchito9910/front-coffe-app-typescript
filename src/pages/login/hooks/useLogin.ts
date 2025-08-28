import { useState } from "react";
import type { User } from "../interfaces/user";
import { login } from "../service/loginService";
import type {
  TokenResponseErrorEmptyCredentials,
  TokenResponseErrorEmptyPass,
  TokenResponseErrorEmptyUser,
  TokenResponseErrorInvalidCredentials,
} from "../../../models/TokenResponse";
import { useAuth } from "../../../context/AuthProvider";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setTokens } = useAuth();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    credentials: User
  ) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const response = await login(credentials);
      setTokens(response.access, response.refresh);
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const errorData = error as
          | TokenResponseErrorEmptyCredentials
          | TokenResponseErrorEmptyUser
          | TokenResponseErrorEmptyPass
          | TokenResponseErrorInvalidCredentials;
        if ("username" in errorData && "password" in errorData) {
          setError("Debes ingresar usuario y contraseña");
        } else if ("username" in errorData) {
          setError("El campo usuario es obligatorio");
        } else if ("password" in errorData) {
          setError("El campo contraseña es obligatorio");
        } else if ("detail" in errorData) {
          setError("Credenciales incorrectas");
        } else {
          setError("Credenciales incorrectas");
        }
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { handleSubmit, isLoading, error };
};

export default useLogin;
