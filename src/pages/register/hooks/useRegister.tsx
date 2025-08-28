import React, { useState } from "react";
import type {
  RegisterUser,
  RegisterUserError,
} from "../interfaces/registerUser";
import { register } from "../service/registerService";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    newUser: RegisterUser
  ) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const response = await register(newUser);
      if (response) console.log("User registered successfully", response);
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const errorData = error as RegisterUserError;
        if ("email" in errorData) {
          setError("El campo email es obligatorio");
        }

        if ("username" in errorData) {
          setError("El campo usuario es obligatorio");
        }

        if ("password" in errorData) {
          setError("El campo contraseña es obligatorio");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { handleSubmit, isLoading, error };
};

export default useRegister;
