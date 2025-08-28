import { useContext, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/ProductContext";
const ProductTable = () => {
  const { filteredProducts, handleEdit, handleDelete } = useContext(ProductContext);
  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Calcular productos a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)      
  // Calcular número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  // Generar elementos de paginación
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(product)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDelete(product.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Controles de paginación */}
      <Pagination className="justify-content-center mt-3">
        {paginationItems}
      </Pagination>
    </>
  );
};

export default ProductTable;
