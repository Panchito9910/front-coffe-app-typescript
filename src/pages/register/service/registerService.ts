import axios from "axios";
import axiosInstance from "../../../services/axiosInstance";
import type {
    RegisterResponse,
  RegisterUser,
  RegisterUserError,
} from "../interfaces/registerUser";
const endpoint = import.meta.env.VITE_REGISTER_ENDPOINT;
export const register = async (newUser: RegisterUser): Promise<RegisterResponse> => {
  try {
    const response = await axiosInstance.post<RegisterResponse>(endpoint, newUser);
    return response.data;
  } catch (error: unknown) {
    if (
      axios.isAxiosError<RegisterUserError>(error) &&
      error.response?.status === 400
    ) {
      if (error.response?.data) throw error.response.data;
    }
    throw {
      error: "An unexpected error ocurred",
      message: "Ocurrió un error inesperado al intentar iniciar sesión",
    };
  }
};
