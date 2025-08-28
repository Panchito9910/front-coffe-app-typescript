import ProductProvider from "./context/ProductProvider";
import Main from "./Main";

const Products = () => {
  return (
    <ProductProvider>
      <Main />
    </ProductProvider>
  );
};

export default Products;
