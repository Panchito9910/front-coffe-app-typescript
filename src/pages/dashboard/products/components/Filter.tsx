import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const Filter = () => {
  const { filter, handleChangeFilter } = useContext(ProductContext);
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search product"
      name="product"
      id="product"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};

export default Filter;
