import React, { useState } from "react";
import { Container, Table, Card, Button, Alert, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 1,
    image:
      "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    quantity: 2,
    image:
      "https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_1024x1024.png?v=1722230645",
  },
];

const CartPage = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const isAllSelected = selectedItems.length === cartItems.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const toggleItemSelection = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );

  const total = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (selectedCartItems.length > 0) {
      // Later pass selectedCartItems via state or context
      navigate("/checkout");
    } else {
      alert("Please select at least one product to checkout.");
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4">
        <h3 className="mb-4 text-center">🛒 Your Cart</h3>

        {cartItems.length === 0 ? (
          <Alert variant="info" className="text-center">
            Your cart is currently empty.
          </Alert>
        ) : (
          <>
            <Form.Check
              type="checkbox"
              label="Select All"
              className="mb-3"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />

            <Table responsive bordered hover>
              <thead className="table-dark">
                <tr>
                  <th>Select</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleItemSelection(item.id)}
                      />
                    </td>
                    <td>
                      <img src={item.image} alt={item.name} width="60" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-end">
              <h5>
                Total Selected Amount: <strong>${total.toFixed(2)}</strong>
              </h5>
              <Button variant="success" className="mt-3" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
};

export default CartPage;
