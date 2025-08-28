import axios from "axios";
import axiosInstance from "../../../services/axiosInstance";
import type {
  TokenResponse,
  TokenResponseErrorEmptyCredentials,
  TokenResponseErrorEmptyPass,
  TokenResponseErrorEmptyUser,
  TokenResponseErrorInvalidCredentials,
} from "../../../models/TokenResponse";
import type { User } from "../interfaces/user";
const endpoint = import.meta.env.VITE_LOGIN_ENDPOINT;
export const login = async (
  credentials: User
): Promise<TokenResponse> => {
  try {
    const response = await axiosInstance.post<TokenResponse>(endpoint, credentials);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError<TokenResponseErrorEmptyCredentials | TokenResponseErrorEmptyUser | TokenResponseErrorEmptyPass | TokenResponseErrorInvalidCredentials>(error) && error.response?.status === 400) {
      if (error.response?.data) {
        throw error.response.data;
      }
    }
    throw {
      error: "An unexpected error ocurred",
      message: "Ocurrió un error inesperado al intentar iniciar sesión",
    }
  }
};
