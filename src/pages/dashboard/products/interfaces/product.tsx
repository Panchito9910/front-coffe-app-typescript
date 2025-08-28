export interface Product {
  id: number;
  name: string;
  price: string;
}

export interface CreateProduct {
  name: string;
  price: string;
}

export interface ProductErrorEmptyName {
  name: string;
}

export interface ProductErrorEmptyPrice {
  price: string;
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  selectedProduct: Product;
  loading: boolean;
  error: string | null;
  filter: string;
  showModal: boolean;
}

export type ProductAction =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_SELECTED"; payload: Product }
  | { type: "SET_LOADING"; payload: boolean }
  | {
      type: "SET_ERROR";
      payload: string | null;
    }
  | { type: "SET_FILTER"; payload: string }
  | { type: "TOGGLE_MODAL"; payload: boolean };


export interface ProductContextProps extends ProductState {
  loadData: () => void;
  create: (data: CreateProduct) => Promise<Product>;
  update: (data: Product) => Promise<Product>;
  del: (id: number) => Promise<void>;
  handleCreate: () => void;
  handleEdit: (product: Product) => void;
  handleDelete: (id: number) => void;
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredProducts: Product[];
  handleShowModal: () => void;
}
