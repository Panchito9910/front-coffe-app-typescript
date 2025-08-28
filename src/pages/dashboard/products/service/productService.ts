import axios from "axios";
import axiosInstance from "../../../../services/axiosInstance";
import {
  type ProductErrorEmptyName,
  type ProductErrorEmptyPrice,
  type CreateProduct,
  type Product,
} from "../interfaces/product";
const endpoint = import.meta.env.VITE_PRODUCT_ENDPOINT;

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>(endpoint);
  return response.data;
};

export const createProduct = async (
  product: CreateProduct
): Promise<Product> => {
  try {
    const response = await axiosInstance.post<Product>(endpoint, product);
    return response.data;
  } catch (error: unknown) {
    if (
      axios.isAxiosError<
        CreateProduct | ProductErrorEmptyName | ProductErrorEmptyPrice
      >(error) &&
      error.response?.status === 400
    ) {
      throw error?.response?.data;
    }
    throw {
      error: "An unexpected error ocurred",
      message: "Ocurrió un error inesperado al intentar iniciar sesión",
    };
  }
};

export const updateProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axiosInstance.put<Product>(
      `${endpoint}${product.id}/`,
      product
    );
    return response.data;
  } catch (error: unknown) {
    if (
      axios.isAxiosError<
        CreateProduct | ProductErrorEmptyName | ProductErrorEmptyPrice
      >(error) &&
      error.response?.status === 400
    ) {
      throw error?.response?.data;
    }
    throw {
      error: "An unexpected error ocurred",
      message: "Ocurrió un error inesperado al intentar iniciar sesión",
    };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await axiosInstance.delete<Product>(`${endpoint}${id}/`);
    if (response.status === 204) {
      return response.data;
    }
  } catch (error: unknown) {
    if (
      axios.isAxiosError<
        CreateProduct | ProductErrorEmptyName | ProductErrorEmptyPrice
      >(error) &&
      error.response?.status === 400
    )
      throw error?.response?.data;
  }
};
