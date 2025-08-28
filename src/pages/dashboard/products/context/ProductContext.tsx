import { createContext } from "react";
import type { ProductContextProps } from "../interfaces/product";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
