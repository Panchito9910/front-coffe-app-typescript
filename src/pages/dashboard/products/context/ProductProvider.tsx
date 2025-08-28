import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";
import type {
  CreateProduct,
  Product,
  ProductContextProps,
  ProductErrorEmptyName,
  ProductErrorEmptyPrice,
} from "../interfaces/product";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../service/productService";
import { initialProductState } from "../constants/constants";
import { initProductForm } from "../constants/constants";
interface ProductProviderProps {
  children: ReactNode;
}
const ProductProvider = ({ children }: ProductProviderProps) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const loadData = useCallback(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getProducts()
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }))
      .catch((error) => dispatch({ type: "SET_ERROR", payload: error }))
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const create = async (data: CreateProduct): Promise<Product> => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const product = await createProduct(data);
      loadData();
      handleShowModal()
      return product;
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const errorData = error as
          | CreateProduct
          | ProductErrorEmptyName
          | ProductErrorEmptyPrice;
        if ("name" in errorData && "price" in errorData) {
          dispatch({
            type: "SET_ERROR",
            payload: "El nombre y precio del producto son obligatorios",
          });
        } else if ("name" in errorData) {
          dispatch({ type: "SET_ERROR", payload: "El nombre es obligatorio" });
        } else if ("price" in errorData) {
          dispatch({ type: "SET_ERROR", payload: "El precio es obligatorio" });
        } else {
          dispatch({
            type: "SET_ERROR",
            payload: "Ocurrio un error inesperado",
          });
        }
        throw error;
      } else {
        dispatch({ type: "SET_ERROR", payload: "Ocurrio un error inesperado" });
        throw error;
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const update = async (data: Product): Promise<Product> => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const product = await updateProduct(data);
      loadData();
      handleShowModal()
      return product;
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const errorData = error as
          | CreateProduct
          | ProductErrorEmptyName
          | ProductErrorEmptyPrice;
        if ("name" in errorData && "price" in errorData) {
          dispatch({
            type: "SET_ERROR",
            payload: "El nombre y precio del producto son obligatorios",
          });
        } else if ("name" in errorData) {
          dispatch({ type: "SET_ERROR", payload: "El nombre es obligatorio" });
        } else if ("price" in errorData) {
          dispatch({ type: "SET_ERROR", payload: "El precio es obligatorio" });
        } else {
          dispatch({
            type: "SET_ERROR",
            payload: "Ocurrio un error inesperado",
          });
        }
        throw error;
      } else {
        dispatch({ type: "SET_ERROR", payload: "Ocurrio un error inesperado" });
        throw error;
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const del = async (id: number) => {
    const confirmed = false;
    if (!confirmed) return;
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      await deleteProduct(id);
      loadData();
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        dispatch({
          type: "SET_ERROR",
          payload: "El nombre y precio del producto son obligatorios",
        });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleCreate = useCallback(() => {
    dispatch({ type: "SET_SELECTED", payload: initProductForm });
    dispatch({ type: "TOGGLE_MODAL", payload: true });
  }, []);

  const handleEdit = useCallback((product: Product) => {
    dispatch({ type: "SET_SELECTED", payload: product });
    dispatch({ type: "TOGGLE_MODAL", payload: true });
  }, []);

  const handleDelete = (id: number) => {
    del(id);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };

  const filteredProducts = useMemo(() => {
    if (state.filter === "") return state.products;
    return state.products.filter((product) =>
      product.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  }, [state.products, state.filter]);

  const handleShowModal = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: false });
  };

  const productContextValues: ProductContextProps = {
    ...state,
    loadData,
    create,
    update,
    del,
    handleCreate,
    handleEdit,
    handleDelete,
    handleChangeFilter,
    filteredProducts,
    handleShowModal,
  };

  return (
    <ProductContext.Provider value={productContextValues}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
