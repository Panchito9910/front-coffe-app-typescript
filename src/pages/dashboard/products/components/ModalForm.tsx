import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { type CreateProduct, type Product } from "../interfaces/product";
import useForm from "../../../../hooks/useForm";
import { ProductContext } from "../context/ProductContext";
const ModalForm = () => {
  const { showModal, handleShowModal, create, update, selectedProduct } =
    useContext(ProductContext);
  const { id, name, price, formData, handleInputChange } = useForm<Product>(selectedProduct);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await update(formData);
    } else {
      const newProduct: CreateProduct = {
        name: name,
        price: price,
      };
      await create(newProduct);
    }
  };
  return (
    <Modal show={showModal} onHide={handleShowModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{id ? "Update Product" : "Create Product"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="product" className="form-label">
              Product
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Enter product name"
              value={name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="price" className="form-label">
              Price
            </Form.Label>
            <Form.Control
              type="text"
              id="price"
              name="price"
              placeholder="Enter product price"
              value={price}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="info" type="submit" className="w-100">
            {id ? "Update" : "Create"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
