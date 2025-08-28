import { useContext } from "react";
import ProductTable from "./components/ProductTable";
import { ProductContext } from "./context/ProductContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Filter from "./components/Filter";
import IconButton from "../../../components/IconButton";
import ModalForm from "./components/ModalForm";

const Main = () => {
  const { handleCreate } = useContext(ProductContext);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Products</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <IconButton
            className="btn-info"
            icon={faPlus}
            onClick={handleCreate}
          />
        </div>
      </div>
      <div className="my-3 w-25">
        <Filter />
      </div>
      <ProductTable />
      <ModalForm />
    </>
  );
};

export default Main;
