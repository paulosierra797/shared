import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Table,
  Modal,
} from "react-bootstrap";

const ProductManagerPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, product]);
    setProduct({ name: "", price: "", image: "", category: "" });
    setShowModal(false);
  };

  const filteredProducts =
    categoryFilter === ""
      ? products
      : products.filter((p) => p.category === categoryFilter);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>🛍️ Product Management</h3>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Add Product
        </Button>
      </div>

      {/* Filter */}
      <Form.Group className="mb-3" controlId="filterCategory">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      {/* Products Table */}
      {filteredProducts.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((prod, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={prod.image}
                    alt="product"
                    style={{ width: "60px", height: "auto" }}
                  />
                </td>
                <td>{prod.name}</td>
                <td>${prod.price}</td>
                <td>{prod.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No products found.</p>
      )}

      {/* Add Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter product name"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter price"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                required
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <div className="d-grid">
              <Button variant="success" type="submit">
                Add Product
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductManagerPage;
