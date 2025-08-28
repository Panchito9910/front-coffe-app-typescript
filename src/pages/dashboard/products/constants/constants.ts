import type { Product, ProductState } from "../interfaces/product";
export const initProductForm: Product = {
  id: 0,
  name: "",
  price: "",
};
export const initialProductState: ProductState = {
  products: [],
  filteredProducts: [],
  selectedProduct: initProductForm,
  loading: false,
  error: null,
  filter: "",
  showModal: false,
};
