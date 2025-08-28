import { type ProductState, type ProductAction } from "../interfaces/product";

export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SELECTED":
      return { ...state, selectedProduct: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
